exports.ids = [2];
exports.modules = {

/***/ "./components/VideoChatUser.js":
/*!*************************************!*\
  !*** ./components/VideoChatUser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoChat; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webrtc/MediaHandler */ "./webrtc/MediaHandler.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simple-peer */ "simple-peer");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-otp-input */ "react-otp-input");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recordrtc */ "recordrtc");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/src/web3 */ "./ethereum/src/web3.js");
/* harmony import */ var _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/src/contract */ "./ethereum/src/contract.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_13__);


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




var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_7___default.a.StereoAudioRecorder;






var xsrfToken = "";
var pusher;
var peer;
var channelName;
var userName;
var userNames = [];
var recordRTC;
var firstMember; //User's videochat

var VideoChat =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChat, _Component);

  function VideoChat() {
    var _this;

    _classCallCheck(this, VideoChat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoChat).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupPusher", function () {
      //log pusher to console
      //Pusher.logToConsole = true;
      //create new Pusher
      pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_3___default.a(APP_KEY, {
        authEndpoint: "/pusher/auth",
        cluster: "eu",
        auth: {
          params: _this.currentUser.id,
          headers: {
            "X-XSRF-Token": xsrfToken
          }
        }
      }); //create new presence-channel

      channelName = pusher.subscribe("presence-video-channel"); //requires auth
      //get members in channel

      channelName.bind("pusher:subscription_succeeded", function (members) {
        //get id of Admin from the object
        firstMember = Object.keys(members.members)[0];
      }); //listener for added members to the channel

      channelName.bind("pusher:member_added", function (member) {
        console.log("connected to" + member.id); // swal("You are conneted to", `${member.id}`, "success"); //Only Admin!!

        if (userNames.includes(member.id) === false) {
          userNames.push(member.id);
        }

        console.log(userNames);
      }); //listener for added members to the channel

      channelName.bind("pusher:member_removed", function (member) {
        console.log(userName);
        var i = userNames.indexOf(userName);
        userNames.splice(i, 1);
        console.log(userNames);

        _this.setState({
          img1: !_this.state.img1,
          showMrzValidationButton: !_this.state.showMrzValidationButton,
          disableButton: true
        });
      }); //bind client signal to channel
      //this is executed when the event is triggered

      channelName.bind("client-signal-".concat(_this.currentUser.id), function (signal) {
        var peer = _this.peers[signal.userId]; // if peer does not already exist, we got an incoming call

        if (peer === undefined) {
          //start peer where initiator = false
          peer = _this.startPeer(signal.userId, false);

          _this.setState({
            isConnected: true
          });
        }

        peer.signal(signal.data);
      });
      channelName.bind("client-message-".concat(_this.currentUser.id), function (message) {
        Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_5__["setCookie"])("x-access-token", "", -60 * 60);
        window.location.href = "/login";
        _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].push("/login");
      });
      channelName.bind("client-approval-".concat(_this.currentUser.id), function (message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_13___default()({
          title: "Success!",
          text: "The user has entered the correct OTP",
          type: "success",
          confirmButtonText: "Confirm",
          onClose: function onClose() {
            //Stop audio recording and send .wav file to server
            recordRTC.stopRecording(
            /*#__PURE__*/
            _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
              var formData, recordedBlob, fileName, file, response, accounts, fname, lname, idNum, kycKey, hash;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      formData = new FormData();
                      recordedBlob = recordRTC.getBlob();
                      console.log(recordedBlob);
                      fileName = "".concat(userName, ".wav");
                      file = new File([recordedBlob], fileName, {
                        mimeType: "audio/wav"
                      });
                      console.log(file);
                      formData.append("fileName", fileName);
                      formData.append("file", file);
                      formData.append("userName", userName);

                      _this.setState({
                        isRecording: ""
                      });

                      _context.next = 12;
                      return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(window.location.origin + "/approval", formData);

                    case 12:
                      response = _context.sent;

                      if (!response.data.success) {
                        _context.next = 26;
                        break;
                      }

                      _context.next = 16;
                      return _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_8__["default"].eth.getAccounts();

                    case 16:
                      accounts = _context.sent;
                      fname = response.data.fname;
                      lname = response.data.lname;
                      idNum = response.data.idNum;
                      kycKey = response.data.kycKey;
                      console.log(fname, lname, idNum, kycKey);
                      hash = _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_8__["default"].utils.soliditySha3("".concat(fname, " ").concat(lname, " ").concat(idNum, " ").concat(kycKey));
                      _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_9__["default"].methods.storeHash(hash).send({
                        from: accounts[0]
                      });
                      _context.next = 27;
                      break;

                    case 26:
                      console.log("error");

                    case 27:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            })));
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startPeer", function (userId) {
      var initiator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      //create new Peer
      peer = new simple_peer__WEBPACK_IMPORTED_MODULE_4___default.a({
        initiator: initiator,
        stream: _this.currentUser.stream,
        trickle: false
      }); //log simple-peer to console
      // peer._debug = console.log
      //sends offer signal to peer
      //connection established when peer sends answer

      peer.on("signal", function (data) {
        channelName.trigger("client-signal-".concat(userId), {
          type: "signal",
          userId: _this.currentUser.id,
          data: data
        });
      }); //when the connection is established get the peer's audio/video stream

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
          } //start recording the audio line


          recordRTC = recordrtc__WEBPACK_IMPORTED_MODULE_7___default()(stream, {
            //TODO: Which stream is beeing recorded? How to record both streams?
            recorderType: StereoAudioRecorder,
            mimeType: "audio/wav"
          });
          recordRTC.startRecording();

          _this.setState({
            isRecording: "Recording..."
          });
        } catch (e) {
          console.log(e.stack);
        }
      });
      return peer;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "otpVerify",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res, otpToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(window.location.origin + "/otpToken");

            case 2:
              res = _context2.sent;

              if (!res.data.success) {
                _context2.next = 17;
                break;
              }

              otpToken = res.data.otpToken; //check whether otpToken is the same as the entered otp

              console.log(_this.state.otp);
              console.log(otpToken);

              if (!(otpToken === _this.state.otp)) {
                _context2.next = 16;
                break;
              }

              _context2.next = 10;
              return channelName.trigger("client-approval-".concat(firstMember), {
                message: "User entered correct OTP"
              });

            case 10:
              //destroy P2P connection
              peer.destroy();
              Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_5__["setCookie"])("x-access-token", "", -60 * 60);
              window.location.href = "/login";
              _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].push("/login");
              _context2.next = 17;
              break;

            case 16:
              _this.setState({
                message: "wrong OTP!"
              });

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this.state = {
      hasMedia: false,
      userName: "",
      message: "",
      isConnected: false,
      disableButton: true,
      isRecording: ""
    };
    _this.currentUser = {
      id: "",
      stream: undefined
    };
    _this.peers = [];
    _this.mediaHandler = new _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
    return _this;
  }

  _createClass(VideoChat, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(window.location.origin + "/videochat/stream");

              case 3:
                response = _context3.sent;
                this.setState({
                  userName: response.data.currentUser
                });
                this.currentUser.id = this.state.userName;
                xsrfToken = response.data.token;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 12:
                //ask for permission to allow microphone and webcam
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
                return _context3.abrupt("return");

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }() //setting up pusher API

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.isConnected === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Dimmer"], {
        active: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Loader"], {
        indeterminate: true
      }, "Waiting for Admin")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        style: {
          width: "71%",
          marginBottom: "13px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_otp_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
        style: {
          margin: "auto",
          width: "70%"
        },
        value: this.state.otp,
        onChange: function onChange(otp) {
          _this3.setState({
            otp: otp,
            otpEntered: true
          });
        },
        numInputs: 6,
        separator: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "-")
      }), this.state.message ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.message
      }) : null), this.state.otpEntered ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        style: {
          color: "white",
          backgroundColor: "#ff3344",
          width: "50%",
          margin: "0px auto"
        },
        fluid: true,
        onClick: this.otpVerify
      }, "Submit") : null)));
    }
  }]);

  return VideoChat;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./ethereum/src/contract.js":
