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
    css: "body{background:#e6e6e6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5lbW1hbnVlbGFsbGVtYW5uL0JBLVMuRS5BL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF5QixBQUc4QixtQkFDckIiLCJmaWxlIjoiL1VzZXJzL3NlYmFzdGlhbmVtbWFudWVsYWxsZW1hbm4vQkEtUy5FLkEvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IDY1MCwgYm9yZGVyOiAxIH19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4zL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/sebastianemmanuelallemann/BA-S.E.A/components/Layout.js */"
  }), props.children);
});

/***/ }),

/***/ "./components/ProfileHeader.js":
/*!*************************************!*\
  !*** ./components/ProfileHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileHeader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Layout */ "./components/Layout.js");
/* harmony import */ var _UserList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserList */ "./components/UserList.js");
/* harmony import */ var _VideoChat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VideoChat */ "./components/VideoChat.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var ProfileHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(ProfileHeader, _Component);

  function ProfileHeader(props) {
    var _this;

    _classCallCheck(this, ProfileHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProfileHeader).call(this, props));
    _this.state = {
      isAdmin: false,
      currentUser: "" // activeItem: "videochat"

    };

    _this.logout = function (e) {
      return _this._logout();
    };

    return _this;
  }

  _createClass(ProfileHeader, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(window.location.origin + "/currentuser");

              case 3:
                response = _context.sent;

                if (response.data.success) {
                  this.setState({
                    currentUser: response.data.currentUser
                  });
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "_logout",
    value: function _logout() {
      Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_4__["setCookie"])("x-access-token", "", -60 * 60);
      _routes__WEBPACK_IMPORTED_MODULE_5__["Router"].pushRoute("/login");
      window.location.href = "/login";
    } // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  }, {
    key: "render",
    value: function render() {
      // const { activeItem } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
        pointing: true
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        name: "home"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "home",
        size: "small"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Menu, {
        position: "right"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        name: "logout",
        onClick: this.logout
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "user",
        size: "small"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, this.state.currentUser)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "3698465938",
        css: "body{background:#e6e6e6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5lbW1hbnVlbGFsbGVtYW5uL0JBLVMuRS5BL2NvbXBvbmVudHMvUHJvZmlsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRjZCLEFBR2tDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvc2ViYXN0aWFuZW1tYW51ZWxhbGxlbWFubi9CQS1TLkUuQS9jb21wb25lbnRzL1Byb2ZpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51LCBJY29uLCBDb250YWluZXIsIEhlYWRlciwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL0Nvb2tpZVV0aWxzXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gXCIuL1VzZXJMaXN0XCI7XG5pbXBvcnQgVmlkZW9DaGF0IGZyb20gXCIuL1ZpZGVvQ2hhdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQWRtaW46IGZhbHNlLFxuICAgICAgY3VycmVudFVzZXI6IFwiXCIsXG4gICAgICAvLyBhY3RpdmVJdGVtOiBcInZpZGVvY2hhdFwiXG4gICAgfTtcbiAgICB0aGlzLmxvZ291dCA9IGUgPT4gdGhpcy5fbG9nb3V0KCk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvY3VycmVudHVzZXJcIlxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiByZXNwb25zZS5kYXRhLmN1cnJlbnRVc2VyIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBfbG9nb3V0KCkge1xuICAgIHNldENvb2tpZShcIngtYWNjZXNzLXRva2VuXCIsIFwiXCIsIC02MCAqIDYwKTtcbiAgICBSb3V0ZXIucHVzaFJvdXRlKFwiL2xvZ2luXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgfVxuXG4gIC8vIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lbnUgcG9pbnRpbmc+XG4gICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiaG9tZVwiPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5jdXJyZW50VXNlciA9PT0gXCJBZG1pblwiID8gKFxuICAgICAgICAgICAgPE1lbnUuTWVudT5cbiAgICAgICAgICAgICAgey8qIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJob21lXCJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09IFwiaG9tZVwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgey8qIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcmxpc3RcIlxuICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gXCJ1c2VybGlzdFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICBuYW1lPVwidmlkZW9jaGF0XCJcbiAgICAgICAgICAgICAgICAvLyBocmVmPVwiL3ZpZGVvY2hhdFwiXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSBcInZpZGVvY2hhdFwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L01lbnUuTWVudT4gKi99XG4gICAgICAgICAgey8qICkgOiBudWxsfSAqL31cbiAgICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT1cImxvZ291dFwiIG9uQ2xpY2s9e3RoaXMubG9nb3V0fSAvPlxuICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVzZXJcIiBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn08L3A+XG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnUuTWVudT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgey8qIHt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyID09PSBcIkFkbWluXCIgPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVJdGVtID09PSBcInVzZXJsaXN0XCIgPyA8VXNlckxpc3QgLz4gOiBudWxsfVxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hY3RpdmVJdGVtID09PSBcInZpZGVvY2hhdFwiID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8VmlkZW9DaGF0IC8+XG4gICAgICAgICAgICAgICAgICB7LyogPFVzZXJBcHByb3ZhbCAvPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICB7LyogKSA6IG51bGx9ICovfVxuICAgICAgICAgICAgICB7Lyoge3RoaXMuc3RhdGUuYWN0aXZlSXRlbSA9PT0gXCJob21lXCIgPyAoXG4gICAgICAgICAgICAgICAgPFNlZ21lbnRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiLTEyNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwMHB4XCJcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlclxuICAgICAgICAgICAgICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjk4NWQwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBBZG1pbiBQYWdlXG4gICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICkgOiBudWxsfSAqL31cbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgey8qICkgOiBudWxsfSAqL31cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/sebastianemmanuelallemann/BA-S.E.A/components/ProfileHeader.js */"
      })));
    }
  }]);

  return ProfileHeader;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ "./components/UserData.js":
