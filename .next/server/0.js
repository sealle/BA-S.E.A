exports.ids = [0];
exports.modules = {

/***/ "./components/AdminConsole.js":
/*!************************************!*\
  !*** ./components/AdminConsole.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminConsole; });
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
/* harmony import */ var otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! otplib/otplib-browser */ "otplib/otplib-browser");
/* harmony import */ var otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tesseract.ts */ "tesseract.ts");
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tesseract_ts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recordrtc */ "recordrtc");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nuka-carousel */ "nuka-carousel");
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-image-crop */ "react-image-crop");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_loader_css_loader_react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! style-loader!css-loader!react-image-crop/dist/ReactCrop.css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/react-image-crop/dist/ReactCrop.css");
/* harmony import */ var _style_loader_css_loader_react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_react_image_crop_dist_ReactCrop_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/src/web3 */ "./ethereum/src/web3.js");
/* harmony import */ var _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/src/contract */ "./ethereum/src/contract.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var multistreamsmixer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! multistreamsmixer */ "multistreamsmixer");
/* harmony import */ var multistreamsmixer__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(multistreamsmixer__WEBPACK_IMPORTED_MODULE_18__);


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





var parse = __webpack_require__(/*! mrz */ "mrz").parse;


var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_8___default.a.StereoAudioRecorder;










var xsrfToken = "";
var pusher;
var peer;
var channelName;
var userName;
var userNames = [];
var recordRTC;
var firstMember; //Videochat and User list

