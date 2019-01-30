webpackHotUpdate("static/development/pages/clickandpay.js",{

/***/ "./pages/clickandpay.js":
/*!******************************!*\
  !*** ./pages/clickandpay.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/src/web3 */ "./ethereum/src/web3.js");
/* harmony import */ var _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/src/contract */ "./ethereum/src/contract.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);


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











var Assets =
/*#__PURE__*/
function (_Component) {
  _inherits(Assets, _Component);

  function Assets() {
    var _this;

    _classCallCheck(this, Assets);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Assets).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckAssets1", function () {
      if (_this.state.checkedAssets2 === true) {
        _this.setState({
          checkedAssets2: false,
          checkedAssets1: true
        });
      }

      _this.setState({
        checkedAssets1: !_this.state.checkedAssets1
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCheckAssets2", function () {
      if (_this.state.checkedAssets1 === true) {
        _this.setState({
          checkedAssets1: false,
          checkedAssets2: true
        });
      }

      _this.setState({
        checkedAssets2: !_this.state.checkedAssets2
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ownerFormSubmit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true
              });

              formData = new FormData(); //send data of the first beneficial owner because it is required

              formData.append("ownerFname", _this.state.ownerFname);
              formData.append("ownerLname", _this.state.ownerLname);
              formData.append("ownerStreet", _this.state.ownerStreet);
              formData.append("ownerHouseNr", _this.state.ownerHouseNr);
              formData.append("ownerPostCode", _this.state.ownerPostCode);
              formData.append("ownerPlaceOfRes", _this.state.ownerPlaceOfRes);
              formData.append("ownerDateOfBirth", _this.state.ownerDateOfBirth); //check if the user has entered data for a second beneficial Owner

              if (_this.state.ownerFname2 && _this.state.ownerLname2 && _this.state.ownerStreet2 && _this.state.ownerHouseNr2 && _this.state.ownerPostCode2 && _this.state.ownerPlaceOfRes2 && _this.state.ownerDateOfBirth2) {
                formData.append("ownerFname2", _this.state.ownerFname2);
                formData.append("ownerLname2", _this.state.ownerLname2);
                formData.append("ownerStreet2", _this.state.ownerStreet2);
                formData.append("ownerHouseNr2", _this.state.ownerHouseNr2);
                formData.append("ownerPostCode2", _this.state.ownerPostCode2);
                formData.append("ownerPlaceOfRes2", _this.state.ownerPlaceOfRes2);
                formData.append("ownerDateOfBirth2", _this.state.ownerDateOfBirth2);
              } //check if the user has entered data for a third beneficial Owner


              if (_this.state.ownerFname3 && _this.state.ownerLname3 && _this.state.ownerStreet3 && _this.state.ownerHouseNr3 && _this.state.ownerPostCode3 && _this.state.ownerPlaceOfRes3 && _this.state.ownerDateOfBirth3) {
                formData.append("ownerFname3", _this.state.ownerFname3);
                formData.append("ownerLname3", _this.state.ownerLname3);
                formData.append("ownerStreet3", _this.state.ownerStreet3);
                formData.append("ownerHouseNr3", _this.state.ownerHouseNr3);
                formData.append("ownerPostCode3", _this.state.ownerPostCode3);
                formData.append("ownerPlaceOfRes3", _this.state.ownerPlaceOfRes3);
                formData.append("ownerDateOfBirth3", _this.state.ownerDateOfBirth3);
              }

              _context.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/assets", formData);

            case 13:
              response = _context.sent;

              if (response.data.success) {
                _this.setState({
                  loading: false,
                  terms: true,
                  pay: false
                });
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var accounts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 2:
              accounts = _context4.sent;

              if (!(_this.state.etherValue > 0)) {
                _context4.next = 10;
                break;
              }

              _this.setState({
                loading: true,
                waitingForTransactionSuccess: true,
                error: false
              }); //execute payment to admin address if etherValue > 0


              _context4.next = 7;
              return _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_8__["default"].methods.payKYC().send({
                from: accounts[0],
                value: _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__["default"].utils.toWei(_this.state.etherValue, "ether"),
                gas: 200000,
                gasPrice: "5000000000"
              });

            case 7:
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Thank You!",
                text: "You will be redirected to the video identification",
                type: "success",
                onClose: function () {
                  var _onClose = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                    var response;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/clickandpay");

                          case 2:
                            response = _context2.sent;

                            if (response.data.success) {
                              console.log("success");
                              Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_6__["setCookie"])("x-access-token", response.data.videoCookie, 1);
                              _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/videochat");
                            }

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function onClose() {
                    return _onClose.apply(this, arguments);
                  };
                }()
              });
              _context4.next = 11;
              break;

            case 10:
              if (_this.state.etherValue === "") {
                _this.setState({
                  error: true
                });
              } else {
                //if etherValue = 0 redirect user to video chat
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                  title: "Thank You!",
                  text: "You will be redirected to the video identification",
                  type: "success",
                  onClose: function () {
                    var _onClose2 = _asyncToGenerator(
                    /*#__PURE__*/
                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                      var response;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/clickandpay");

                            case 2:
                              response = _context3.sent;

                              if (response.data.success) {
                                console.log("success");
                                Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_6__["setCookie"])("x-access-token", response.data.videoCookie, 1);
                                _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/videochat");
                              }

                            case 4:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));

                    return function onClose() {
                      return _onClose2.apply(this, arguments);
                    };
                  }()
                });
              }

            case 11:
              _this.setState({
                loading: false,
                waitingForTransactionSuccess: false
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    _this.state = {
      loading: false,
      checkedAssets1: false,
      checkedAssets2: false,
      terms: false,
      pay: false,
      error: false,
      etherValue: "",
      metaMask: true,
      waitingForTransactionSuccess: false
    };
    return _this;
  }

  _createClass(Assets, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                //checking whether user is logged in to metamask
                setInterval(function () {
                  _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts(function (err, accounts) {
                    if (err != null) console.error("An error occurred: " + err);else if (accounts.length == 0) _this2.setState({
                      metaMask: false
                    });else _this2.setState({
                      metaMask: true,
                      myAddress: accounts[0]
                    });
                  });
                }, 500); //0.5 seconds

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }() //handle the checkboxes for beneficial owners

  }, {
    key: "render",
    value: function render() {
      var _ref3,
          _this3 = this,
          _ref4,
          _ref5;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), this.state.terms == false && this.state.pay == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h1",
        textAlign: "center",
        style: {
          color: "#2985d0",
          marginTop: "10px"
        }
      }, "Identification of the Beneficial Owner"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h3",
        textAlign: "center",
        style: {
          marginBottom: 20
        }
      }, "If the deposited assets are credited to you economically, agree with signing the checkbox below"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I agree that I am the sole beneficial owner of the assets",
        required: true,
        checked: this.state.checkedAssets1,
        onChange: this.handleCheckAssets1
      }), this.state.checkedAssets1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I agree that the following persons are beneficial owners of the assets",
        required: true,
        checked: this.state.checkedAssets2,
        onChange: this.handleCheckAssets2
      }), this.state.checkedAssets2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), this.state.checkedAssets2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          textAlign: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: (_ref3 = {
          fontWeight: "bold"
        }, _defineProperty(_ref3, "fontWeight", "900"), _defineProperty(_ref3, "fontSize", "17px"), _defineProperty(_ref3, "borderRadius", "100%"), _defineProperty(_ref3, "display", "inline"), _defineProperty(_ref3, "paddingLeft", "6px"), _defineProperty(_ref3, "paddingRight", "7px"), _defineProperty(_ref3, "backgroundColor", "black"), _defineProperty(_ref3, "color", "white"), _ref3)
      }, "1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.ownerFormSubmit,
        style: {
          marginTop: "1%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "First Name",
        placeholder: "First Name",
        required: true,
        name: "ownerFname",
        value: this.state.ownerFname,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerFname: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Last Name",
        placeholder: "Last Name",
        required: true,
        name: "ownerlastName",
        value: this.state.ownerLname,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerLname: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eleven",
        fluid: true,
        label: "Street",
        placeholder: "Street",
        required: true,
        name: "ownerStreet",
        value: this.state.ownerStreet,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerStreet: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "five",
        fluid: true,
        label: "House Number",
        required: true,
        placeholder: "House Number",
        name: "ownerHouseNr",
        value: this.state.ownerHouseNr,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerHouseNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        required: true,
        placeholder: "Postal Code",
        name: "ownerPostCode",
        value: this.state.ownerPostCode,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerPostCode: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        required: true,
        placeholder: "Place of Residence",
        name: "ownerPlaceOfRes",
        value: this.state.ownerPlaceOfRes,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerPlaceOfRes: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Date of Birth",
        required: true,
        placeholder: "DD.MM.YYYY",
        name: "ownerDateOfBirth",
        value: this.state.ownerDateOfBirth,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerDateOfBirth: event.target.value
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          textAlign: "left",
          marginTop: "1%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: (_ref4 = {
          fontWeight: "bold"
        }, _defineProperty(_ref4, "fontWeight", "900"), _defineProperty(_ref4, "fontSize", "17px"), _defineProperty(_ref4, "borderRadius", "100%"), _defineProperty(_ref4, "display", "inline"), _defineProperty(_ref4, "paddingLeft", "6px"), _defineProperty(_ref4, "paddingRight", "7px"), _defineProperty(_ref4, "backgroundColor", "black"), _defineProperty(_ref4, "color", "white"), _ref4)
      }, "2"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "First Name",
        placeholder: "First Name",
        name: "ownerFname2",
        value: this.state.ownerFname2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerFname2: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Last Name",
        placeholder: "Last Name",
        name: "ownerLname2",
        value: this.state.ownerLname2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerLname2: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eleven",
        fluid: true,
        label: "Street",
        placeholder: "Street",
        name: "ownerStreet2",
        value: this.state.ownerStreet2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerStreet2: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "five",
        fluid: true,
        label: "House Number",
        placeholder: "House Number",
        name: "ownerHouseNr2",
        value: this.state.ownerHouseNr2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerHouseNr2: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        placeholder: "Postal Code",
        name: "ownerPostCode2",
        value: this.state.ownerPostCode2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerPostCode2: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        placeholder: "Place of Residence",
        name: "ownerPlaceOfRes2",
        value: this.state.ownerPlaceOfRes2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerPlaceOfRes2: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Date of Birth",
        placeholder: "DD.MM.YYYY",
        name: "ownerDateOfBirth2",
        value: this.state.ownerDateOfBirth2,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerDateOfBirth2: event.target.value
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          textAlign: "left",
          marginTop: "1%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: (_ref5 = {
          fontWeight: "bold"
        }, _defineProperty(_ref5, "fontWeight", "900"), _defineProperty(_ref5, "fontSize", "17px"), _defineProperty(_ref5, "borderRadius", "100%"), _defineProperty(_ref5, "display", "inline"), _defineProperty(_ref5, "paddingLeft", "6px"), _defineProperty(_ref5, "paddingRight", "7px"), _defineProperty(_ref5, "backgroundColor", "black"), _defineProperty(_ref5, "color", "white"), _ref5)
      }, "3"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "First Name",
        placeholder: "First Name",
        name: "ownerFname3",
        value: this.state.ownerFname3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerFname3: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Last Name",
        placeholder: "Last Name",
        name: "ownerLname3",
        value: this.state.ownerLname3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerLname3: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eleven",
        fluid: true,
        label: "Street",
        placeholder: "Street",
        name: "ownerStreet3",
        value: this.state.ownerStreet3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerStreet3: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "five",
        fluid: true,
        label: "House Number",
        placeholder: "House Number",
        name: "ownerHouseNr3",
        value: this.state.ownerHouseNr3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerHouseNr3: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        placeholder: "Postal Code",
        name: "ownerPostCode3",
        value: this.state.ownerPostCode3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerPostCode3: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        placeholder: "Place of Residence",
        name: "ownerPlaceOfRes3",
        value: this.state.ownerPlaceOfRes3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerPlaceOfRes3: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Date of Birth",
        placeholder: "DD.MM.YYYY",
        name: "ownerDateOfBirth3",
        value: this.state.ownerDateOfBirth3,
        onChange: function onChange(event) {
          return _this3.setState({
            ownerDateOfBirth3: event.target.value
          });
        }
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        icon: true,
        floated: "right",
        labelPosition: "right"
      }, "Next", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "right arrow"
      })))))) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          display: "inline-block"
        }
      }, this.state.checkedAssets1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        icon: true,
        floated: "right",
        labelPosition: "right",
        onClick: function onClick() {
          return _this3.setState({
            terms: true,
            pay: false
          });
        }
      }, "Next", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "right arrow"
      })) : !this.state.checkedAssets1 && !this.state.checkedAssets2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        icon: true,
        floated: "right",
        labelPosition: "right",
        disabled: true
      }, "Next", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "right arrow"
      })) : null)) : // Terms & Conditions view
      this.state.terms == true && this.state.pay == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h1",
        textAlign: "center",
        style: {
          color: "#2985d0",
          marginTop: "10px"
        }
      }, "Terms and Conditions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h3",
        textAlign: "center",
        style: {
          marginBottom: 20
        }
      }, "Make sure you accept all terms and conditions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        textAlign: "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I agree to conduct the video identification",
        required: true,
        checked: this.state.checked1,
        onClick: function onClick() {
          return _this3.setState({
            checked1: !_this3.state.checked1
          });
        }
      }), this.state.checked1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I agree that the audio line is beeing recorded",
        required: true,
        checked: this.state.checked2,
        onClick: function onClick() {
          return _this3.setState({
            checked2: !_this3.state.checked2
          });
        }
      }), this.state.checked2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I confirm to have my identity card ready",
        required: true,
        checked: this.state.checked3,
        onClick: function onClick() {
          return _this3.setState({
            checked3: !_this3.state.checked3
          });
        }
      }), this.state.checked4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I confirm that I have a good internet connection",
        required: true,
        checked: this.state.checked4,
        onClick: function onClick() {
          return _this3.setState({
            checked4: !_this3.state.checked4
          });
        }
      }), this.state.checked4 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I confirm that I am in a silent environment",
        required: true,
        checked: this.state.checked5,
        onClick: function onClick() {
          return _this3.setState({
            checked5: !_this3.state.checked5
          });
        }
      }), this.state.checked5 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I confirm that I have a good microphone (preferably headset)",
        required: true,
        checked: this.state.checked6,
        onClick: function onClick() {
          return _this3.setState({
            checked6: !_this3.state.checked6
          });
        }
      }), this.state.checked6 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I agree to pay a fee for the video identification",
        required: true,
        checked: this.state.checked7,
        onClick: function onClick() {
          return _this3.setState({
            checked7: !_this3.state.checked7
          });
        }
      }), this.state.checked7 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), this.state.checked1 && this.state.checked2 && this.state.checked3 && this.state.checked4 && this.state.checked5 && this.state.checked6 && this.state.checked7 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: true,
        labelPosition: "left",
        floated: "left",
        onClick: function onClick() {
          return _this3.setState({
            terms: false,
            pay: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "left arrow"
      }), "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        labelPosition: "right",
        floated: "right",
        icon: true,
        onClick: function onClick() {
          return _this3.setState({
            pay: true
          });
        }
      }, "Next ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "right arrow"
      }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: true,
        labelPosition: "left",
        floated: "left",
        onClick: function onClick() {
          return _this3.setState({
            terms: false,
            pay: false
          });
        },
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "left arrow"
      }), "Back"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        labelPosition: "right",
        floated: "right",
        icon: true,
        disabled: true,
        onClick: function onClick() {
          return _this3.setState({
            pay: true
          });
        }
      }, "Next ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "right arrow"
      }))))) : //Payment view
      this.state.terms == true && this.state.pay == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h1",
        textAlign: "center",
        style: {
          marginTop: "10px",
          color: "#2985d0"
        }
      }, "Payment"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h3",
        textAlign: "center",
        style: {
          marginBottom: 20
        }
      }, "Please enter a value you are willing to pay"), this.state.metaMask == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        error: true,
        content: "Please login to Metamask"
      }) : null, this.state.waitingForTransactionSuccess == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        warning: true,
        content: "waiting for transaction success..."
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.submit,
        error: this.state.error
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        readOnly: this.state.metaMask == false,
        icon: "ethereum",
        iconPosition: "left",
        placeholder: "Ether",
        id: "etherValue",
        type: "number",
        min: "0",
        step: "0.0001",
        value: this.state.etherValue,
        onChange: function onChange(event) {
          return _this3.setState({
            etherValue: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        error: true,
        header: "Oops!",
        content: "Please enter a value"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        disabled: this.state.metaMask == false,
        fluid: true,
        icon: true,
        size: "large",
        color: "blue",
        loading: this.state.loading
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle outline",
        size: "large"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        style: {
          backgroundColor: "white"
        },
        fluid: true,
        onClick: function onClick() {
          return _this3.setState({
            terms: true,
            pay: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "arrow left"
      }), " back"))) : null));
    }
  }]);

  return Assets;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Assets);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/clickandpay")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=clickandpay.js.56a081d377e2733581c1.hot-update.js.map