/*!********************************!*\
  !*** ./components/UserData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


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






var UserData =
/*#__PURE__*/
function (_Component) {
  _inherits(UserData, _Component);

  function UserData(props) {
    var _this;

    _classCallCheck(this, UserData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserData).call(this, props));
    _this.state = {
      users: [],
      isComp: "",
      fileURL: "",
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: false // userName: "",
      // street: "",
      // houseNr: "",
      // postCode: "",
      // placeOfRes: "",
      // email: "",
      // mobNr: "",
      // compName: "",
      // businessAd: "",
      // compHouseNr: "",
      // compPostCode: "",
      // residence: ""

    };
    _this.editAddress = _this.editAddress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.editEmail = _this.editEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.editMobile = _this.editMobile.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.editCompName = _this.editCompName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.editCompAddress = _this.editCompAddress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveAddress = _this.saveAddress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveEmail = _this.saveEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveMobile = _this.saveMobile.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveCompName = _this.saveCompName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.saveCompAddress = _this.saveCompAddress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.exitEditMode = _this.exitEditMode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UserData, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/users");

              case 3:
                response = _context.sent;

                if (response.data.success) {
                  this.setState({
                    users: response.data.userData,
                    img1: response.data.pic1,
                    img2: response.data.pic2,
                    doc1: response.data.doc1,
                    doc2: response.data.doc2,
                    isComp: response.data.isComp
                  });
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "editAddress",
    value: function editAddress() {
      this.setState({
        inAddressEdit: true,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    }
  }, {
    key: "editEmail",
    value: function editEmail() {
      this.setState({
        inAddressEdit: false,
        inEmailEdit: true,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    }
  }, {
    key: "editMobile",
    value: function editMobile() {
      this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: true,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    }
  }, {
    key: "editCompName",
    value: function editCompName() {
      this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: true,
        inCompAddressEdit: false
      });
    }
  }, {
    key: "editCompAddress",
    value: function editCompAddress() {
      this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: true
      });
    }
  }, {
    key: "exitEditMode",
    value: function exitEditMode() {
      this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    }
  }, {
    key: "saveAddress",
    value: function () {
      var _saveAddress = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append("street", this.state.street);
                formData.append("houseNr", this.state.houseNr);
                formData.append("postCode", this.state.postCode);
                formData.append("placeOfRes", this.state.placeOfRes);
                formData.append("username", this.state.users[0].username);
                console.log(this.state.users[0].username, this.state.street);
                _context2.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/editData", formData);

              case 9:
                response = _context2.sent;

                if (response.data.success) {
                  this.exitEditMode();
                }

                window.location.href = "/profile";

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function saveAddress() {
        return _saveAddress.apply(this, arguments);
      };
    }()
  }, {
    key: "saveEmail",
    value: function () {
      var _saveEmail = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var email, userName, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                email = this.state.email;
                userName = this.state.users[0].username;
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/editData", {
                  email: email,
                  userName: userName
                });

              case 4:
                response = _context3.sent;

                if (response.data.success) {
                  this.exitEditMode();
                }

                window.location.href = "/profile";

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function saveEmail() {
        return _saveEmail.apply(this, arguments);
      };
    }()
  }, {
    key: "saveMobile",
    value: function () {
      var _saveMobile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var mobNr, userName, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                mobNr = this.state.mobNr;
                userName = this.state.users[0].username;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/editData", {
                  mobNr: mobNr,
                  userName: userName
                });

              case 4:
                response = _context4.sent;

                if (response.data.success) {
                  this.exitEditMode();
                }

                window.location.href = "/profile";

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function saveMobile() {
        return _saveMobile.apply(this, arguments);
      };
    }()
  }, {
    key: "saveCompName",
    value: function () {
      var _saveCompName = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var compName, userName, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                compName = this.state.compName;
                userName = this.state.users[0].username;
                _context5.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/editData", {
                  compName: compName,
                  userName: userName
                });

              case 4:
                response = _context5.sent;

                if (response.data.success) {
                  this.exitEditMode();
                }

                window.location.href = "/profile";

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function saveCompName() {
        return _saveCompName.apply(this, arguments);
      };
    }()
  }, {
    key: "saveCompAddress",
    value: function () {
      var _saveCompAddress = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                formData = new FormData();
                formData.append("businessAd", this.state.businessAd);
                formData.append("compHouseNr", this.state.compHouseNr);
                formData.append("compPostCode", this.state.compPostCode);
                formData.append("residence", this.state.residence);
                formData.append("username", this.state.users[0].username);
                _context6.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/editData", formData);

              case 8:
                response = _context6.sent;

                if (response.data.success) {
                  this.exitEditMode();
                }

                window.location.href = "/profile";

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function saveCompAddress() {
        return _saveCompAddress.apply(this, arguments);
      };
    }() //TODO: Create UserProfile component with default template

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        style: {
          width: "98%",
          marginLeft: "16px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "10px",
          color: "#2985d0"
        }
      }, "Your Profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          marginTop: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          display: "inline-block"
        }
      }, this.state.inAddressEdit == true || this.state.inEmailEdit == true || this.state.inMobileEdit == true || this.state.inCompNameEdit == true || this.state.inCompAddressEdit == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        floated: "left",
        style: {
          backgroundColor: "white",
          marginLeft: "-20px"
        },
        onClick: this.exitEditMode
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "close"
      })) : null, this.state.isComp == "1" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          floated: "right",
          animated: "vertical",
          style: {
            marginRight: "3px",
            backgroundColor: "white"
          },
          onClick: this.editCompAddress,
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "location arrow"
        })),
        content: "Edit business address",
        hideOnScroll: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          floated: "right",
          animated: "vertical",
          style: {
            marginRight: "3px",
            backgroundColor: "white"
          },
          onClick: this.editCompName,
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "globe"
        })),
        content: "Edit company name",
        hideOnScroll: true
      })) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          floated: "right",
          animated: "vertical",
          style: {
            marginRight: "3px",
            backgroundColor: "white"
          },
          onClick: this.editMobile,
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "phone"
        })),
        content: "Edit mobile number",
        hideOnScroll: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          floated: "right",
          animated: "vertical",
          style: {
            marginRight: "3px",
            backgroundColor: "white"
          },
          onClick: this.editEmail,
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "mail"
        })),
        content: "Edit email",
        hideOnScroll: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          floated: "right",
          animated: "vertical",
          style: {
            marginRight: "3px",
            backgroundColor: "white"
          },
          onClick: this.editAddress,
          icon: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "home"
        })),
        content: "Edit address",
        hideOnScroll: true
      })), this.state.inAddressEdit == false && this.state.inCompAddressEdit == false && this.state.inCompNameEdit == false && this.state.inEmailEdit == false && this.state.inMobileEdit == false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, this.state.users.map(function (member) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          fluid: true,
          label: "Username",
          value: member.username
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "ID",
          value: member.id
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "First Name",
          value: member.fname
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Last Name",
          value: member.lname
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "eleven",
          fluid: true,
          label: "Street",
          value: member.street
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "five",
          type: "number",
          fluid: true,
          label: "House Number",
          value: member.houseNr
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "six",
          fluid: true,
          type: "number",
          label: "Postal Code",
          value: member.postCode
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "ten",
          fluid: true,
          label: "Place of Residence",
          value: member.placeOfRes
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Date of Birth",
          value: member.dateOfBirth
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Nationality",
          value: member.nat
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Email",
          value: member.email
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          fluid: true,
          label: "Mobile Number",
          value: member.mobNr
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          width: "sixteen"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          width: "sixteen",
          readOnly: true,
          fluid: true,
          label: "Registration Date",
          value: member.regDate
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          width: "sixteen"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          width: "sixteen",
          readOnly: true,
          fluid: true,
          label: "KycKey",
          value: member.kycKey
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal",
          style: {
            margin: "0px auto"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../static/".concat(_this2.state.img1),
          target: "_blank",
          style: {
            width: "50%"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "img-responsive",
          src: "../static/".concat(_this2.state.img1),
          style: {
            width: "200px",
            height: "113px"
          }
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../static/".concat(_this2.state.img1),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "img-responsive",
          src: "../static/".concat(_this2.state.img2),
          style: {
            width: "200px",
            height: "113px"
          }
        }))), _this2.state.isComp == "1" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          style: {
            marginTop: "10px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "sixteen",
          fluid: true,
          label: "Company Name",
          value: member.compName
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "eleven",
          fluid: true,
          label: "Business Address",
          value: member.businessAd
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "five",
          fluid: true,
          label: "House Number",
          value: member.compHouseNr
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "six",
          fluid: true,
          label: "Postal Code",
          value: member.compPostCode
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
          readOnly: true,
          width: "ten",
          fluid: true,
          label: "Place of Residenz",
          value: member.residence
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          width: "sixteen",
          style: {
            margin: "0px auto"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "linkify"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../static/".concat(_this2.state.doc1),
          type: "application/pdf",
          target: "_blank"
        }, "View extract of the relevant registration authority")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          width: "sixteen",
          style: {
            margin: "0px auto"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "linkify"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../static/".concat(_this2.state.doc2),
          type: "application/pdf",
          target: "_blank"
        }, "View electronic copy of the power of attorney"))) : null);
      })) : this.state.inAddressEdit == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.saveAddress
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "eleven",
        fluid: true,
        label: "Street",
        required: true,
        placeholder: "Street",
        name: "street",
        value: this.state.street,
        onChange: function onChange(event) {
          return _this2.setState({
            street: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "six",
        fluid: true,
        type: "number",
        name: "postCode",
        required: true,
        placeholder: "Postal Code",
        label: "Postal Code",
        value: this.state.postCode,
        onChange: function onChange(event) {
          return _this2.setState({
            postCode: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "ten",
        fluid: true,
        required: true,
        placeholder: "Place of Residence",
        name: "placeOfRes",
        label: "Place of Residence",
        value: this.state.placeOfRes,
        onChange: function onChange(event) {
          return _this2.setState({
            placeOfRes: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          display: "inline-block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : this.state.inEmailEdit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.saveEmail
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "sixteen",
        fluid: true,
        name: "email",
        required: true,
        placeholder: "Email",
        label: "Email",
        type: "email",
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.setState({
            email: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          display: "inline-block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : this.state.inMobileEdit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.saveMobile
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "sixteen",
        name: "mobNr",
        placeholder: "+4* *** ** **",
        fluid: true,
        required: true,
        label: "Mobile Number",
        type: "number",
        value: this.state.mobNr,
        onChange: function onChange(event) {
          return _this2.setState({
            mobNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          display: "inline-block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : this.state.isComp == "1" && this.state.inCompNameEdit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.saveCompName
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        style: {
          marginTop: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "sixteen",
        fluid: true,
        required: true,
        label: "Company Name",
        name: "compName",
        placeholder: "Company Name",
        value: this.state.compName,
        onChange: function onChange(event) {
          return _this2.setState({
            compName: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          display: "inline-block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : this.state.isComp == "1" && this.state.inCompAddressEdit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.saveCompAddress
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "eleven",
        fluid: true,
        required: true,
        name: "businessAd",
        placeholder: "Street",
        label: "Business Address",
        value: this.state.businessAd,
        onChange: function onChange(event) {
          return _this2.setState({
            businessAd: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "five",
        fluid: true,
        required: true,
        label: "House Number",
        placeholder: "House Nr",
        name: "compHouseNr",
        value: this.state.compHouseNr,
        onChange: function onChange(event) {
          return _this2.setState({
            compHouseNr: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "six",
        name: "compPostCode",
        fluid: true,
        required: true,
        label: "Postal Code",
        type: "number",
        placeholder: "Postal Code",
        value: this.state.compPostCode,
        onChange: function onChange(event) {
          return _this2.setState({
            compPostCode: event.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        width: "ten",
        name: "residence",
        fluid: true,
        required: true,
        label: "Place of Residence",
        placeholder: "Place of Residence",
        value: this.state.residence,
        onChange: function onChange(event) {
          return _this2.setState({
            residence: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          display: "inline-block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : null)));
    }
  }]);

  return UserData;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


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



 // import getCurrentUser from "../utils/UserUtils";



var UserList =
/*#__PURE__*/
function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    var _this;

    _classCallCheck(this, UserList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserList).call(this));
    _this.state = {
      users: [],
      usrs: [],
      test: "",
      isChosen: false,
      isPromoted: false,
      isComp: "",
      inEdit: false,
      isAdmin: false
    }; //this.currentUser = getCurrentUser();

    _this.makeAdmin = function (e) {
      return _this._makeAdmin();
    };

    _this.toEdit = _this.toEdit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.backEdit = _this.backEdit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(UserList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                setInterval(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  var response;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/userlist");

                        case 3:
                          response = _context.sent;

                          if (response.data.success) {
                            _this2.setState({
                              users: response.data.userData
                            });
                          }

                          _context.next = 10;
                          break;

                        case 7:
                          _context.prev = 7;
                          _context.t0 = _context["catch"](0);
                          console.log(_context.t0);

                        case 10:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this, [[0, 7]]);
                })), 2000);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "selectUser",
    value: function () {
      var _selectUser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(member, e, dimmer) {
        var currentUser, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentUser = member.username;
                _context3.prev = 1;
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/usrs", {
                  currentUser: currentUser
                });

              case 4:
                response = _context3.sent;

                if (response.data.success) {
                  this.setState({
                    usrs: response.data.userData,
                    isComp: response.data.isComp,
                    img1: response.data.pic1,
                    img2: response.data.pic2,
                    doc1: response.data.doc1,
                    doc2: response.data.doc2
                  });
                }

                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

              case 11:
                this.setState({
                  dimmer: dimmer,
                  open: true,
                  isChosen: true
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 8]]);
      }));

      return function selectUser(_x, _x2, _x3) {
        return _selectUser.apply(this, arguments);
      };
    }()
  }, {
    key: "_makeAdmin",
    value: function () {
      var _makeAdmin2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var currentUser, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                currentUser = this.state.usrs[0].username;
                _context4.prev = 1;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(window.location.origin + "/makeadmin", {
                  currentUser: currentUser
                });

              case 4:
                response = _context4.sent;

                if (response.data.success) {
                  this.setState({
                    successMessage: response.data.message,
                    isAdmin: true
                  });
                  console.log(this.state.successMessage);
                }

                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                console.log(_context4.t0);

              case 11:
                this.setState({
                  isPromoted: true
                });

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 8]]);
      }));

      return function _makeAdmin() {
        return _makeAdmin2.apply(this, arguments);
      };
    }()
  }, {
    key: "toEdit",
    value: function toEdit() {
      this.setState({
        inEdit: "true"
      });
    }
  }, {
    key: "backEdit",
    value: function backEdit() {
      this.setState({
        inEdit: "false"
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        open: false
      });
    } //TODO: Create UserProfile component with default template

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          open = _this$state.open,
          dimmer = _this$state.dimmer;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
        style: {
          marginLeft: "-234px",
          width: "1118px"
        }
      }, this.state.users.map(function (member) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          raised: true,
          style: {
            height: "400x",
            width: "180px",
            display: "inline-block",
            margin: "18px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Header, null, member.username, " ", member.isRegistered == "yes" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "checkmark",
          color: "green",
          style: {
            float: "right"
          }
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "x",
          color: "red",
          style: {
            float: "right"
          }
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "date"
        }, "Last Modified: 11.12.18")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Description, null, member.lname, ", ", member.fname)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Card"].Content, {
          extra: true,
          style: {
            textAlign: "center"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          onClick: _this3.selectUser.bind(_this3, member)
        }, "View Profile")));
      }), this.state.isChosen ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        dimmer: dimmer,
        open: open,
        onClose: this.closeModal
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Header, null, "Profile of ", this.state.usrs[0].username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Approval"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Username",
        value: this.state.usrs[0].username
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "ID",
        value: this.state.usrs[0].id
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "First Name",
        value: this.state.usrs[0].fname
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Last Name",
        value: this.state.usrs[0].lname
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "eleven",
        fluid: true,
        label: "Street",
        value: this.state.usrs[0].street
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "five",
        type: "number",
        fluid: true,
        label: "House Number",
        value: this.state.usrs[0].houseNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "six",
        fluid: true,
        type: "number",
        label: "Postal Code",
        value: this.state.usrs[0].postCode
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "ten",
        fluid: true,
        label: "Place of Residence",
        value: this.state.usrs[0].placeOfRes
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Date of Birth",
        value: this.state.usrs[0].dateOfBirth
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Nationality",
        value: this.state.usrs[0].nat
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Email",
        type: "email",
        value: this.state.usrs[0].email
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        fluid: true,
        label: "Mobile Number",
        type: "number",
        value: this.state.usrs[0].mobNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal",
        style: {
          margin: "0px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.img1),
        target: "_blank",
        style: {
          width: "50%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.img1),
        style: {
          width: "200px",
          height: "113px" // float: "left"

        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.img1),
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.img2),
        style: {
          width: "200px",
          height: "113px" // float: "right"

        }
      }))), this.state.usrs[0].isComp == "1" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        style: {
          marginTop: "10px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "sixteen",
        fluid: true,
        label: "Company Name",
        value: this.state.usrs[0].compName
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "eleven",
        fluid: true,
        label: "Business Address",
        value: this.state.usrs[0].businessAd
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "five",
        fluid: true,
        label: "House Number",
        value: this.state.usrs[0].compHouseNr
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        widths: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "six",
        fluid: true,
        label: "Postal Code",
        value: this.state.usrs[0].compPostCode
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
        readOnly: true,
        width: "ten",
        fluid: true,
        label: "Place of Residenz",
        value: this.state.usrs[0].residence
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        width: "sixteen",
        style: {
          margin: "0px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "linkify"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.doc1),
        type: "application/pdf",
        target: "_blank"
      }, "View extract of the relevant registration authority")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
        width: "sixteen",
        style: {
          margin: "0px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "linkify"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "../static/".concat(this.state.doc2),
        type: "application/pdf",
        target: "_blank"
      }, "View electronic copy of the power of attorney"))) : null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        style: {
          textAlign: "center",
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "black",
        onClick: this.closeModal
      }, "Close")))) : null));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/VideoChat.js":