var AdminConsole =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminConsole, _Component);

  function AdminConsole() {
    var _this$state;

    var _this;

    _classCallCheck(this, AdminConsole);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminConsole).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setupPusher", function () {
      //log pusher to console
      // Pusher.logToConsole = true;
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_17___default()("You are conneted to", "".concat(member.id), "success"); //push added member into array

        if (userNames.includes(member.id) === false) {
          userNames.push(member.id);
        }

        console.log(userNames);
      }); //listener for removed members to the channel

      channelName.bind("pusher:member_removed", function (member) {
        console.log(userName); //delete removed member from array

        var i = userNames.indexOf(userName);
        userNames.splice(i, 1);
        console.log(userNames);

        _this.setState({
          img1: !_this.state.img1,
          showMrzValidationButton: !_this.state.showMrzValidationButton,
          disableButton: true,
          disableUserList: false
        });
      }); //bind client signal to channel
      //this is executed for the callee when the initiator triggers a call

      channelName.bind("client-signal-".concat(_this.currentUser.id), function (signal) {
        var peer = _this.peers[signal.userId]; // if peer does not already exist, we got an incoming call

        if (peer === undefined) {
          //start peer where initiator = false
          peer = _this.startPeer(signal.userId, false);
        }

        peer.signal(signal.data);
      }); //listener for user when declined

      channelName.bind("client-message-".concat(_this.currentUser.id), function (message) {
        //delete cookie and send user to login page
        Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_5__["setCookie"])("x-access-token", "", -60 * 60);
        window.location.href = "/login";
        _routes__WEBPACK_IMPORTED_MODULE_16__["Router"].push("/login");
      }); //listener for admin if user has successfully entered otp and ended the process

      channelName.bind("client-approval-".concat(_this.currentUser.id), function (message) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_17___default()({
          title: "Success!",
          text: "The user has entered the correct OTP",
          type: "success",
          confirmButtonText: "Confirm",
          //when admin confirms, send audio recording in db
          //hash user data and send to smart contract
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
                      fileName = "".concat(userName, ".wav"); //convert recorded blob to a file and send it to the server

                      file = new File([recordedBlob], fileName, {
                        mimeType: "audio/wav"
                      });
                      console.log(file);
                      formData.append("fileName", fileName);
                      formData.append("file", file);
                      formData.append("userName", userName);

                      _this.setState({
                        isRecording: ""
                      }); //get user data from server


                      _context.next = 12;
                      return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/approval", formData);

                    case 12:
                      response = _context.sent;

                      if (!response.data.success) {
                        _context.next = 26;
                        break;
                      }

                      _context.next = 16;
                      return _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts();

                    case 16:
                      accounts = _context.sent;
                      fname = response.data.fname;
                      lname = response.data.lname;
                      idNum = response.data.idNum;
                      kycKey = response.data.kycKey;
                      console.log(fname, lname, idNum, kycKey); //hash user data and store in smart contract

                      hash = _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_12__["default"].utils.soliditySha3("".concat(fname, " ").concat(lname, " ").concat(idNum, " ").concat(kycKey));
                      _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_13__["default"].methods.storeHash(hash).send({
                        from: accounts[0],
                        gas: 200000,
                        gasPrice: "5000000000"
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
      // peer._debug = console.log;
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
          } //send both streams to MultiStreamsMixer


          var audioMixer = new multistreamsmixer__WEBPACK_IMPORTED_MODULE_18__["MultiStreamsMixer"]([_this.currentUser.stream, stream]); //start recording the mixed streams

          recordRTC = recordrtc__WEBPACK_IMPORTED_MODULE_8___default()(audioMixer.getMixedStream(), {
            recorderType: StereoAudioRecorder,
            mimeType: "audio/wav"
          }); //start recording

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
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(userId) {
        var currentUser, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  isNotCalled: false,
                  disableButton: false,
                  disableUserList: true
                }); //start call to userId


                _this.peers[userId] = _this.startPeer(userId);
                currentUser = userId;
                console.log(userId); //get the peer's data

                _context2.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/videochat/user", {
                  currentUser: currentUser
                });

              case 6:
                response = _context2.sent;

                if (response.data.success) {
                  _this.setState({
                    usrs: response.data.userData,
                    img1: response.data.img1,
                    img2: response.data.img2
                  });
                }

                console.log(_this.state.img1);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "decline",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _this.setState({
                declineLoading: true
              }); //destroy P2P connection


              peer.destroy(); //stop audio recording

              recordRTC.stopRecording(
              /*#__PURE__*/
              _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                var formData, recordedBlob, fileName, file, response;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        formData = new FormData();
                        recordedBlob = recordRTC.getBlob();
                        console.log(recordedBlob);
                        fileName = "".concat(userName, ".wav"); //convert recorded blob to a file and send it to the server

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

                        _context3.next = 12;
                        return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/decline", formData);

                      case 12:
                        response = _context3.sent;

                        if (response.data.success) {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_17___default()("User declined", "", "success"); //trigger client-event to redirect declined user to login page

                          channelName.trigger("client-message-".concat(userName), {
                            message: "You have been declined!"
                          });
                        } else {
                          console.log("something went wrong!");
                        }

                      case 14:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              })));

              _this.setState({
                declineLoading: false
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sendOTP",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var otpSecret, otpToken, formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this.setState({
                loading: true
              }); //genereate a otp secret


              otpSecret = otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_6__["authenticator"].generateSecret(); //generate otp

              otpToken = otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_6__["authenticator"].generate(otpSecret);
              formData = new FormData();
              formData.append("otpToken", otpToken);
              formData.append("userName", userName);
              _context5.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/createOTP", formData);

            case 8:
              response = _context5.sent;

              if (response.data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_17___default()("OTP sent!", "", "success");

                _this.setState({
                  loading: false
                });
              } else {
                console.log("error");
              }

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ocrScan", function () {
      _this.setState({
        loadingOCR: true
      }); //get cropped image from canvas


      var image = document.getElementById("mrz-code"); //use tesseract to read the mrz code

      tesseract_ts__WEBPACK_IMPORTED_MODULE_7__["Tesseract"].recognize(image).then(function (result, err) {
        if (err) {
          console.log(err);
        }

        var ocrLines = [];
        console.log(_this.state.usrs[0].idType);

        if (_this.state.usrs[0].idType == "id") {
          //prepare data for identity card mrz verification
          var ocrText1 = JSON.stringify(result.text).substring(1, 31);
          var ocrText2 = JSON.stringify(result.text).substring(33, 63);
          var ocrText3 = JSON.stringify(result.text).substring(65, 95);
          ocrLines.push(ocrText1, ocrText2, ocrText3);
        } else {
          //prepare data for drivers license mrz verification
          var _ocrText = JSON.stringify(result.text).substring(1, 10);

          var _ocrText2 = JSON.stringify(result.text).substring(12, 42);

          var _ocrText3 = JSON.stringify(result.text).substring(44, 74);

          ocrLines.push(_ocrText, _ocrText2, _ocrText3);
        } //verify mrz code


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
          ocrFormat: res.format
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
      _this.setState({
        showMrzValidationButton: true
      }); //get canvas, the image and the pixelCrop


      var canvasRef = _this.imageCropPreviewCanvasRef.current;
      var image1 = "static/" + _this.state.img1; //trigger crop function

      _this.cropImage(canvasRef, image1, pixelCrop);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCropChange2", function (crop) {
      _this.setState({
        crop: crop
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleImageLoaded2", function (image) {
      console.log("image");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnCropComplete2", function (crop, pixelCrop) {
      _this.setState({
        showMrzValidationButton: true
      }); //get canvas, the image and the pixelCrop


      var canvasRef = _this.imageCropPreviewCanvasRef.current;
      var image2 = "static/" + _this.state.img2; //trigger crop function

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLoadImage", function () {
      _this.carouselRef.setDimensions();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "takeSnapshot",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var img, canvas, context;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              img = document.getElementById("user-video");
              canvas = document.getElementById("snapshot");
              context = canvas.getContext("2d");
              context.drawImage(img, 0, 0, 500, 300); //convert image to blob

              canvas.toBlob(
              /*#__PURE__*/
              function () {
                var _ref7 = _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(blob) {
                  var imageName, image, formData, response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          imageName = "".concat(userName, ".png"); //convert blob to file

                          image = new File([blob], imageName, {
                            mimeType: "image/png"
                          }); //send file to server

                          formData = new FormData();
                          formData.append("imageName", imageName);
                          formData.append("image", image);
                          formData.append("userName", userName);
                          _context6.next = 8;
                          return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/storeSnapshot", formData);

                        case 8:
                          response = _context6.sent;

                          if (response.data.success) {
                            console.log("success");

                            _this.setState({
                              snapshotMessage: "Snapshot saved!"
                            });
                          } else {
                            console.log("error");
                          }

                        case 10:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));

                return function (_x2) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectUser",
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(member, e, dimmer) {
        var currentUser, response, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                currentUser = member.username;
                _context8.prev = 1;
                _context8.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/usrs", {
                  currentUser: currentUser
                });

              case 4:
                response = _context8.sent;

                if (response.data.success) {
                  _this.setState({
                    usrs: response.data.userData,
                    beneficialOwners: response.data.beneficialOwners
                  }); //get Array of ethAddresses


                  for (i = 1; i < _this.state.usrs.length; i++) {
                    _this.state.ethAddresses[i] = _this.state.usrs[i].ethAddress;
                  }
                }

                _context8.next = 11;
                break;

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](1);
                console.log(_context8.t0);

              case 11:
                _this.setState({
                  dimmer: dimmer,
                  open: true,
                  isChosen: true
                });

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[1, 8]]);
      }));

      return function (_x3, _x4, _x5) {
        return _ref8.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModal",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
      var userName, response, a, i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              userName = _this.state.usrs[0].username; //when closed, change edit state in DB to null

              _context9.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/changeEdit", {
                userName: userName
              });

            case 3:
              response = _context9.sent;

              if (response.data.success) {
                _this.setState({
                  open: false,
                  ethAddresses: []
                });

                a = false;

                for (i = 0; i < _this.state.users.length; i++) {
                  if (!_this.state.users[i].edited) {
                    _this.setState({
                      isEdited: null
                    });
                  }
                }
              }

            case 5:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toList", function () {
      _this.setState({
        isVideo: false,
        activeItem: "users"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toVideo", function () {
      _this.setState({
        isVideo: true,
        activeItem: "videochat"
      }); //get microphone and webcam


      _this.mediaHandler.getPermissions().then(function (stream) {
        _this.setState({
          hasMedia: true
        });

        _this.currentUser.stream = stream;

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
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "show", function (dimmer) {
      _this.setState({
        dimmer: dimmer,
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAccordionClick", function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;
      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({
        activeIndex: newIndex
      });
    });

    _this.imageCropPreviewCanvasRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.state = (_this$state = {
      hasMedia: false,
      userName: "",
      role: 1,
      isNotCalled: "true",
      message: "",
      loading: false,
      isEdited: "",
      activeItem: "videochat",
      ethAddresses: [],
      sent: false,
      idIsValid: "",
      users: [],
      disableButton: true,
      isRecording: "",
      snapshotMessage: ""
    }, _defineProperty(_this$state, "activeItem", "videochat"), _defineProperty(_this$state, "isVideo", true), _defineProperty(_this$state, "crop", {
      x: 0,
      y: 60,
      width: 100,
      height: 40
    }), _this$state); //create object for current user

    _this.currentUser = {
      id: "",
      stream: undefined
    };
    _this.peers = [];
    _this.mediaHandler = new _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_2__["default"]();
    return _this;
  }

  _createClass(AdminConsole, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                //check whether the edit state of users change
                setInterval(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
                  var response, i;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.prev = 0;
                          _context10.next = 3;
                          return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/userlist");

                        case 3:
                          response = _context10.sent;

                          if (response.data.success) {
                            _this2.setState({
                              users: response.data.userData
                            });

                            for (i = 0; i < _this2.state.users.length; i++) {
                              if (_this2.state.users[i].edited) {
                                _this2.setState({
                                  isEdited: _this2.state.users[i].edited
                                });
                              }
                            }
                          }

                          _context10.next = 10;
                          break;

                        case 7:
                          _context10.prev = 7;
                          _context10.t0 = _context10["catch"](0);
                          console.log(_context10.t0);

                        case 10:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10, this, [[0, 7]]);
                })), 1000); //request current user data from server

                _context11.prev = 1;
                _context11.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(window.location.origin + "/videochat/stream");

              case 4:
                response = _context11.sent;
                this.setState({
                  userName: response.data.currentUser,
                  role: response.data.role
                });
                this.currentUser.id = this.state.userName;
                xsrfToken = response.data.token;
                _context11.next = 13;
                break;

              case 10:
                _context11.prev = 10;
                _context11.t0 = _context11["catch"](1);
                console.log(_context11.t0);

              case 13:
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
                return _context11.abrupt("return");

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 10]]);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }() //setting up pusher API

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          open = _this$state2.open,
          dimmer = _this$state2.dimmer,
          activeItem = _this$state2.activeItem,
          activeIndex = _this$state2.activeIndex;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"], {
        pointing: true,
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        active: activeItem === "videochat",
        name: "video",
        onClick: this.toVideo,
        style: {
          color: "#2985d0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "video"
      }), "Videochat"), this.state.disableUserList ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        disabled: true,
        active: activeItem === "users",
        name: "users",
        onClick: this.toList,
        style: {
          color: "#2985d0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "users"
      }), "Userlist", this.state.isEdited ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "circle thin",
        size: "tiny",
        color: "red",
        style: {
          marginBottom: "10px",
          marginLeft: "2px"
        }
      }) : null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Menu"].Item, {
        active: activeItem === "users",
        name: "users",
        onClick: this.toList,
        style: {
          color: "#2985d0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "users"
      }), "Userlist", this.state.isEdited ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "circle thin",
        size: "tiny",
        color: "red",
        style: {
          marginBottom: "10px",
          marginLeft: "2px"
        }
      }) : null)), this.state.isVideo ? //videochat view
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], {
        style: {
          marginTop: "16px",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        style: {
          width: "500px",
          margin: "0px auto"
        }
      }, this.state.disableButton === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.takeSnapshot,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "camera"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        hidden: true
      }, "Snapshot")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        animated: true,
        loading: this.state.loading,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        animated: true,
        loading: this.state.declineLoading,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        hidden: true
      }, "Quit Call")), this.state.isRecording ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        style: {
          display: "inline-block"
        },
        color: "red",
        loading: true,
        name: "spinner"
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        style: {
          paddingTop: "5px"
        }
      }, this.state.snapshotMessage)) : //disable buttons when not in call
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.takeSnapshot,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "camera"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        hidden: true
      }, "Snapshot")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
        hidden: true
      }, "Quit Call")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.state.isRecording)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        width: "eight"
      }, this.state.img1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_9___default.a, {
        ref: function ref(node) {
          _this3.carouselRef = node;
        },
        dragging: false,
        slidesToShow: 1,
        style: {
          maxWidth: "451px",
          margin: "auto"
        },
        renderBottomCenterControls: false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onLoad: this.handleLoadImage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_image_crop__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          width: "451px",
          height: "287px",
          margin: "auto"
        },
        src: "../static/".concat(this.state.img1),
        crop: this.state.crop,
        onChange: this.handleOnCropChange1,
        onImageLoaded: this.handleImageLoaded1,
        onComplete: this.handleOnCropComplete1
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_image_crop__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: {
          width: "451px",
          height: "287px",
          margin: "auto"
        },
        src: "../static/".concat(this.state.img2),
        crop: this.state.crop,
        onChange: this.handleOnCropChange2,
        onImageLoaded: this.handleImageLoaded2,
        onComplete: this.handleOnCropComplete2
      }))), this.state.showMrzValidationButton ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        onClick: this.ocrScan,
        loading: this.state.loadingOCR
      }, "Validate MRZ Code")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        id: "mrz-code",
        ref: this.imageCropPreviewCanvasRef,
        style: {
          width: "300%",
          display: "none"
        }
      }), this.state.idIsValid ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Message"], {
        header: "Valid! Type: ".concat(this.state.ocrFormat),
        success: true,
        content: this.state.ocr,
        style: {
          width: "75%",
          marginLeft: "12.5%",
          boxShadow: "1px 1px 11px green",
          border: "1px solid green"
        }
      }) : this.state.idIsValid === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Message"], {
        header: "Not Valid! Type: ".concat(this.state.ocrFormat),
        success: true,
        content: this.state.ocr,
        style: {
          boxShadow: "1px 1px 11px red",
          border: "1px solid red"
        }
      }) : null) : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        width: "eight"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        style: {
          width: "500px",
          margin: "0px auto"
        }
      }, userNames.map(function (userId) {
        var _React$createElement;

        return _this3.currentUser.id !== userId && userNames != [] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], (_React$createElement = {
          key: userId,
          animated: true,
          floated: "left"
        }, _defineProperty(_React$createElement, "key", userId), _defineProperty(_React$createElement, "onClick", function onClick() {
          _this3.callTo(userId);

          userName = userId;
        }), _defineProperty(_React$createElement, "style", {
          backgroundColor: "white",
          border: "1px solid black",
          width: "31%"
        }), _React$createElement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
          visible: true
        }, "Call ", userId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"].Content, {
          hidden: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          name: "phone",
          color: "blue"
        }))) : null;
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("canvas", {
        id: "snapshot",
        width: "500",
        height: "300",
        style: {
          display: "none"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Grid"].Column, {
        width: "eight"
      }))))) : //user list view
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.users.map(function (member) {
        return (//when user declined, show red border
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"], {
            key: member.id,
            raised: true,
            style: member.kycKey === "declined" ? {
              height: "400x",
              width: "180px",
              display: "inline-block",
              margin: "18px",
              border: "1px solid red"
            } : {
              height: "400x",
              width: "180px",
              display: "inline-block",
              margin: "18px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Content, null, member.edited ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
            name: "circle thin",
            size: "small",
            color: "red",
            style: {
              float: "right",
              marginRight: "-21px",
              marginTop: "-19px"
            }
          }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Header, null, member.username, member.isRegistered == "yes" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
            name: "checkmark",
            color: "green",
            style: {
              float: "right"
            }
          }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
            name: "x",
            color: "red",
            style: {
              float: "right"
            }
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Meta, {
            style: {
              marginTop: "2px"
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Last Modified: ", member.lastModified)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Description, null, member.lname, ", ", member.fname)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Card"].Content, {
            extra: true,
            style: {
              textAlign: "center"
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
            onClick: _this3.selectUser.bind(_this3, member)
          }, "View Profile")))
        );
      }), this.state.isChosen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Modal"], {
        dimmer: dimmer,
        open: open,
        onClose: this.closeModal
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Modal"].Header, null, "Profile of ", this.state.usrs[0].username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Modal"].Content, {
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Username",
        value: this.state.usrs[0].username
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "ID",
        value: this.state.usrs[0].id
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "First Name",
        value: this.state.usrs[0].fname
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Last Name",
        value: this.state.usrs[0].lname
      })), this.state.usrs[0].edited == "address" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "eleven",
        fluid: true,
        label: "Street",
        value: this.state.usrs[0].street
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "five",
        fluid: true,
        label: "House Number",
        value: this.state.usrs[0].houseNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        value: this.state.usrs[0].postCode
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "ten",
        fluid: true,
        label: "Place of Residence",
        value: this.state.usrs[0].placeOfRes
      }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "eleven",
        fluid: true,
        label: "Street",
        value: this.state.usrs[0].street
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "five",
        fluid: true,
        label: "House Number",
        value: this.state.usrs[0].houseNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        value: this.state.usrs[0].postCode
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "ten",
        fluid: true,
        label: "Place of Residence",
        value: this.state.usrs[0].placeOfRes
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Date of Birth",
        value: this.state.usrs[0].dateOfBirth
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Nationality",
        value: this.state.usrs[0].nat
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal"
      }, this.state.usrs[0].edited == "email" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        fluid: true,
        label: "Email",
        type: "email",
        value: this.state.usrs[0].email
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Email",
        type: "email",
        value: this.state.usrs[0].email
      }), this.state.usrs[0].edited == "mobNr" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        fluid: true,
        label: "Mobile Number",
        type: "number",
        value: this.state.usrs[0].mobNr
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Mobile Number",
        type: "number",
        value: this.state.usrs[0].mobNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        width: "sixteen"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        width: "sixteen",
        readOnly: true,
        fluid: true,
        label: "Registration Date",
        value: this.state.usrs[0].regDate
      })), this.state.beneficialOwners.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Accordion"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Accordion"].Title, {
        active: activeIndex === 0,
        index: 0,
        onClick: this.handleAccordionClick,
        style: {
          fontWeight: "bold"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "dropdown"
      }), "Beneficial Owners of the Assets"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Accordion"].Content, {
        active: activeIndex === 0
      }, this.state.beneficialOwners.map(function (beneficialOwner) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "First Name",
          value: beneficialOwner.ownerName
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Last Name",
          value: beneficialOwner.ownerLastName
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          width: "eleven",
          fluid: true,
          label: "Street",
          value: beneficialOwner.ownerStreet
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          width: "five",
          fluid: true,
          label: "House Number",
          value: beneficialOwner.ownerHouseNr
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          width: "six",
          fluid: true,
          label: "Postal Code",
          value: beneficialOwner.ownerPostCode
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          width: "ten",
          fluid: true,
          label: "Place of Residenz",
          value: beneficialOwner.ownerPlaceOfRes
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Date of Birth",
          value: beneficialOwner.ownerDateOfBirth
        })));
      }))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.ethAddresses.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontWeight: "bold"
        }
      }, "EthAddresses which requested the KycKey") : null, this.state.ethAddresses.map(function (ethAddress) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
          width: "sixteen"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
          width: "sixteen",
          readOnly: true,
          fluid: true,
          value: ethAddress
        }));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontWeight: "bold"
        }
      }, "Identity Card"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal",
        style: {
          margin: "0px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.usrs[0].ID1),
        target: "_blank",
        style: {
          width: "50%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.usrs[0].ID1),
        style: {
          width: "200px",
          height: "113px" // float: "left"

        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.usrs[0].ID2),
        target: "_blank",
        style: {
          width: "50%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.usrs[0].ID2),
        style: {
          width: "200px",
          height: "113px"
        }
      })), this.state.usrs[0].snapshot ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.usrs[0].snapshot),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.usrs[0].snapshot),
        style: {
          width: "200px",
          height: "113px"
        }
      })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontWeight: "bold"
        }
      }, "Audio Recording"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        colSpan: 2
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        controls: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
        src: "../static/".concat(this.state.usrs[0].audio),
        type: "audio/wav"
      }))), this.state.usrs[0].isComp == "1" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        style: {
          marginTop: "10px"
        }
      }, this.state.usrs[0].edited == "compName" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "sixteen",
        fluid: true,
        label: "Company Name",
        value: this.state.usrs[0].compName
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "sixteen",
        fluid: true,
        label: "Company Name",
        value: this.state.usrs[0].compName
      })), this.state.usrs[0].edited == "compAddress" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "eleven",
        fluid: true,
        label: "Business Address",
        value: this.state.usrs[0].businessAd
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "five",
        fluid: true,
        label: "House Number",
        value: this.state.usrs[0].compHouseNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "six",
        fluid: true,
        label: "Postal Code",
        value: this.state.usrs[0].compPostCode
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        error: true,
        readOnly: true,
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        value: this.state.usrs[0].residence
      }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "eleven",
        fluid: true,
        label: "Business Address",
        value: this.state.usrs[0].businessAd
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "five",
        fluid: true,
        label: "House Number",
        value: this.state.usrs[0].compHouseNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "six",
        fluid: true,
        label: "Postal Code",
        value: this.state.usrs[0].compPostCode
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Input, {
        readOnly: true,
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        value: this.state.usrs[0].residence
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        width: "sixteen",
        style: {
          margin: "0px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "linkify"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.usrs[0].doc1),
        type: "application/pdf",
        target: "_blank"
      }, "View extract of the relevant registration authority")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Form"].Group, {
        width: "sixteen",
        style: {
          margin: "0px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        name: "linkify"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.usrs[0].doc2),
        type: "application/pdf",
        target: "_blank"
      }, "View electronic copy of the power of attorney"))) : null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Container"], {
        style: {
          textAlign: "center",
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        color: "black",
        onClick: this.closeModal
      }, "Close")))) : null));
    }
  }]);

  return AdminConsole;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/react-image-crop/dist/ReactCrop.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/react-image-crop/dist/ReactCrop.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ReactCrop {\n  position: relative;\n  display: inline-block;\n  cursor: crosshair;\n  overflow: hidden;\n  max-width: 100%;\n  background-color: #000; }\n  .ReactCrop:focus {\n    outline: none; }\n  .ReactCrop--disabled {\n    cursor: inherit; }\n  .ReactCrop__image {\n    /* autoprefixer: off */\n    display: block;\n    max-width: 100%;\n    max-height: -webkit-fill-available;\n    max-height: -moz-available;\n    max-height: stretch; }\n  .ReactCrop--crop-invisible .ReactCrop__image {\n    opacity: 0.5; }\n  .ReactCrop__crop-selection {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate3d(0, 0, 0);\n    box-sizing: border-box;\n    cursor: move;\n    box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);\n    border: 1px solid;\n    border-image-source: url(\"data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==\");\n    border-image-slice: 1;\n    border-image-repeat: repeat; }\n    .ReactCrop--disabled .ReactCrop__crop-selection {\n      cursor: inherit; }\n  .ReactCrop__drag-handle {\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.7);\n    box-sizing: border-box;\n    outline: 1px solid transparent; }\n  .ReactCrop .ord-nw {\n    top: 0;\n    left: 0;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: nw-resize; }\n  .ReactCrop .ord-n {\n    top: 0;\n    left: 50%;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: n-resize; }\n  .ReactCrop .ord-ne {\n    top: 0;\n    right: 0;\n    margin-top: -5px;\n    margin-right: -5px;\n    cursor: ne-resize; }\n  .ReactCrop .ord-e {\n    top: 50%;\n    right: 0;\n    margin-top: -5px;\n    margin-right: -5px;\n    cursor: e-resize; }\n  .ReactCrop .ord-se {\n    bottom: 0;\n    right: 0;\n    margin-bottom: -5px;\n    margin-right: -5px;\n    cursor: se-resize; }\n  .ReactCrop .ord-s {\n    bottom: 0;\n    left: 50%;\n    margin-bottom: -5px;\n    margin-left: -5px;\n    cursor: s-resize; }\n  .ReactCrop .ord-sw {\n    bottom: 0;\n    left: 0;\n    margin-bottom: -5px;\n    margin-left: -5px;\n    cursor: sw-resize; }\n  .ReactCrop .ord-w {\n    top: 50%;\n    left: 0;\n    margin-top: -5px;\n    margin-left: -5px;\n    cursor: w-resize; }\n  .ReactCrop__disabled .ReactCrop__drag-handle {\n    cursor: inherit; }\n  .ReactCrop__drag-bar {\n    position: absolute; }\n    .ReactCrop__drag-bar.ord-n {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 6px;\n      margin-top: -3px; }\n    .ReactCrop__drag-bar.ord-e {\n      right: 0;\n      top: 0;\n      width: 6px;\n      height: 100%;\n      margin-right: -3px; }\n    .ReactCrop__drag-bar.ord-s {\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 6px;\n      margin-bottom: -3px; }\n    .ReactCrop__drag-bar.ord-w {\n      top: 0;\n      left: 0;\n      width: 6px;\n      height: 100%;\n      margin-left: -3px; }\n  .ReactCrop--new-crop .ReactCrop__drag-bar,\n  .ReactCrop--new-crop .ReactCrop__drag-handle,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-bar {\n    display: none; }\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,\n  .ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w {\n    display: none; }\n  @media (max-width: 768px), (pointer: coarse) {\n    .ReactCrop__drag-handle {\n      width: 17px;\n      height: 17px; }\n    .ReactCrop .ord-nw {\n      margin-top: -9px;\n      margin-left: -9px; }\n    .ReactCrop .ord-n {\n      margin-top: -9px;\n      margin-left: -9px; }\n    .ReactCrop .ord-ne {\n      margin-top: -9px;\n      margin-right: -9px; }\n    .ReactCrop .ord-e {\n      margin-top: -9px;\n      margin-right: -9px; }\n    .ReactCrop .ord-se {\n      margin-bottom: -9px;\n      margin-right: -9px; }\n    .ReactCrop .ord-s {\n      margin-bottom: -9px;\n      margin-left: -9px; }\n    .ReactCrop .ord-sw {\n      margin-bottom: -9px;\n      margin-left: -9px; }\n    .ReactCrop .ord-w {\n      margin-top: -9px;\n      margin-left: -9px; }\n    .ReactCrop__drag-bar.ord-n {\n      height: 14px;\n      margin-top: -7px; }\n    .ReactCrop__drag-bar.ord-e {\n      width: 14px;\n      margin-right: -7px; }\n    .ReactCrop__drag-bar.ord-s {\n      height: 14px;\n      margin-bottom: -7px; }\n    .ReactCrop__drag-bar.ord-w {\n      width: 14px;\n      margin-left: -7px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/react-image-crop/dist/ReactCrop.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/react-image-crop/dist/ReactCrop.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./ReactCrop.css */ "./node_modules/css-loader/index.js!./node_modules/react-image-crop/dist/ReactCrop.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "!../../style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
//https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "HttpOnly;" + ";path=/";
} //get cookie function
//https://www.w3schools.com/js/js_cookies.asp

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
//# sourceMappingURL=0.js.map