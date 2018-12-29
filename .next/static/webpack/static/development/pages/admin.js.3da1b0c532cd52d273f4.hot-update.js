webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/VideoChat.js":
/*!*********************************!*\
  !*** ./components/VideoChat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoChat; });
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
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var otplib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! otplib */ "./node_modules/otplib/index.js");
/* harmony import */ var otplib__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(otplib__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var otplib_authenticator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! otplib/authenticator */ "./node_modules/otplib/authenticator.js");
/* harmony import */ var otplib_authenticator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(otplib_authenticator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-otp-input */ "./node_modules/react-otp-input/lib/index.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);


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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key









var xsrfToken = "";
var pusher;
var peer;
var channelName;
var userName;
var userNames = [];
var token = "";

var VideoChat =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChat, _Component);

  function VideoChat() {
    var _this$state;

    var _this;

    _classCallCheck(this, VideoChat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoChat).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "callTo", function (userId) {
      // console.log(`starting Pusher: ${userId}`);
      _this.setState({
        isNotCalled: false
      }); //TODO: show encall button only when in call?


      _this.peers[userId] = _this.startPeer(userId);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decline",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              peer.destroy();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(window.location.origin + "/decline", {
                userName: userName
              });

            case 3:
              response = _context.sent;

              if (response.data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()("User declined", "", "success");
              } else {
                console.log("something went wrong!");
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "returnHome", function () {
      _this.setState({
        open: false
      });

      Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__["setCookie"])("x-access-token", "", -60 * 60);
      window.location.href = "/login";
      _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].push("/login");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sendOTP",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var otpSecret, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              otpSecret = otplib_authenticator__WEBPACK_IMPORTED_MODULE_9___default.a.generateSecret();
              console.log(otpSecret);

              _this.setState({
                otpSecret: otpSecret
              });

              token = otplib_authenticator__WEBPACK_IMPORTED_MODULE_9___default.a.generate(otpSecret);
              console.log(token);
              _context2.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(window.location.origin + "/createOTP", {
                userName: userName,
                token: token
              });

            case 7:
              response = _context2.sent;

              if (response.data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()("OTP sent!", "", "success");
                console.log(_this.state.otpSecret);
              }

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "otpVerify",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var otpSecret, isValid;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(_this.state.otpSecret);
              otpSecret = _this.state.otpSecret;
              console.log(token);
              isValid = otplib_authenticator__WEBPACK_IMPORTED_MODULE_9___default.a.check(token, otpSecret);
              console.log(isValid); // console.log(otp) //TODO: Why undefined????
              // console.log(token);
              // if (otp === token) {
              //   console.log("yess")
              //   let response = await axios.post(window.location.origin + "/approval", {
              //     userName
              //   });
              //   if (response.data.success) {
              //     setCookie("x-access-token", "", -60 * 60);
              //     window.location.href = "/login";
              //     Router.push("/login");
              //   } else {
              //     console.log("oops")
              //   }
              // } else {
              //   this.setState({ message: "wrong OTP!" });
              // }

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _this.state = (_this$state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      role: "",
      isNotCalled: "true",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: "",
      isEdited: "",
      activeItem: "videochat",
      ethAddresses: [],
      ethAddressArray: []
    }, _defineProperty(_this$state, "message", ""), _defineProperty(_this$state, "sent", false), _defineProperty(_this$state, "activeUser", ""), _defineProperty(_this$state, "calledTo", false), _this$state);
    _this.currentUser = {
      id: "",
      stream: undefined
    };
    _this.peers = [];
    _this.mediaHandler = new _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_4__["default"](); // this.setupPusher();
    // this.callTo = this.callTo.bind(this);

    _this.setupPusher = _this.setupPusher.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.startPeer = _this.startPeer.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.endCall = this.endCall.bind(this);
    // this.approval = this.approval.bind(this);

    _this.show = _this.show.bind(_assertThisInitialized(_assertThisInitialized(_this))); // this.closeModal = this.closeModal.bind(this);

    return _this;
  }

  _createClass(VideoChat, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(window.location.origin + "/videochat/stream", {
                  timeout: 60 * 4 * 1000
                });

              case 3:
                response = _context4.sent;
                this.setState({
                  userName: response.data.currentUser,
                  role: response.data.role
                });
                this.currentUser.id = this.state.userName;
                xsrfToken = response.data.token;
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 12:
                this.mediaHandler.getPermissions().then(function (stream) {
                  _this2.setState({
                    hasMedia: true
                  });

                  _this2.currentUser.stream = stream;

                  try {
                    var myVideo = document.getElementById("my-video");
                    myVideo.srcObject = stream;
                    var playPromise = myVideo.play();

                    if (playPromise !== null) {
                      playPromise.then(function () {
                        return myVideo.play();
                      }).catch(function (e) {
                        console.log(e);
                      });
                    }
                  } catch (e) {
                    console.log(e.stack);
                  }
                });
                this.setupPusher();
                return _context4.abrupt("return");

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "setupPusher",
    value: function setupPusher() {
      var _this3 = this;

      //Pusher.logToConsole = true;
      pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_5___default.a(APP_KEY, {
        authEndpoint: "/pusher/auth",
        cluster: "eu",
        auth: {
          params: this.currentUser.id,
          headers: {
            "X-XSRF-Token": xsrfToken
          }
        }
      });
      channelName = pusher.subscribe("presence-video-channel"); //requires auth
      // channelName.bind("pusher:subscription_succeeded", member => {
      // userNames = members.id;
      // channelName.members.each(member => {
      //   userNames = member.id;
      //   // userNames.push(member.id)
      //   console.log(userNames)
      // })
      // console.log(countMembers);
      // });

      channelName.bind("pusher:member_added", function (member) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default()("You are conneted to", "".concat(member.id), "success"); // userName = member.id;

        userNames.push(member.id);
        console.log(userNames); // let newConnect = member.id;
        // // swal("Attention", "Admin is occupied, please wait...", "warning");
        // axios.post(window.location.origin + "/pusher/count", {
        //   newConnect
        // });
      });
      channelName.bind("pusher:member_removed", function (member) {
        console.log(userName);
        var i = userNames.indexOf(userName);
        userNames.splice(i, 1); // this.show();

        console.log(userNames); // swal("Removed `${member.id}`", "Please press End Call to approve or decline the user" , "success");
        //reload admin page?
      });
      channelName.bind("client-signal-".concat(this.currentUser.id), function (signal) {
        var peer = _this3.peers[signal.userId]; // if peer does not already exist, we got an incoming call

        if (peer === undefined) {
          // this.setState({ otherUserId: signal.userId });
          peer = _this3.startPeer(signal.userId, false); //callee //if offer is sent, stop!
        }

        peer.signal(signal.data);
      });
    }
  }, {
    key: "startPeer",
    value: function startPeer(userId) {
      var _this4 = this;

      var initiator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      //caller
      //TODO: initiator is always user!
      peer = new simple_peer__WEBPACK_IMPORTED_MODULE_6___default.a({
        initiator: initiator,
        stream: this.currentUser.stream,
        trickle: false
      });
      peer.on("signal", function (data) {
        channelName.trigger("client-signal-".concat(userId), {
          type: "signal",
          userId: _this4.currentUser.id,
          data: data
        });
      });
      peer.on("stream", function (stream) {
        try {
          var userVideo = document.getElementById("user-video");
          userVideo.srcObject = stream;
          var playPromise = userVideo.play();

          if (playPromise !== null) {
            playPromise.then(function () {
              return userVideo.play();
            }).catch(function (e) {
              console.log(e);
            });
          }
        } catch (e) {
          console.log(e.stack);
        }
      });
      return peer;
    }
  }, {
    key: "show",
    value: function show(dimmer) {
      this.setState({
        dimmer: dimmer,
        open: true
      });
    }
  }, {
    key: "render",
    // show(dimmer) {
    //   this.setState({ dimmer, open: true });
    // }
    // closeModal() {
    //   this.setState({ open: false });
    // }
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.role == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
        style: {
          margin: "16px",
          width: "98%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        className: "video-container",
        style: {
          width: "500px",
          height: "376px",
          margin: "0px auto",
          border: "2px solid black",
          position: "relative"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "my-video",
        id: "my-video",
        style: {
          width: "130px",
          position: "absolute",
          left: "10px",
          bottom: "10px",
          border: "2px solid #0061ff",
          zIndex: "2"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "user-video",
        id: "user-video",
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        style: {
          display: "inline-block",
          // textAlign: "center",
          marginTop: "10px",
          width: "64%",
          marginBottom: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "32%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "32%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"].Content, {
        hidden: true
      }, "Quit Call")), userNames.map(function (userId) {
        var _React$createElement;

        return _this5.currentUser.id !== userId && // this.state.isNotCalled ? (
        userNames != [] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], (_React$createElement = {
          key: userId,
          animated: true,
          floated: "left"
        }, _defineProperty(_React$createElement, "key", userId), _defineProperty(_React$createElement, "onClick", function onClick() {
          _this5.callTo(userId);

          userName = userId;

          _this5.setState({
            calledTo: true
          });
        }), _defineProperty(_React$createElement, "style", {
          backgroundColor: "white",
          border: "1px solid black",
          width: "32%"
        }), _React$createElement), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"].Content, {
          visible: true
        }, "Call ", userId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"].Content, {
          hidden: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
          name: "phone",
          color: "blue"
        }))) : null;
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null))))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.calledTo === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Dimmer"], {
        active: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Loader, {
        indeterminate: true
      }, "Admin is in a call"))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        className: "video-container",
        style: {
          width: "500px",
          height: "376px",
          margin: "0px auto",
          border: "2px solid black",
          position: "relative"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "my-video",
        id: "my-video",
        style: {
          width: "130px",
          position: "absolute",
          left: "10px",
          bottom: "10px",
          border: "2px solid #0061ff",
          zIndex: "2"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "user-video",
        id: "user-video",
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
      })), this.state.sent ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
        success: true,
        header: "Success",
        content: this.state.message
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        style: {
          width: "71%",
          marginBottom: "13px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_otp_input__WEBPACK_IMPORTED_MODULE_10___default.a, {
        value: this.state.otp,
        onChange: function onChange(otp) {
          token = otp;

          _this5.setState({
            otpEntered: true
          });
        } // onChange={otp => console.log(otp)}
        ,
        numInputs: 6,
        separator: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "-")
      }), this.state.message ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.message
      }) : null), this.state.otpEntered ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        style: {
          color: "white",
          backgroundColor: "#ff3344",
          width: "50%",
          margin: "0px auto"
        },
        fluid: true,
        onClick: this.otpVerify
      }, "Submit") : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        id: "returnHome",
        style: {
          color: "white",
          width: "50%",
          margin: "0px auto"
        },
        fluid: true,
        onClick: this.returnHome
      }, "Submit"))));
    }
  }]);

  return VideoChat;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=admin.js.3da1b0c532cd52d273f4.hot-update.js.map