/*!**********************************!*\
  !*** ./ethereum/src/contract.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/src/web3.js");
 //contract address and ABI/Interface to connect to it

var contractAddress = "0x0523A4Da9E7f1eBcbcb5BeBa44440D4Ac4Ef0F5A"; //address of SC

var contractABI = [{
  constant: false,
  inputs: [{
    name: "confirmed",
    type: "bool"
  }],
  name: "answer",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: true,
  inputs: [],
  name: "getHashes",
  outputs: [{
    name: "",
    type: "bytes32[]"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "kycKey",
    type: "string"
  }, {
    name: "platformAddress",
    type: "address"
  }],
  name: "verify",
  outputs: [],
  payable: true,
  stateMutability: "payable",
  type: "function"
}, {
  constant: false,
  inputs: [{
    name: "newHash",
    type: "bytes32"
  }],
  name: "storeHash",
  outputs: [],
  payable: false,
  stateMutability: "nonpayable",
  type: "function"
}, {
  constant: false,
  inputs: [],
  name: "payKYC",
  outputs: [],
  payable: true,
  stateMutability: "payable",
  type: "function"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: "kycKey",
    type: "string"
  }, {
    indexed: false,
    name: "platformAddress",
    type: "address"
  }, {
    indexed: false,
    name: "sender",
    type: "address"
  }],
  name: "KycListen",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    name: "confirmed",
    type: "bool"
  }],
  name: "PlatformListen",
  type: "event"
}];
/* harmony default export */ __webpack_exports__["default"] = (new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(contractABI, contractAddress));

/***/ }),

/***/ "./ethereum/src/web3.js":
/*!******************************!*\
  !*** ./ethereum/src/web3.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
 //use givenProvider to access the ethereum network

var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3__WEBPACK_IMPORTED_MODULE_0___default.a.givenProvider || "ws://localhost:3000");
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes")();

module.exports = routes; //add dynamic route 

routes.add("passwordchange", "/passwordchange/:id", "passwordchange");

/***/ }),

/***/ "./utils/CookieUtils.js":
/*!******************************!*\
  !*** ./utils/CookieUtils.js ***!
  \******************************/
/*! exports provided: setCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
//set cookie function
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "HttpOnly;" + ";path=/";
} //get cookie function

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

/***/ }),

/***/ "./webrtc/MediaHandler.js":
/*!********************************!*\
  !*** ./webrtc/MediaHandler.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//function to get the users media
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



/***/ })

};;
//# sourceMappingURL=2.js.map