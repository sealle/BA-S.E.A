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
/* harmony import */ var otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! otplib/otplib-browser */ "./node_modules/otplib/otplib-browser.js");
/* harmony import */ var otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-otp-input */ "./node_modules/react-otp-input/lib/index.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tesseract.ts */ "./node_modules/tesseract.ts/dist/index.js");
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tesseract_ts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recordrtc */ "./node_modules/recordrtc/RecordRTC.js");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-image-crop */ "./node_modules/react-image-crop/dist/ReactCrop.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _style_loader_css_loader_react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! style-loader!css-loader!react-image-crop/dist/ReactCrop.css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var _style_loader_css_loader_react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_18__);


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






var parse = __webpack_require__(/*! mrz */ "./node_modules/mrz/src/index.js").parse;


var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_11___default.a.StereoAudioRecorder;







var xsrfToken = "";
var pusher;
var peer;
var channelName;
var userName;
var userNames = [];
var recordRTC;

var VideoChat =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChat, _Component);

  function VideoChat() {
    var _this$state;

    var _this;

    _classCallCheck(this, VideoChat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoChat).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupPusher", function () {
      //Pusher.logToConsole = true;
      pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_5___default.a(APP_KEY, {
        authEndpoint: "/pusher/auth",
        cluster: "eu",
        auth: {
          params: _this.currentUser.id,
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_18___default()("You are conneted to", "".concat(member.id), "success"); //Only Admin!!

        if (userNames.includes(member.id) === false) {
          userNames.push(member.id);
        }

        console.log(userNames);
      });
      channelName.bind("pusher:member_removed", function (member) {
        console.log(userName);
        var i = userNames.indexOf(userName);
        userNames.splice(i, 1);
        console.log(userNames);

        _this.setState({
          img1: !_this.state.img1,
          disableButton: true
        }); // This executed twice when OTP verifiy? TODO:

      });
      channelName.bind("client-signal-".concat(_this.currentUser.id), function (signal) {
        var peer = _this.peers[signal.userId]; // if peer does not already exist, we got an incoming call

        if (peer === undefined) {
          // this.setState({ otherUserId: signal.userId });
          peer = _this.startPeer(signal.userId, false);

          _this.setState({
            isConnected: true
          }); //callee //if offer is sent, stop!

        }

        peer.signal(signal.data);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "startPeer", function (userId) {
      var initiator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      peer = new simple_peer__WEBPACK_IMPORTED_MODULE_6___default.a({
        initiator: initiator,
        stream: _this.currentUser.stream,
        trickle: false
      });
      peer.on("signal", function (data) {
        channelName.trigger("client-signal-".concat(userId), {
          type: "signal",
          userId: _this.currentUser.id,
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

          recordRTC = recordrtc__WEBPACK_IMPORTED_MODULE_11___default()(stream, {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "callTo",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId) {
        var currentUser, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  isNotCalled: false,
                  disableButton: false
                });

                _this.peers[userId] = _this.startPeer(userId);
                currentUser = userId;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(window.location.origin + "/usrs", {
                  currentUser: currentUser
                });

              case 5:
                response = _context.sent;

                if (response.data.success) {
                  _this.setState({
                    img1: response.data.pic1,
                    img2: response.data.pic2,
                    doc1: response.data.doc1,
                    doc2: response.data.doc2,
                    users: response.data.userData
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decline",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              peer.destroy();
              recordRTC.stopRecording(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                var formData, recordedBlob, fileName, file, response;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
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

                        _context2.next = 12;
                        return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(window.location.origin + "/decline", formData);

                      case 12:
                        response = _context2.sent;

                        if (response.data.success) {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_18___default()("User declined", "", "success");

                          _this.setState({
                            isCalled: false
                          });
                        } else {
                          console.log("something went wrong!");
                        }

                      case 14:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              })));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "show", function (dimmer) {
      _this.setState({
        dimmer: dimmer,
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "returnHome", function () {
      _this.setState({
        open: false
      });

      Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__["setCookie"])("x-access-token", "", -60 * 60);
      window.location.href = "/login";
      _routes__WEBPACK_IMPORTED_MODULE_17__["Router"].push("/login");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sendOTP",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var otpSecret, otpToken;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({
                loading: true
              });

              otpSecret = otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8__["authenticator"].generateSecret();
              console.log(otpSecret);
              otpToken = otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8__["authenticator"].generate(otpSecret);
              console.log(otpToken);
              console.log(userName); //Stop audio recording and send .wav file to server

              recordRTC.stopRecording(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
                var formData, recordedBlob, fileName, file, response;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
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
                        formData.append("otpToken", otpToken);
                        formData.append("userName", userName);

                        _this.setState({
                          isRecording: ""
                        });

                        _context4.next = 13;
                        return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(window.location.origin + "/createOTP", formData);

                      case 13:
                        response = _context4.sent;

                        if (response.data.success) {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_18___default()("OTP sent!", "", "success");

                          _this.setState({
                            isCalled: false,
                            loading: false
                          });
                        }

                      case 15:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              })));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "otpVerify",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var res, otpToken, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(window.location.origin + "/otpToken");

            case 2:
              res = _context6.sent;

              if (!res.data.success) {
                _context6.next = 16;
                break;
              }

              otpToken = res.data.otpToken;
              console.log(otpToken);
              console.log(_this.state.otp); // let isValid = authenticator.check(this.state.otp, otpSecret);
              // console.log(isValid);

              if (!(otpToken === _this.state.otp)) {
                _context6.next = 15;
                break;
              }

              _context6.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(window.location.origin + "/approval");

            case 10:
              response = _context6.sent;

              if (response.data.success) {
                Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__["setCookie"])("x-access-token", "", -60 * 60);
                window.location.href = "/login";
                _routes__WEBPACK_IMPORTED_MODULE_17__["Router"].push("/login");
              } else {
                console.log("oops");
              }

              peer.destroy();
              _context6.next = 16;
              break;

            case 15:
              _this.setState({
                message: "wrong OTP!"
              });

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ocrScan", function () {
      _this.setState({
        loadingOCR: true
      });

      var image = document.getElementById("mrz-code");
      tesseract_ts__WEBPACK_IMPORTED_MODULE_10__["Tesseract"].recognize(image).then(function (result, err) {
        if (err) {
          console.log(err);
        }

        var ocrText1 = JSON.stringify(result.text).substring(1, 31);
        var ocrText2 = JSON.stringify(result.text).substring(33, 63);
        var ocrText3 = JSON.stringify(result.text).substring(65, 95);
        var ocrLines = [];
        ocrLines.push(ocrText1, ocrText2, ocrText3);
        var res = parse(ocrLines);

        if (res.valid === true) {
          _this.setState({
            idIsValid: true
          });
        } else {
          _this.setState({
            idIsValid: false
          });
        }

        _this.setState({
          loadingOCR: false,
          ocr: result.text,
          isCalled: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCropChange1", function (crop) {
      _this.setState({
        crop: crop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleImageLoaded1", function (image) {
      console.log(image);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCropComplete1", function (crop, pixelCrop) {
      console.log(crop, pixelCrop);
      var canvasRef = _this.imagePreviewCanvasRef.current;
      var image1 = "static/IDD.jpg"; // let image1 = "static/" + this.state.img1;

      _this.cropImage(canvasRef, image1, pixelCrop);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCropChange2", function (crop) {
      _this.setState({
        crop: crop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleImageLoaded2", function (image) {
      console.log(image);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCropComplete2", function (crop, pixelCrop) {
      console.log(crop, pixelCrop);
      var canvasRef = _this.imagePreviewCanvasRef.current; // let image2 = "static/cvbn-IDfront.jpg";

      var image2 = "static/" + _this.state.img2;

      _this.cropImage(canvasRef, image2, pixelCrop);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cropImage", function (canvasRef, image64, pixelCrop) {
      var canvas = canvasRef;
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
      var ctx = canvas.getContext("2d");
      var image = new Image();
      image.src = image64;

      image.onload = function () {
        ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
      };
    });

    _this.imagePreviewCanvasRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.state = (_this$state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      role: 1,
      isNotCalled: "true",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: "",
      isEdited: "",
      activeItem: "videochat",
      ethAddresses: [],
      ethAddressArray: []
    }, _defineProperty(_this$state, "message", ""), _defineProperty(_this$state, "sent", false), _defineProperty(_this$state, "idIsValid", ""), _defineProperty(_this$state, "users", []), _defineProperty(_this$state, "isConnected", false), _defineProperty(_this$state, "disableButton", true), _defineProperty(_this$state, "recordAudio", null), _defineProperty(_this$state, "isRecording", ""), _defineProperty(_this$state, "crop", {
      aspect: 8 / 1.5
    }), _this$state);
    _this.currentUser = {
      id: "",
      stream: undefined
    };
    _this.peers = [];
    _this.mediaHandler = new _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_4__["default"](); // this.setupPusher = this.setupPusher.bind(this);
    // this.startPeer = this.startPeer.bind(this);
    // this.show = this.show.bind(this);

    return _this;
  }

  _createClass(VideoChat, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.post(window.location.origin + "/videochat/stream" // { timeout: 60 * 4 * 1000 }
                );

              case 3:
                response = _context7.sent;
                this.setState({
                  userName: response.data.currentUser,
                  role: response.data.role
                });
                this.currentUser.id = this.state.userName;
                xsrfToken = response.data.token;
                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                console.log(_context7.t0);

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
                return _context7.abrupt("return");

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 9]]);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), this.state.role == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Segment"], {
        style: {
          marginTop: "16px",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        className: "video-container",
        style: {
          width: "500px",
          height: "380px",
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        style: {
          width: "62%"
        }
      }, this.state.disableButton === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        animated: true,
        loading: this.state.loading,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        hidden: true
      }, "Quit Call")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.state.isRecording)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
        hidden: true
      }, "Quit Call")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.state.isRecording)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        width: "eight"
      }, this.state.img1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
        dragging: false,
        slidesToShow: 1,
        style: {
          width: "75%",
          margin: "auto"
        },
        renderBottomCenterControls: false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_image_crop__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: {
          width: "100%",
          margin: "auto"
        } // src={`../static/${this.state.img1}`}
        ,
        src: "static/IDD.jpg",
        crop: this.state.crop,
        onChange: this.handleOnCropChange1,
        onImageLoaded: this.handleImageLoaded1,
        onComplete: this.handleOnCropComplete1
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_image_crop__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: {
          width: "100%",
          margin: "auto"
        },
        src: "../static/".concat(this.state.img2) // src={"static/cvbn-IDfront.jpg"}
        ,
        crop: this.state.crop,
        onChange: this.handleOnCropChange2,
        onImageLoaded: this.handleImageLoaded2,
        onComplete: this.handleOnCropComplete2
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        id: "mrz-code",
        ref: this.imagePreviewCanvasRef,
        style: {
          width: "300%",
          display: "none"
        }
      }), this.state.idIsValid ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Message"], {
        header: "Valid!",
        success: true,
        content: this.state.ocr,
        style: {
          width: "75%",
          marginLeft: "12.5%",
          boxShadow: "1px 1px 11px green",
          border: "1px solid green"
        }
      }) : this.state.idIsValid === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Message"], {
        header: "NOT Valid!",
        success: true,
        content: this.state.ocr,
        style: {
          boxShadow: "1px 1px 11px red",
          border: "1px solid red"
        }
      }) : null) : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        width: "eight"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        style: {// display: "inline-block",
          // textAlign: "center",
          // marginTop: "10px",
          // width: "64%",
          // marginBottom: "10px"
        }
      }, userNames.map(function (userId) {
        var _React$createElement;

        return _this3.currentUser.id !== userId && // this.state.isNotCalled ? (
        userNames != [] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], (_React$createElement = {
          key: userId,
          animated: true,
          floated: "left"
        }, _defineProperty(_React$createElement, "key", userId), _defineProperty(_React$createElement, "onClick", function onClick() {
          _this3.callTo(userId);

          userName = userId;
        }), _defineProperty(_React$createElement, "style", {
          backgroundColor: "white",
          border: "1px solid black",
          width: "32%"
        }), _React$createElement), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
          visible: true
        }, "Call ", userId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"].Content, {
          hidden: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          name: "phone",
          color: "blue"
        }))) : null;
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Grid"].Column, {
        width: "eight"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        onClick: this.ocrScan,
        loading: this.state.loadingOCR
      }, "Validate MRZ Code")))))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.isConnected === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Dimmer"], {
        active: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Loader"], {
        indeterminate: true
      }, "Waiting for Admin")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
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
      })), this.state.sent ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Message"], {
        success: true,
        header: "Success",
        content: this.state.message
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Container"], {
        style: {
          width: "71%",
          marginBottom: "13px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_otp_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
        value: this.state.otp,
        onChange: function onChange(otp) {
          _this3.setState({
            otp: otp,
            otpEntered: true
          });
        } // onChange={otp => console.log(otp)}
        ,
        numInputs: 6,
        separator: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "-")
      }), this.state.message ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.message
      }) : null), this.state.otpEntered ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
        style: {
          color: "white",
          backgroundColor: "#ff3344",
          width: "50%",
          margin: "0px auto"
        },
        fluid: true,
        onClick: this.otpVerify
      }, "Submit") : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__["Button"], {
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
//# sourceMappingURL=admin.js.94e59564953424caf078.hot-update.js.map