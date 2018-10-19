webpackHotUpdate("static/development/pages/videochat.js",{

/***/ "./pages/videochat.js":
/*!****************************!*\
  !*** ./pages/videochat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoChatPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProfileHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProfileHeader */ "./components/ProfileHeader.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webrtc/MediaHandler */ "./webrtc/MediaHandler.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simple-peer */ "./node_modules/simple-peer/index.js");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_UserUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/UserUtils */ "./utils/UserUtils.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key






var xsrf = "";
var user = {
  id: ""
};
var xsrfToken = "";

var VideoChatPage =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChatPage, _Component);

  function VideoChatPage() {
    var _this;

    _classCallCheck(this, VideoChatPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoChatPage).call(this));
    _this.state = {
      hasMedia: false,
      otherUserId: "",
      memberId: ""
    };
    _this.user = user;
    _this.user.stream = null;
    _this.peers = {};
    _this.mediaHandler = new _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_4__["default"]();

    _this.setupPusher();

    _this.callTo = _this.callTo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setupPusher = _this.setupPusher.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.startPeer = _this.startPeer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(VideoChatPage, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(window.location.origin + "/currentuser");

              case 3:
                response = _context.sent;
                xsrf = response.data.token;
                user.id = response.data.currentUser;
                xsrfToken = xsrf;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
                console.log(this.user.id);
                console.log(xsrfToken);
                this.mediaHandler.getPermissions().then(function (stream) {
                  _this2.setState({
                    hasMedia: true
                  });

                  _this2.user.stream = stream;

                  try {
                    _this2.myVideo.srcObject = stream;
                  } catch (e) {
                    _this2.myVideo.src = URL.createObjectURL(stream);
                  }

                  _this2.myVideo.play();
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "setupPusher",
    value: function setupPusher() {
      var _this3 = this;

      //TODO: Pusher only one way: User->Admin
      pusher_js__WEBPACK_IMPORTED_MODULE_5___default.a.logToConsole = true;
      this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_5___default.a(APP_KEY, {
        authEndpoint: "/pusher/auth",
        cluster: "eu",
        auth: {
          params: this.user.id,
          headers: {
            "X-XSRF-Token": xsrfToken
          }
        }
      });
      this.channel = this.pusher.subscribe("presence-video-channel"); //presence: requires auth!
      // this.channel.bind("pusher:subscription_succeeded", function() {
      //   console.log("success");
      // });
      // this.channel.bind("pusher:member_removed", function(members) {
      //   console.log(member.id + "removed");
      // });
      // this.channel.bind("pusher:member_added", function(members) {
      //   console.log(member.id + "added");
      // });

      this.channel.bind("client-signal-".concat(this.user.id), function (signal) {
        var peer = _this3.peers[signal.userId]; // if peer does not already exist, we got an incoming call

        if (peer === undefined) {
          _this3.setState({
            otherUserId: signal.userId
          });

          peer = _this3.startPeer(signal.userId, false);
        }

        peer.signal(signal.data);
      });
    }
  }, {
    key: "startPeer",
    value: function startPeer(userId) {
      var _this4 = this;

      var initiator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      //TODO: initiator is always user!
      var peer = new simple_peer__WEBPACK_IMPORTED_MODULE_6___default.a({
        initiator: initiator,
        stream: this.user.stream,
        trickle: false
      });
      peer.on("signal", function (data) {
        _this4.channel.trigger("client-signal-".concat(userId), {
          type: "signal",
          userId: _this4.user.id,
          data: data
        });
      });
      peer.on("stream", function (stream) {
        try {
          _this4.myVideo.srcObject = stream; //bug -> why is the stream reloading?
        } catch (e) {
          _this4.myVideo.src = URL.createObjectURL(stream);
        }

        _this4.myVideo.play();
      });
      peer.on("close", function () {
        var peer = _this4.peers[userId];

        if (peer !== undefined) {
          peer.destroy(err);
        }

        _this4.peers[userId] = undefined;
      });
      return peer;
    }
  }, {
    key: "callTo",
    value: function callTo(userId) {
      this.peers[userId] = this.startPeer(userId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProfileHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "30px"
        }
      }, "Video Chat"), ["Sebster", "sdfg"].map(function (userId) {
        return _this5.user.id !== userId ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          key: userId,
          onClick: function onClick() {
            return _this5.callTo(userId);
          }
        }, "Call ", userId) : null;
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "video-container",
        style: {
          width: "650px",
          height: "380px",
          margin: "0px auto",
          position: "relative",
          border: "3px solid #000"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "my-video",
        ref: function ref(_ref) {
          _this5.myVideo = _ref;
        },
        style: {
          width: "130px",
          position: "absolute",
          left: "10px",
          bottom: "10px",
          border: "3px solid #0061ff",
          zIndex: "2"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
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
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Message"], {
        success: true,
        header: "You are connected to",
        content: this.state.memberId
      })));
    }
  }]);

  return VideoChatPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/videochat")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=videochat.js.ebdc71633c22bb16d382.hot-update.js.map