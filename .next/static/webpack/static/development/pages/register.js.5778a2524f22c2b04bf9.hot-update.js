webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/PersonRegister.js":
/*!**************************************!*\
  !*** ./components/PersonRegister.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var _HomeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeHeader */ "./components/HomeHeader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");


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











var PersonRegister =
/*#__PURE__*/
function (_Component) {
  _inherits(PersonRegister, _Component);

  function PersonRegister(props) {
    var _this;

    _classCallCheck(this, PersonRegister);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PersonRegister).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFileChange", function (e) {
      if (!e.target.files[0] || !e.target.files[1] || e.target.files[2]) {
        _this.setState({
          errorMessage: "You have to upload 2 images!"
        });
      } else {
        _this.setState({
          file1: e.target.files[0],
          file2: e.target.files[1],
          prev1: URL.createObjectURL(e.target.files[0]),
          prev2: URL.createObjectURL(e.target.files[1]),
          showResults: true,
          errorMessage: ""
        });
      }
    });

    _this.state = {
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

  _createClass(PersonRegister, [{
    key: "_handleSubmit",
    value: function () {
      var _handleSubmit2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(window.location.origin + "/register", formData);

              case 20:
                response = _context.sent;

                if (response.data.success) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()("Success!", "An email has been sent to you. Please confirm your email address and login to proceed", "success");
                  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/login"); //TODO: add success popup
                }

                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](17);
                this.setState({
                  errorMessage: _context.t0.response.data.message
                });

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

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.handleSubmit,
        error: this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
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
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        type: "password",
        label: "Password",
        placeholder: "Password",
        required: true,
        name: "password",
        value: this.state.password,
        pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          name: "question circle outline"
        }),
        content: "The password must contain at least 1 upper case letter, 1 lower case letter, 1 digit, 1 special character and minimum eight in length!",
        hideOnScroll: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "First Name",
        placeholder: "First Name",
        required: true,
        name: "fname",
        value: this.state.fname,
        onChange: function onChange(event) {
          return _this2.setState({
            fname: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Last Name",
        placeholder: "Last Name",
        required: true,
        name: "lname",
        value: this.state.lname,
        onChange: function onChange(event) {
          return _this2.setState({
            lname: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eleven",
        fluid: true,
        label: "Street",
        placeholder: "Street",
        required: true,
        name: "street",
        value: this.state.street,
        onChange: function onChange(event) {
          return _this2.setState({
            street: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "five",
        fluid: true,
        label: "House Number",
        required: true,
        placeholder: "House Number",
        name: "houseNr",
        value: this.state.houseNr,
        onChange: function onChange(event) {
          return _this2.setState({
            houseNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        required: true,
        placeholder: "Postal Code",
        name: "postCode",
        value: this.state.postCode,
        onChange: function onChange(event) {
          return _this2.setState({
            postCode: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        required: true,
        placeholder: "Place of Residence",
        name: "placeOfRes",
        value: this.state.placeOfRes,
        onChange: function onChange(event) {
          return _this2.setState({
            placeOfRes: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Date of Birth",
        required: true,
        placeholder: "DD.MM.YYYY",
        name: "dateOfBirth",
        value: this.state.dateOfBirth,
        onChange: function onChange(event) {
          return _this2.setState({
            dateOfBirth: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Nationality",
        required: true,
        placeholder: "e.g. Switzerland",
        name: "nat",
        value: this.state.nat,
        onChange: function onChange(event) {
          return _this2.setState({
            nat: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Email",
        type: "email",
        required: true,
        placeholder: "email@email.com",
        name: "email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Mobile Number",
        type: "number",
        required: true,
        placeholder: "+4* ** *** ** **",
        name: "mobNr",
        value: this.state.mobNr,
        onChange: function onChange(event) {
          return _this2.setState({
            mobNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        type: "file",
        width: "sixteen",
        required: true,
        label: "ID front- and backside! (.png or .jpg)",
        name: "file",
        id: "file",
        multiple: true,
        onChange: this.handleFileChange
      })), this.state.showResults ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "image-preview",
        style: {
          marginBottom: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.prev1,
        style: {
          width: "200px",
          height: "113px",
          float: "left",
          marginBottom: "12px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.prev2,
        style: {
          width: "200px",
          height: "113px",
          float: "right",
          marginBottom: "12px"
        }
      })) : null, this.state.showResults ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: true,
        loading: this.state.loading,
        fluid: true,
        size: "large",
        color: "blue"
      }, "Submit", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "signup"
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: true,
        disabled: true,
        fluid: true,
        size: "large",
        color: "blue"
      }, "Submit", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "signup"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
    }
  }]);

  return PersonRegister;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PersonRegister);

/***/ })

})
//# sourceMappingURL=register.js.5778a2524f22c2b04bf9.hot-update.js.map