module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProfileHeader__ = __webpack_require__("./components/ProfileHeader.js");
var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/components/Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    style: {
      width: 650,
      border: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), props.children);
});

/***/ }),

/***/ "./components/ProfileHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/components/ProfileHeader.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var ProfileHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileHeader, _Component);

  function ProfileHeader() {
    var _this;

    _classCallCheck(this, ProfileHeader);

    _this = _possibleConstructorReturn(this, (ProfileHeader.__proto__ || Object.getPrototypeOf(ProfileHeader)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "profileBack", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/profile");
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "userProfile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/userdata");
      }
    });

    _this.logout = function (e) {
      return _this._logout();
    };

    _this.currentUser = Object(__WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__["a" /* default */])();
    return _this;
  }

  _createClass(ProfileHeader, [{
    key: "_logout",
    value: function _logout() {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_CookieUtils__["b" /* setCookie */])("x-access-token", "", -60 * 60);
      __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/login");
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
        pointing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        name: "home",
        onClick: this.profileBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
        name: "home",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        name: "view profile",
        onClick: this.userProfile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        name: "logout",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
        name: "user",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.currentUser)))));
    }
  }]);

  return ProfileHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/VideoChat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoChat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webrtc_MediaHandler__ = __webpack_require__("./webrtc/MediaHandler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_peer__ = __webpack_require__("simple-peer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_peer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_peer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__("jwt-decode");
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

var wrtc = __webpack_require__("wrtc");





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



/***/ }),

/***/ "./pages/videochat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ProfileHeader__ = __webpack_require__("./components/ProfileHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_VideoChat__ = __webpack_require__("./components/VideoChat.js");
var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/pages/videochat.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var VideoChatPage =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChatPage, _Component);

  function VideoChatPage() {
    _classCallCheck(this, VideoChatPage);

    return _possibleConstructorReturn(this, (VideoChatPage.__proto__ || Object.getPrototypeOf(VideoChatPage)).apply(this, arguments));
  }

  _createClass(VideoChatPage, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_ProfileHeader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_VideoChat__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })));
    }
  }]);

  return VideoChatPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (VideoChatPage);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

module.exports = routes;

/***/ }),

/***/ "./utils/CookieUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setCookie;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCookie;
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "HttpOnly;" + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

/***/ }),

/***/ "./utils/UserUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCurrentUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);


function getCurrentUser(currentUser) {
  var token = Object(__WEBPACK_IMPORTED_MODULE_0__CookieUtils__["a" /* getCookie */])('x-access-token');
  var decoded = __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token);
  currentUser = decoded.username;
  return currentUser;
}

/***/ }),

/***/ "./webrtc/MediaHandler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MediaHandler =
/*#__PURE__*/
function () {
  function MediaHandler() {
    _classCallCheck(this, MediaHandler);
  }

  _createClass(MediaHandler, [{
    key: "getPermissions",
    value: function getPermissions() {
      return new Promise(function (resolve, rej) {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then(function (stream) {
          resolve(stream);
        }).catch(function (err) {
          throw new Error("Unable to fetch stream ".concat(err));
        });
      });
    }
  }]);

  return MediaHandler;
}();



/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/videochat.js");


/***/ }),

/***/ "jwt-decode":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "simple-peer":
/***/ (function(module, exports) {

module.exports = require("simple-peer");

/***/ }),

/***/ "wrtc":
/***/ (function(module, exports) {

module.exports = require("wrtc");

/***/ })

/******/ });
//# sourceMappingURL=videochat.js.map