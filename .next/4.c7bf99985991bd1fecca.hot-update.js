webpackHotUpdate(4,{

/***/ "./components/ProfileHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
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
    Object.defineProperty(_assertThisInitialized(_this), "adminPage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/admin");
      }
    });
    _this.state = {
      isAdmin: false
    };

    _this.logout = function (e) {
      return _this._logout();
    };

    _this.currentUser = Object(__WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__["a" /* default */])();
    return _this;
  }

  _createClass(ProfileHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = Object(__WEBPACK_IMPORTED_MODULE_2__utils_CookieUtils__["a" /* getCookie */])("x-access-token");
      var decoded = __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default()(token);

      if (decoded.role[0] == "admin") {
        this.setState({
          isAdmin: true
        });
      }
    }
  }, {
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
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */], {
        pointing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        name: "home",
        onClick: this.profileBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        name: "home",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        name: "logout",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        name: "user",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.currentUser)))));
    }
  }]);

  return ProfileHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./pages/register.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_HomeHeader__ = __webpack_require__("./components/HomeHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);

var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/pages/register.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var parse = __webpack_require__("./node_modules/mrz/src/index.js").parse;

var Register =
/*#__PURE__*/
function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleFileChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          file1: e.target.files[0]
        });

        _this.setState({
          file2: e.target.files[1]
        });

        _this.setState({
          prev1: URL.createObjectURL(e.target.files[0])
        }); //image-preview


        _this.setState({
          prev2: URL.createObjectURL(e.target.files[1])
        }); //image-preview


        _this.setState({
          showResults: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "isValid", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var res = parse(_this.state.mrz);
        _this.result = res;

        if (res.valid === true) {
          console.log("Your ID is valid");
        } else {
          console.log("Your ID is not valid");
        }

        console.log(_this.result);
      }
    });
    _this.state = {
      username: "",
      password: "",
      fname: "",
      lname: "",
      street: "",
      houseNr: "",
      postCode: "",
      placeOfRes: "",
      dateOfBirth: "",
      nat: "",
      email: "",
      mobNr: "",
      errorMessage: "",
      successMessage: "",
      loading: false,
      file1: "",
      file2: "",
      files: [],
      prev1: "",
      prev2: "",
      showResults: false
    };

    _this.handleSubmit = function (e) {
      return _this._handleSubmit();
    };

    return _this;
  }

  _createClass(Register, [{
    key: "_handleSubmit",
    value: function () {
      var _handleSubmit2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var formData, response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                formData = new FormData();
                formData.append("file1", this.state.file1);
                formData.append("file2", this.state.file2);
                formData.append("fname", this.state.fname);
                formData.append("lname", this.state.lname);
                formData.append("street", this.state.street);
                formData.append("houseNr", this.state.houseNr);
                formData.append("postCode", this.state.postCode);
                formData.append("placeOfRes", this.state.placeOfRes);
                formData.append("dateOfBirth", this.state.dateOfBirth);
                formData.append("nat", this.state.nat);
                formData.append("email", this.state.email);
                formData.append("mobNr", this.state.mobNr);
                formData.append("username", this.state.username);
                formData.append("password", this.state.password);
                formData.append("errorMessage", this.state.errorMessage);
                _context.prev = 17;
                _context.next = 20;
                return __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post(window.location.origin + "/register", formData);

              case 20:
                response = _context.sent;

                if (response.data.success) {
                  __WEBPACK_IMPORTED_MODULE_2__routes__["Router"].push("/login"); //TODO: add success popup
                }

                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](17);
                this.setState({
                  errorMessage: _context.t0.response.data.message
                }); //TODO: get errorMessage if only one or null pictures were uploaded! -> server

              case 27:
                this.setState({
                  loading: false
                });

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[17, 24]]);
      }));

      return function _handleSubmit() {
        return _handleSubmit2.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_HomeHeader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Header */], {
        as: "h1",
        textAlign: "center",
        style: {
          marginTop: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "Registration"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */], {
        onSubmit: this.handleSubmit,
        error: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "Username",
        placeholder: "Username",
        required: true,
        name: "username",
        value: this.state.username,
        onChange: function onChange(event) {
          return _this2.setState({
            username: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        type: "password",
        label: "Password",
        placeholder: "Password",
        required: true,
        name: "password",
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "First Name",
        placeholder: "First Name",
        name: "fname",
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this2.setState({
            fname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "Last Name",
        placeholder: "Last Name",
        name: "lname",
        value: this.state.lname,
        onChange: function onChange(event) {
          return _this2.setState({
            lname: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        width: "eleven",
        fluid: true,
        label: "Street",
        placeholder: "Street",
        name: "street",
        value: this.state.street,
        onChange: function onChange(event) {
          return _this2.setState({
            street: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        width: "five",
        type: "number",
        fluid: true,
        label: "House Number",
        placeholder: "House Number",
        name: "houseNr",
        value: this.state.houseNr,
        onChange: function onChange(event) {
          return _this2.setState({
            houseNr: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        placeholder: "Postal Code",
        name: "postCode",
        value: this.state.postCode,
        onChange: function onChange(event) {
          return _this2.setState({
            postCode: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        placeholder: "Place of Residence",
        name: "placeOfRes",
        value: this.state.placeOfRes,
        onChange: function onChange(event) {
          return _this2.setState({
            placeOfRes: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "Date of Birth",
        type: "date",
        placeholder: "YYYY-MM-DD",
        name: "dateOfBirth",
        value: this.state.DateOfBirth,
        onChange: function onChange(event) {
          return _this2.setState({
            DateOfBirth: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "Nationality",
        placeholder: "Switzerland",
        name: "nat",
        value: this.state.nat,
        onChange: function onChange(event) {
          return _this2.setState({
            nat: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        widths: "equal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "Email",
        type: "email",
        placeholder: "email@email.com",
        name: "email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        label: "Mobile Number",
        type: "number",
        placeholder: "079 246 1102",
        name: "mobNr",
        value: this.state.mobNr,
        onChange: function onChange(event) {
          return _this2.setState({
            mobNr: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Input, {
        fluid: true,
        type: "file",
        width: "sixteen",
        label: "ID front- and backside! (.png or .jpg)",
        name: "file",
        id: "file",
        multiple: true,
        onChange: this.handleFileChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      })), this.state.showResults ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image-preview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.prev1,
        style: {
          width: "200px",
          height: "113px",
          float: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.state.prev2,
        style: {
          width: "200px",
          height: "113px",
          float: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })) : null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        style: {
          marginLeft: 280
        },
        primary: true,
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, "Submit"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["g" /* Message */], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      })));
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Register);
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/register")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

module.exports = routes;

/***/ })

})
//# sourceMappingURL=4.c7bf99985991bd1fecca.hot-update.js.map