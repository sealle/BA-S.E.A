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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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
    css: "body{background:#e6e6e6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TdXNhbi9CQS1TLkUuQS9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHOEIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9TdXNhbi9CQS1TLkUuQS9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogNjUwLCBib3JkZXI6IDEgfX0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4zLjMvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/Susan/BA-S.E.A/components/Layout.js */"
  }), props.children);
});

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

/***/ "./pages/clickandpay.js":
/*!******************************!*\
  !*** ./pages/clickandpay.js ***!
  \******************************/
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
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/src/web3 */ "./ethereum/src/web3.js");
/* harmony import */ var _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/src/contract */ "./ethereum/src/contract.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
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










 //only for banks

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var accounts, response, _response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__["default"].eth.getAccounts();

            case 2:
              accounts = _context.sent;

              if (!(_this.state.value > 0)) {
                _context.next = 14;
                break;
              }

              _this.setState({
                loading: true,
                waiting: true,
                error: false
              }); //execute payment to admin address if value > 0


              _context.next = 7;
              return _ethereum_src_contract__WEBPACK_IMPORTED_MODULE_8__["default"].methods.payKYC().send({
                from: accounts[0],
                value: _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_7__["default"].utils.toWei(_this.state.value, "ether")
              });

            case 7:
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Thank You!",
                text: "You will be redirected to the video identification",
                type: "success",
                onClose: function onClose() {
                  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/videochat");
                }
              }); //if payment successfull, set new cookie  

              _context.next = 10;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/clickandpay");

            case 10:
              response = _context.sent;

              if (response.data.success) {
                Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_6__["setCookie"])("x-access-token", response.data.videoCookie, 1);
              }

              _context.next = 23;
              break;

            case 14:
              if (!(_this.state.value === "")) {
                _context.next = 18;
                break;
              }

              _this.setState({
                error: true
              });

              _context.next = 23;
              break;

            case 18:
              //if value = 0 redirect user to video chat
              sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({
                title: "Thank You!",
                text: "You will be redirected to the video identification",
                type: "success",
                onClose: function onClose() {
                  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/videochat");
                }
              });
              _context.next = 21;
              return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/clickandpay");

            case 21:
              _response = _context.sent;

              if (_response.data.success) {
                Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_6__["setCookie"])("x-access-token", _response.data.videoCookie, 1);
              }

            case 23:
              _this.setState({
                loading: false,
                waiting: false
              });

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      moreThanTwo: "",
      loading: false,
      checkedAssets1: false,
      checkedAssets2: false,
      countMembers: "",
      terms: false,
      pay: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      error: false,
      value: "",
      metaMask: true,
      waiting: false
    }; // this.getMembersCount();
    // this.submit = e => this._submit();

    _this.ownerFormSubmit = function (e) {
      return _this._ownerFormSubmit();
    }; // this.handleCheckAssets1 = this.handleCheckAssets1.bind(this);
    // this.handleCheckAssets2 = this.handleCheckAssets2.bind(this);


    return _this;
  }

  _createClass(Assets, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
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
                }, 500);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }() //handle the checkboxes for beneficial owners 

  }, {
    key: "_ownerFormSubmit",
    //send beneficial owner data to server
    value: function () {
      var _ownerFormSubmit2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  loading: true
                });
                formData = new FormData(); //send data of the first beneficial owner because it is required

                formData.append("ownerFname", this.state.ownerFname);
                formData.append("ownerLname", this.state.ownerLname);
                formData.append("ownerStreet", this.state.ownerStreet);
                formData.append("ownerHouseNr", this.state.ownerHouseNr);
                formData.append("ownerPostCode", this.state.ownerPostCode);
                formData.append("ownerPlaceOfRes", this.state.ownerPlaceOfRes);
                formData.append("ownerDateOfBirth", this.state.ownerDateOfBirth); //check if the user has entered data for a second beneficial Owner

                if (this.state.ownerFname2 && this.state.ownerLname2 && this.state.ownerStreet2 && this.state.ownerHouseNr2 && this.state.ownerPostCode2 && this.state.ownerPlaceOfRes2 && this.state.ownerDateOfBirth2) {
                  formData.append("ownerFname2", this.state.ownerFname2);
                  formData.append("ownerLname2", this.state.ownerLname2);
                  formData.append("ownerStreet2", this.state.ownerStreet2);
                  formData.append("ownerHouseNr2", this.state.ownerHouseNr2);
                  formData.append("ownerPostCode2", this.state.ownerPostCode2);
                  formData.append("ownerPlaceOfRes2", this.state.ownerPlaceOfRes2);
                  formData.append("ownerDateOfBirth2", this.state.ownerDateOfBirth2);
                } //check if the user has entered data for a third beneficial Owner


                if (this.state.ownerFname3 && this.state.ownerLname3 && this.state.ownerStreet3 && this.state.ownerHouseNr3 && this.state.ownerPostCode3 && this.state.ownerPlaceOfRes3 && this.state.ownerDateOfBirth3) {
                  formData.append("ownerFname3", this.state.ownerFname3);
                  formData.append("ownerLname3", this.state.ownerLname3);
                  formData.append("ownerStreet3", this.state.ownerStreet3);
                  formData.append("ownerHouseNr3", this.state.ownerHouseNr3);
                  formData.append("ownerPostCode3", this.state.ownerPostCode3);
                  formData.append("ownerPlaceOfRes3", this.state.ownerPlaceOfRes3);
                  formData.append("ownerDateOfBirth3", this.state.ownerDateOfBirth3);
                }

                _context3.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/assets", formData);

              case 13:
                response = _context3.sent;

                if (response.data.success) {
                  this.setState({
                    loading: false,
                    terms: true,
                    pay: false
                  });
                }

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _ownerFormSubmit() {
        return _ownerFormSubmit2.apply(this, arguments);
      };
    }() //execute ether payment

  }, {
    key: "render",
    value: function render() {
      var _ref2,
          _this3 = this,
          _ref3,
          _ref4;

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
        style: (_ref2 = {
          fontWeight: "bold"
        }, _defineProperty(_ref2, "fontWeight", "900"), _defineProperty(_ref2, "fontSize", "17px"), _defineProperty(_ref2, "borderRadius", "100%"), _defineProperty(_ref2, "display", "inline"), _defineProperty(_ref2, "paddingLeft", "6px"), _defineProperty(_ref2, "paddingRight", "7px"), _defineProperty(_ref2, "backgroundColor", "black"), _defineProperty(_ref2, "color", "white"), _ref2)
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
        style: (_ref3 = {
          fontWeight: "bold"
        }, _defineProperty(_ref3, "fontWeight", "900"), _defineProperty(_ref3, "fontSize", "17px"), _defineProperty(_ref3, "borderRadius", "100%"), _defineProperty(_ref3, "display", "inline"), _defineProperty(_ref3, "paddingLeft", "6px"), _defineProperty(_ref3, "paddingRight", "7px"), _defineProperty(_ref3, "backgroundColor", "black"), _defineProperty(_ref3, "color", "white"), _ref3)
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
        style: (_ref4 = {
          fontWeight: "bold"
        }, _defineProperty(_ref4, "fontWeight", "900"), _defineProperty(_ref4, "fontSize", "17px"), _defineProperty(_ref4, "borderRadius", "100%"), _defineProperty(_ref4, "display", "inline"), _defineProperty(_ref4, "paddingLeft", "6px"), _defineProperty(_ref4, "paddingRight", "7px"), _defineProperty(_ref4, "backgroundColor", "black"), _defineProperty(_ref4, "color", "white"), _ref4)
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
        labelPosition: "right" // onClick={this.toTerms}

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
      })) : null)) : this.state.terms == true && this.state.pay == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
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
        label: "I confirm to have my identity card ready",
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
        label: "I confirm that I have a good internet connection",
        required: true,
        checked: this.state.checked3,
        onClick: function onClick() {
          return _this3.setState({
            checked3: !_this3.state.checked3
          });
        }
      }), this.state.checked3 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check circle",
        color: "green",
        size: "large",
        style: {
          float: "right"
        }
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "I confirm that I am in a silent environment",
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
        label: "I confirm that I have a good microphone (preferably headset)",
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
        label: "I agree to pay a fee for the video identification",
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
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], null), this.state.checked1 && this.state.checked2 && this.state.checked3 && this.state.checked4 && this.state.checked5 && this.state.checked6 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
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
      }))))) : this.state.terms == true && this.state.pay == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          // maxWidth: "450px",
          // margin: "auto",
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
      }) : null, this.state.waiting == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        warning: true,
        content: "Waiting on transaction success..."
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.submit,
        error: this.state.error
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        icon: "ethereum",
        iconPosition: "left",
        placeholder: "Ether",
        id: "value",
        type: "number",
        min: "0",
        step: "0.0001",
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({
            value: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        error: true,
        header: "Oops!",
        content: "Please enter a value"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "arrow left"
      }), " back"))) : null));
    }
  }]);

  return Assets;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Assets);

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

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/clickandpay.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/clickandpay.js */"./pages/clickandpay.js");


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

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=clickandpay.js.map