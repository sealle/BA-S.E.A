webpackHotUpdate(7,{

/***/ "./components/VideoChat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoChat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webrtc_MediaHandler__ = __webpack_require__("./webrtc/MediaHandler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_peer__ = __webpack_require__("./node_modules/simple-peer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_peer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_peer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/components/VideoChat.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var APP_KEY = "0f924dcd44dc93a88aa7";

var wrtc = __webpack_require__("./node_modules/wrtc/lib/browser.js");





var VideoChat =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChat, _Component);

  function VideoChat() {
    var _this;

    _classCallCheck(this, VideoChat);

    _this = _possibleConstructorReturn(this, (VideoChat.__proto__ || Object.getPrototypeOf(VideoChat)).call(this));
    _this.state = {
      hasMedia: false,
      otherUserName: ""
    };
    var token = Object(__WEBPACK_IMPORTED_MODULE_5__utils_CookieUtils__["a" /* getCookie */])("x-access-token");
    var decoded = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(token);
    var userName = Object(__WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__["a" /* default */])();
    window.user = {
      name: userName
    };
    window.xsrftoken = decoded.xsrftoken;
    _this.user = window.user;
    _this.user.stream = null;
    _this.peers = {};
    _this.mediaHandler = new __WEBPACK_IMPORTED_MODULE_1__webrtc_MediaHandler__["a" /* default */]();

    _this.setupPusher();

    _this.callTo = _this.callTo.bind(_assertThisInitialized(_this));
    _this.setupPusher = _this.setupPusher.bind(_assertThisInitialized(_this));
    _this.startPeer = _this.startPeer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VideoChat, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.mediaHandler.getPermissions().then(function (stream) {
        _this2.setState({
          hasMedia: true
        });

        _this2.user.stream = stream;
        /*try {
          this.myVideo.srcObject = stream;
        } catch (e) {*/

        _this2.myVideo.src = URL.createObjectURL(stream); //}

        _this2.myVideo.play();
      });
    }
  }, {
    key: "setupPusher",
    value: function setupPusher() {
      var _this3 = this;

      //TODO: Pusher only one way: User->Admin
      //Pusher.logToConsole = true;
      this.pusher = new __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a(APP_KEY, {
        authEndpoint: "/pusher/auth",
        cluster: "eu",
        auth: {
          params: this.user.name,
          headers: {
            "X-XSRF-Token": window.xsrfToken
          }
        }
      });
      this.channel = this.pusher.subscribe("presence-video-channel"); //presence: requires auth!

      this.channel.bind("client-signal-".concat(this.user.name), function (signal) {
        var peer = _this3.peers[signal.userName]; // if peer is not already exists, we got an incoming call

        if (peer === undefined) {
          _this3.setState({
            otherUserName: signal.userName
          });

          peer = _this3.startPeer(signal.userName, false);
        }

        peer.signal(signal.data);
      });
      /*this.channel.bind('pusher:subscription_succeeded', function() {
              alert('successfully subscribed!');
          });*/
    }
  }, {
    key: "startPeer",
    value: function startPeer(userName) {
      var _this4 = this;

      var initiator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var wrtc = arguments.length > 2 ? arguments[2] : undefined;
      //TODO: initiator is always user!
      var peer = new __WEBPACK_IMPORTED_MODULE_3_simple_peer___default.a({
        initiator: initiator,
        stream: this.user.stream,
        trickle: false,
        wrtc: wrtc
      });
      peer.on("signal", function (data) {
        _this4.channel.trigger("client-signal-".concat(userName), {
          type: "signal",
          userName: _this4.user.name,
          data: data
        });
      });
      peer.on("stream", function (stream) {
        /*try {
          this.myVideo.srcObject = stream; //bug -> why is the stream reloading?
        } catch (e) {
          this.myVideo.src = URL.createObjectURL(stream);
          console.log(e);
        }
         this.myVideo.play();
        });*/
        _this4.userVideo.src = URL.createObjectURL(stream); //this.userVideo.srcObject = stream; //bug -> why is the stream reloading?

        var playPromise = _this4.userVideo.play();

        if (playPromise !== null) {
          playPromise.catch(function () {
            _this4.userVideo.play();
          });
        }
      });
      peer.on("close", function () {
        var peer = _this4.peers[userName];

        if (peer !== undefined) {
          peer.destroy(err);
        }

        _this4.peers[userName] = undefined;
      });
      return peer;
    }
  }, {
    key: "callTo",
    value: function callTo(userName) {
      this.peers[userName] = this.startPeer(userName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "VideoChat",
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "VideoChat"), ["Admin"].map(function (userName) {
        return _this5.user.name !== userName ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          key: userName,
          onClick: function onClick() {
            return _this5.callTo(userName);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, "Call ", userName) : null;
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "video-container",
        style: {
          width: "500px",
          height: "380px",
          margin: "0px auto",
          position: "relative",
          border: "6px solid #645cff"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        className: "my-video",
        ref: function ref(_ref) {
          _this5.myVideo = _ref;
        },
        style: {
          width: "130px",
          position: "absolute",
          left: "10px",
          bottom: "10px",
          border: "6px solid #2196F3",
          zIndex: "2"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        className: "user-video",
        ref: function ref(_ref2) {
          _this5.userVideo = _ref2;
        },
        style: {
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: "1"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      })));
    }
  }]);

  return VideoChat;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=7.c25f3276f58153ae8e5f.hot-update.js.map