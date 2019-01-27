exports.ids = [1];
exports.modules = {

/***/ "./components/CompanyRegister.js":
/*!***************************************!*\
  !*** ./components/CompanyRegister.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);


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






 //options for dropdown menu

var idTypeOptions = [{
  key: "Swiss Identity Card",
  text: "Swiss Identity Card",
  value: "id"
}, {
  key: "Swiss Drivers License",
  text: "Swiss Drivers License",
  value: "dl"
}];

var CompanyRegister =
/*#__PURE__*/
function (_Component) {
  _inherits(CompanyRegister, _Component);

  function CompanyRegister() {
    var _this;

    _classCallCheck(this, CompanyRegister);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CompanyRegister).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit",
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

              formData = new FormData();
              formData.append("file1", _this.state.file1);
              formData.append("file2", _this.state.file2);
              formData.append("fname", _this.state.fname);
              formData.append("lname", _this.state.lname);
              formData.append("street", _this.state.street);
              formData.append("houseNr", _this.state.houseNr);
              formData.append("postCode", _this.state.postCode);
              formData.append("placeOfRes", _this.state.placeOfRes);
              formData.append("dateOfBirth", _this.state.dateOfBirth);
              formData.append("nat", _this.state.nat);
              formData.append("email", _this.state.email);
              formData.append("mobNr", _this.state.mobNr);
              formData.append("username", _this.state.username);
              formData.append("password", _this.state.password);
              formData.append("idNum", _this.state.idNum);
              formData.append("idType", _this.state.idType);
              formData.append("errorMessage", _this.state.errorMessage);
              formData.append("compName", _this.state.compName);
              formData.append("regNr", _this.state.regNr);
              formData.append("compPostCode", _this.state.compPostCode);
              formData.append("residence", _this.state.residence);
              formData.append("businessAd", _this.state.businessAd);
              formData.append("compHouseNr", _this.state.compHouseNr);
              formData.append("doc1", _this.state.doc1);
              formData.append("doc2", _this.state.doc2);
              _context.prev = 27;
              _context.next = 30;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/companyregister", formData);

            case 30:
              response = _context.sent;

              if (response.data.success) {
                //success notification with possibility to resend the confirmation email
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                  title: "Success!",
                  text: "An email has been sent to you. Please confirm your email address and login to proceed",
                  type: "success",
                  showCancelButton: true,
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Resend Email",
                  reverseButtons: true
                }).then(function (result) {
                  if (result.value) {
                    _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/login");
                  } else {
                    _this.resendEmail();
                  }
                });
              }

              _context.next = 37;
              break;

            case 34:
              _context.prev = 34;
              _context.t0 = _context["catch"](27);

              _this.setState({
                errorMessage: _context.t0.response.data.message
              });

            case 37:
              _this.setState({
                loading: false
              });

            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[27, 34]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resendEmail",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var email, username, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(_this.state.email, _this.state.username); //TODO: why undefined?

              email = _this.state.email;
              username = _this.state.username;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/resendConfirmEmail", {
                username: username,
                email: email
              });

            case 5:
              response = _context2.sent;

              if (response.data.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                  title: "Success!",
                  text: "An email has been sent to you. Please confirm your email address and login to proceed",
                  type: "success",
                  showCancelButton: true,
                  confirmButtonText: "Confirm",
                  cancelButtonText: "Resend Email",
                  reverseButtons: true
                }).then(function (result) {
                  if (result.value) {
                    _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/login");
                  } else {
                    _this.resendEmail();
                  }
                });
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleImageFileChange", function (e) {
      //check if two images have been uplaoded
      if (!e.target.files[0] || !e.target.files[1] || e.target.files[2]) {
        _this.setState({
          errorMessage: "You have to upload 2 images!"
        });
      } else {
        _this.setState({
          file1: e.target.files[0],
          file2: e.target.files[1],
          //image preview
          prev1: URL.createObjectURL(e.target.files[0]),
          prev2: URL.createObjectURL(e.target.files[1]),
          showResults: true,
          errorMessage: ""
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDocFileChange", function (e) {
      _this.setState({
        doc1: e.target.files[0]
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleDoc2FileChange", function (e) {
      _this.setState({
        doc2: e.target.files[0]
      });
    });

    _this.state = {
      errorMessage: "",
      successMessage: "",
      loading: false,
      file1: "",
      file2: "",
      doc1: "",
      doc2: "",
      files: [],
      prev1: "",
      prev2: "",
      showResults: false
    };
    return _this;
  } //handle form submit and send data to server


  _createClass(CompanyRegister, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.handleSubmit,
        error: this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eight",
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
        width: "eight",
        fluid: true,
        type: "password",
        label: "Password",
        placeholder: "Password",
        required: true //strong password required
        ,
        pattern: "^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$",
        name: "password",
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          name: "question circle outline",
          style: {
            marginRight: "-16px"
          }
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
        placeholder: "i.e. Switzerland",
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          name: "question circle outline"
        }),
        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontWeight: "bold"
          }
        }, "Identity card:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "upper right on the front"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontWeight: "bold"
          }
        }, "Drivers license:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "number 5 on the front")),
        hideOnScroll: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "ID Number",
        required: true,
        name: "idNum",
        placeholder: "ID Number",
        value: this.state.idNum,
        onChange: function onChange(event) {
          return _this2.setState({
            idNum: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Select, {
        fluid: true,
        label: "ID Type",
        required: true,
        options: idTypeOptions,
        name: "idType",
        placeholder: "Choose a ID Type" // value={this.state.idType}
        ,
        onChange: function onChange(event, _ref3) {
          var value = _ref3.value;

          _this2.setState({
            idType: value
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
        onChange: this.handleImageFileChange
      })), this.state.showResults ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "image-preview"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.prev1,
        style: {
          width: "200px",
          height: "113px",
          float: "left"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.state.prev2,
        style: {
          width: "200px",
          height: "113px",
          float: "right"
        }
      })))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "sixteen",
        fluid: true,
        name: "compName",
        required: true,
        label: "Company Name",
        placeholder: "Company Name",
        value: this.state.compName,
        onChange: function onChange(event) {
          return _this2.setState({
            compName: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eleven",
        required: true,
        fluid: true,
        name: "businessAd",
        label: "Business Address",
        placeholder: "Business Address",
        value: this.state.businessAd,
        onChange: function onChange(event) {
          return _this2.setState({
            businessAd: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "five",
        fluid: true,
        type: "number",
        required: true,
        name: "compHouseNr",
        label: "House Number",
        placeholder: "House Number",
        value: this.state.compHouseNr,
        onChange: function onChange(event) {
          return _this2.setState({
            compHouseNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        required: true,
        placeholder: "Postal Code",
        name: "compPostCode",
        value: this.state.compPostCode,
        onChange: function onChange(event) {
          return _this2.setState({
            compPostCode: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        required: true,
        placeholder: "Place of Residence",
        name: "residence",
        value: this.state.residence,
        onChange: function onChange(event) {
          return _this2.setState({
            residence: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        name: "doc1",
        id: "doc1",
        required: true,
        type: "file",
        width: "sixteen",
        label: "Electronic extract of the relevant registration authority",
        onChange: this.handleDocFileChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        name: "doc2",
        id: "doc2",
        required: true,
        type: "file",
        width: "sixteen",
        label: "Electronic copy of the power of attorney",
        onChange: this.handleDoc2FileChange
      })), this.state.showResults ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: true,
        fluid: true,
        size: "large",
        loading: this.state.loading,
        color: "blue"
      }, "Submit", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "signup"
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        icon: true,
        fluid: true,
        size: "large",
        disabled: true,
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

  return CompanyRegister;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CompanyRegister);

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

/***/ })

};;
//# sourceMappingURL=1.js.map