/*!*********************************!*\
  !*** ./components/VideoChat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoChat; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ProfileHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProfileHeader */ "./components/ProfileHeader.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webrtc/MediaHandler */ "./webrtc/MediaHandler.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simple-peer */ "simple-peer");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/src/web3 */ "./ethereum/src/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);


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







var APP_KEY = "0f924dcd44dc93a88aa7"; //Pusher Key







var xsrfToken = "";
var pusher;
var channelName;
var userName;

var VideoChat =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChat, _Component);

  function VideoChat() {
    var _this;

    _classCallCheck(this, VideoChat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VideoChat).call(this));
    _this.state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      connectedTo: "",
      role: "",
      isNotCalled: "true",
      hash: "",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: "",
      open: false
    };
    _this.currentUser = {
      id: "",
      stream: undefined
    };
    _this.peers = [];
    _this.mediaHandler = new _webrtc_MediaHandler__WEBPACK_IMPORTED_MODULE_4__["default"](); // this.setupPusher();

    _this.callTo = _this.callTo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setupPusher = _this.setupPusher.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.startPeer = _this.startPeer.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.endCall = _this.endCall.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.approval = _this.approval.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.show = _this.show.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(VideoChat, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(window.location.origin + "/videochat/stream", {
                  timeout: 60 * 4 * 1000
                });

              case 3:
                response = _context.sent;
                this.setState({
                  userName: response.data.currentUser,
                  role: response.data.role
                });
                this.currentUser.id = this.state.userName;
                xsrfToken = response.data.token;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
                // this.currentUser.id = getCurrentUser();
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
                return _context.abrupt("return");

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
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

      channelName.bind("pusher:subscription_succeeded", function (members) {
        var countMembers = members.count;
        console.log(countMembers);
      });
      channelName.bind("pusher:member_added", function (member) {
        _this3.setState({
          connectedTo: member.id
        });

        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default()("You are conneted to", "".concat(member.id), "success");
        userName = member.id; // let newConnect = member.id;
        // // swal("Attention", "Admin is occupied, please wait...", "warning");
        // axios.post(window.location.origin + "/pusher/count", {
        //   newConnect
        // });
      });
      channelName.bind("pusher:member_removed", function (member) {
        _this3.show(); // swal("Removed `${member.id}`", "Please press End Call to approve or decline the user" , "success");
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
      var peer = new simple_peer__WEBPACK_IMPORTED_MODULE_6___default.a({
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
    key: "callTo",
    value: function callTo(userId) {
      // console.log(`starting Pusher: ${userId}`);
      this.setState({
        isNotCalled: false
      }); //TODO: show encall button only when in call?

      this.peers[userId] = this.startPeer(userId);
    }
  }, {
    key: "endCall",
    value: function endCall() {
      Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__["setCookie"])("x-access-token", "", -60 * 60);
      window.location.href = "/login";
      _routes__WEBPACK_IMPORTED_MODULE_11__["Router"].push("/login");
    }
  }, {
    key: "approval",
    value: function () {
      var _approval = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var newAccount, newKycKey, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                newAccount = _ethereum_src_web3__WEBPACK_IMPORTED_MODULE_8__["default"].eth.accounts.create();
                newKycKey = newAccount.address;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(window.location.origin + "/approval", {
                  newKycKey: newKycKey,
                  userName: userName
                });

              case 4:
                response = _context2.sent;

                if (response.data.success) {
                  this.closeModal();
                } else {
                  console.log("error");
                }

                window.location.href = "/admin";

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function approval() {
        return _approval.apply(this, arguments);
      };
    }()
  }, {
    key: "show",
    value: function show(dimmer) {
      this.setState({
        dimmer: dimmer,
        open: true
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          open = _this$state.open,
          dimmer = _this$state.dimmer;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Segment"], {
        style: {
          marginLeft: "-126px",
          width: "900px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        as: "h1",
        textAlign: "center",
        style: {
          color: "#2985d0",
          marginTop: "10px"
        }
      }, "Video Chat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "video-container",
        style: {
          width: "60%",
          height: "380px",
          margin: "0px auto",
          position: "relative",
          border: "3px solid #000"
        }
      }, ["Admin"].map(function (userId) {
        return _this5.currentUser.id !== userId && _this5.state.isNotCalled ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          icon: true,
          key: userId,
          onClick: function onClick() {
            return _this5.callTo(userId);
          },
          style: {
            backgroundColor: "#2985d0",
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "3",
            margin: "auto"
          }
        }, "Call ", userId, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          name: "phone"
        })) : null;
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "my-video",
        id: "my-video" // ref={ref => {
        //   this.myVideo = ref;
        // }}
        ,
        style: {
          width: "130px",
          position: "absolute",
          left: "10px",
          bottom: "10px",
          border: "3px solid #0061ff",
          zIndex: "2"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
        className: "user-video",
        id: "user-video" // ref={ref => {
        //   this.userVideo = ref;
        // }}
        ,
        style: {
          // position: "absolute",
          margin: "auto",
          // left: "0",
          // right: "0",
          // bottom: "0",
          // top: "0",
          width: "100%",
          height: "100%",
          zIndex: "1"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), this.state.role != 1 ? // <Button
      //   onClick={this.reloadAfterCall}
      //   fluid
      //   style={{ color: "white", backgroundColor: "#ff3344" }}
      // >
      //   end call
      // </Button>
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        style: {
          color: "white",
          backgroundColor: "#ff3344",
          width: "60%",
          margin: "0px auto"
        },
        fluid: true,
        onClick: this.endCall
      }, "End Call") : null, this.state.role == 1 && this.state.connectedTo ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Message"], {
        success: true,
        header: "You are connected to",
        content: this.state.connectedTo
      }) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        dimmer: dimmer,
        open: open,
        onClose: this.closeModal
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Header, null, userName, " removed successfully!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Content, {
        image: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Description, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], null, "Approval"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Please select whether the user identification was successful. If yes, he will be assigned a kycKey, if no, the user will be deleted."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Will you approve?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Modal"].Actions, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        color: "black",
        floated: "left",
        onClick: this.closeModal
      }, "Decline"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        positive: true,
        icon: "checkmark",
        labelPosition: "right",
        content: "Approve",
        onClick: this.approval
      })))));
    }
  }]);

  return VideoChat;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



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

var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(web3__WEBPACK_IMPORTED_MODULE_0___default.a.givenProvider || "ws://localhost:3000");
/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_CookieUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/CookieUtils */ "./utils/CookieUtils.js");
/* harmony import */ var _components_ProfileHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProfileHeader */ "./components/ProfileHeader.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_UserData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserData */ "./components/UserData.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Profile =
/*#__PURE__*/
function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    var _this;

    _classCallCheck(this, Profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Profile).call(this));
    _this.state = {
      message: ""
    };
    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProfileHeader__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserData__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      ")));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes")();

module.exports = routes;
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

//Function to get the users media
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
          audio: false
        }) //TODO: change to true
        .then(function (stream) {
          resolve(stream);
        }).catch(function (err) {
          throw new Error("Unable to fetch stream ".concat(err));
        });
      });
    }
  }]);

  return MediaHandler;
}();



/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/profile.js */"./pages/profile.js");


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

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

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

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

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

/***/ "simple-peer":
/*!******************************!*\
  !*** external "simple-peer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("simple-peer");

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
//# sourceMappingURL=profile.js.map