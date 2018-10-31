module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _components_HomeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeHeader */ "./components/HomeHeader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);


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










var CompanyRegister =
/*#__PURE__*/
function (_Component) {
  _inherits(CompanyRegister, _Component);

  function CompanyRegister(props) {
    var _this;

    _classCallCheck(this, CompanyRegister);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CompanyRegister).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleImageFileChange", function (e) {
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
      compName: "",
      regNr: "",
      placeOfReg: "",
      residence: "",
      businessAd: "",
      compHouseNr: "",
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

    _this.handleSubmit = function (e) {
      return _this._handleSubmit();
    };

    return _this;
  }

  _createClass(CompanyRegister, [{
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
                formData.append("compName", this.state.compName);
                formData.append("regNr", this.state.regNr);
                formData.append("placeOfReg", this.state.placeOfReg);
                formData.append("residence", this.state.residence);
                formData.append("businessAd", this.state.businessAd);
                formData.append("compHouseNr", this.state.compHouseNr);
                formData.append("doc1", this.state.doc1);
                formData.append("doc2", this.state.doc2);
                _context.prev = 25;
                _context.next = 28;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(window.location.origin + "/companyregister", formData);

              case 28:
                response = _context.sent;

                if (response.data.success) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()("Congratulations!", "An email has been sent to you. Please confirm your email address and login to proceed", "success");
                  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/login"); //TODO: add success popup
                }

                _context.next = 35;
                break;

              case 32:
                _context.prev = 32;
                _context.t0 = _context["catch"](25);
                this.setState({
                  errorMessage: _context.t0.response.data.message
                });

              case 35:
                this.setState({
                  loading: false
                });

              case 36:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[25, 32]]);
      }));

      return function _handleSubmit() {
        return _handleSubmit2.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
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
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
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
        type: "number",
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
        type: "date",
        required: true,
        placeholder: "YYYY-MM-DD",
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
        placeholder: "Switzerland",
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
        placeholder: "079 246 1102",
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
        width: "ten",
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "eight",
        fluid: true,
        name: "regNr",
        required: true,
        label: "Registration Number",
        placeholder: "Registration Number",
        value: this.state.regNr,
        onChange: function onChange(event) {
          return _this2.setState({
            regNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Place of Registration",
        name: "placeOfReg",
        required: true,
        placeholder: "Place of Registration",
        value: this.state.placeOfReg,
        onChange: function onChange(event) {
          return _this2.setState({
            placeOfReg: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        label: "Residence",
        name: "residence",
        required: true,
        placeholder: "Residence",
        value: this.state.residence,
        onChange: function onChange(event) {
          return _this2.setState({
            residence: event.target.value
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        name: "doc1",
        id: "doc1",
        required: true,
        type: "file",
        width: "sixteen",
        label: "Excerpt of commercial register (1 page only!)",
        onChange: this.handleDocFileChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        fluid: true,
        name: "doc2",
        id: "doc2",
        required: true,
        type: "file",
        width: "sixteen",
        label: "Provisions regulating the power to bind the legal entity (1 page only!)",
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

/***/ "./components/HomeHeader.js":
/*!**********************************!*\
  !*** ./components/HomeHeader.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);






var HomeHeader = function HomeHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "login",
    href: "/login"
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    name: "register",
    href: "/register"
  }, "Register")));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeHeader);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    style: {
      width: 650,
      border: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
    className: "jsx-1024209581"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1024209581",
    css: "body{background:#e6e6e6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TZWJhc3RpYW5BbGxlbWFubi9CQS1TLkUuQS9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHOEIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9TZWJhc3RpYW5BbGxlbWFubi9CQS1TLkUuQS9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogNjUwLCBib3JkZXI6IDEgfX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4zLjMvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/SebastianAllemann/BA-S.E.A/components/Layout.js */"
  }), props.children);
});

/***/ }),

/***/ "./components/PersonRegister.js":
/*!**************************************!*\
  !*** ./components/PersonRegister.js ***!
  \**************************************/
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
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var _HomeHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeHeader */ "./components/HomeHeader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
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
                  sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()("Congratulations!", "An email has been sent to you. Please confirm your email address and login to proceed", "success");
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
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
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
        type: "number",
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
        type: "date",
        required: true,
        placeholder: "YYYY-MM-DD",
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
        placeholder: "Switzerland",
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
        placeholder: "079 246 1102",
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

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CompanyRegister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CompanyRegister */ "./components/CompanyRegister.js");
/* harmony import */ var _components_PersonRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PersonRegister */ "./components/PersonRegister.js");
/* harmony import */ var _components_HomeHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeHeader */ "./components/HomeHeader.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var RegisterPage =
/*#__PURE__*/
function (_Component) {
  _inherits(RegisterPage, _Component);

  function RegisterPage() {
    var _this;

    _classCallCheck(this, RegisterPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegisterPage).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (e, _ref) {
      var name = _ref.name;
      return _this.setState({
        activeItem: name
      });
    });

    _this.state = {
      activeItem: "person"
    };
    return _this;
  }

  _createClass(RegisterPage, [{
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        style: {
          // backgroundColor: "#2985d0",
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        as: "h1",
        textAlign: "center",
        style: {
          color: "#2985d0",
          marginTop: "10px"
        }
      }, "Registration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        pointing: true,
        secondary: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        name: "person",
        active: activeItem === "person",
        onClick: this.handleItemClick,
        style: {
          color: "#2985d0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "user"
      }), "Person"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        name: "company",
        active: activeItem === "company",
        onClick: this.handleItemClick,
        style: {
          color: "#2985d0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "globe"
      }), "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
        icon: true,
        position: "right",
        href: "/login",
        name: "Back to login",
        style: {
          color: "#2985d0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "arrow left"
      }), "Back to Login")), this.state.activeItem === "person" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PersonRegister__WEBPACK_IMPORTED_MODULE_3__["default"], null) : null, this.state.activeItem === "company" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CompanyRegister__WEBPACK_IMPORTED_MODULE_2__["default"], null) : null)));
    }
  }]);

  return RegisterPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes")();

module.exports = routes;

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
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "HttpOnly;" + ";path=/";
}
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

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/register.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/register.js */"./pages/register.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=register.js.map