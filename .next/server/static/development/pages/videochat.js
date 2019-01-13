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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
        css: "body{background:#e6e6e6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpYW5lbW1hbnVlbGFsbGVtYW5uL0JBLVMuRS5BL2NvbXBvbmVudHMvUHJvZmlsZUhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRDZCLEFBR2tDLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvc2ViYXN0aWFuZW1tYW51ZWxhbGxlbWFubi9CQS1TLkUuQS9jb21wb25lbnRzL1Byb2ZpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51LCBJY29uLCBDb250YWluZXIsIEhlYWRlciwgU2VnbWVudCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgc2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL0Nvb2tpZVV0aWxzXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gXCIuL1VzZXJMaXN0XCI7XG5pbXBvcnQgVmlkZW9DaGF0IGZyb20gXCIuL1ZpZGVvQ2hhdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9maWxlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQWRtaW46IGZhbHNlLFxuICAgICAgY3VycmVudFVzZXI6IFwiXCIsXG4gICAgICAvLyBhY3RpdmVJdGVtOiBcInZpZGVvY2hhdFwiXG4gICAgfTtcbiAgICB0aGlzLmxvZ291dCA9IGUgPT4gdGhpcy5fbG9nb3V0KCk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvY3VycmVudHVzZXJcIlxuICAgICAgKTtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVc2VyOiByZXNwb25zZS5kYXRhLmN1cnJlbnRVc2VyIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBfbG9nb3V0KCkge1xuICAgIHNldENvb2tpZShcIngtYWNjZXNzLXRva2VuXCIsIFwiXCIsIC02MCAqIDYwKTtcbiAgICBSb3V0ZXIucHVzaFJvdXRlKFwiL2xvZ2luXCIpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgfVxuXG4gIC8vIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lbnUgcG9pbnRpbmc+XG4gICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPVwiaG9tZVwiPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cImhvbWVcIiBzaXplPVwic21hbGxcIiAvPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDxNZW51Lk1lbnUgcG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPVwibG9nb3V0XCIgb25DbGljaz17dGhpcy5sb2dvdXR9IC8+XG4gICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlclwiIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfTwvcD5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/sebastianemmanuelallemann/BA-S.E.A/components/ProfileHeader.js */"
      })));
    }
  }]);

  return ProfileHeader;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



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
/* harmony import */ var otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! otplib/otplib-browser */ "otplib/otplib-browser");
/* harmony import */ var otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(otplib_otplib_browser__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-otp-input */ "react-otp-input");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tesseract.ts */ "tesseract.ts");
/* harmony import */ var tesseract_ts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(tesseract_ts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recordrtc */ "recordrtc");
/* harmony import */ var recordrtc__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recordrtc__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);


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


var StereoAudioRecorder = recordrtc__WEBPACK_IMPORTED_MODULE_11___default.a.StereoAudioRecorder;




var xsrfToken = "";
var pusher;
var peer;
var channelName;
var userName;
var userNames = []; // var audioOptions = {
//   mimeType: 'audio/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
//   audioBitsPerSecond: 128000,
//   bitsPerSecond: 128000 // if this line is provided, skip above two
// };

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
        sweetalert2__WEBPACK_IMPORTED_MODULE_15___default()("You are conneted to", "".concat(member.id), "success"); //Only Admin!!

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
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(window.location.origin + "/usrs", {
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
                        return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(window.location.origin + "/decline", formData);

                      case 12:
                        response = _context2.sent;

                        if (response.data.success) {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_15___default()("User declined", "", "success");

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
      _routes__WEBPACK_IMPORTED_MODULE_14__["Router"].push("/login");
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
                        return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(window.location.origin + "/createOTP", formData);

                      case 13:
                        response = _context4.sent;

                        if (response.data.success) {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_15___default()("OTP sent!", "", "success");

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
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(window.location.origin + "/otpToken");

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
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(window.location.origin + "/approval");

            case 10:
              response = _context6.sent;

              if (response.data.success) {
                Object(_utils_CookieUtils__WEBPACK_IMPORTED_MODULE_7__["setCookie"])("x-access-token", "", -60 * 60);
                window.location.href = "/login";
                _routes__WEBPACK_IMPORTED_MODULE_14__["Router"].push("/login");
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

      var image = document.getElementById("id-back");
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

    _this.state = (_this$state = {
      hasMedia: false,
      userName: "",
      otherUserId: null,
      // role: "",
      isNotCalled: "true",
      message: "",
      waitingMessage: "",
      loading: false,
      countMembers: "",
      isEdited: "",
      activeItem: "videochat",
      ethAddresses: [],
      ethAddressArray: []
    }, _defineProperty(_this$state, "message", ""), _defineProperty(_this$state, "sent", false), _defineProperty(_this$state, "idIsValid", ""), _defineProperty(_this$state, "users", []), _defineProperty(_this$state, "isConnected", false), _defineProperty(_this$state, "disableButton", true), _defineProperty(_this$state, "recordAudio", null), _defineProperty(_this$state, "isRecording", ""), _this$state);
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
                return axios__WEBPACK_IMPORTED_MODULE_13___default.a.post(window.location.origin + "/videochat/stream", {
                  timeout: 60 * 4 * 1000
                });

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
    //TODO: Crop Function!!
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), this.state.role == 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        style: {
          marginTop: "16px",
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
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
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        style: {
          width: "62%"
        }
      }, this.state.disableButton === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        animated: true,
        loading: this.state.loading,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        hidden: true
      }, "Quit Call")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.state.isRecording)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.sendOTP,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "send",
        color: "green"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        hidden: true
      }, "Send OTP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        animated: true,
        floated: "left",
        onClick: this.decline,
        style: {
          backgroundColor: "white",
          border: "1px solid black",
          width: "40%"
        },
        disabled: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        visible: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        name: "close",
        color: "red"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
        hidden: true
      }, "Quit Call")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, this.state.isRecording)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "eight"
      }, this.state.img1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        style: {
          display: "inline-block",
          width: "100%",
          height: "282.5px",
          marginBottom: "-6%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        id: "id-back",
        className: "img-responsive",
        src: "../static/".concat(this.state.img1) // src={"../static/vbnm-ID.png"}
        ,
        style: {
          // width: "500px",
          // height: "282.5px"
          width: "100%",
          height: "88%" // float: "left"

        }
      })), this.state.idIsValid ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        header: "Valid!",
        success: true,
        content: this.state.ocr,
        style: {
          boxShadow: "1px 1px 11px green",
          border: "1px solid green"
        }
      }) : this.state.idIsValid === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        header: "NOT Valid!",
        success: true,
        content: this.state.ocr,
        style: {
          boxShadow: "1px 1px 11px red",
          border: "1px solid red"
        }
      }) : null) : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "eight"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        style: {// display: "inline-block",
          // textAlign: "center",
          // marginTop: "10px",
          // width: "64%",
          // marginBottom: "10px"
        }
      }, userNames.map(function (userId) {
        var _React$createElement;

        return _this3.currentUser.id !== userId && // this.state.isNotCalled ? (
        userNames != [] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], (_React$createElement = {
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
        }), _React$createElement), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
          visible: true
        }, "Call ", userId), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"].Content, {
          hidden: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
          name: "phone",
          color: "blue"
        }))) : null;
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Grid"].Column, {
        width: "eight"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: this.ocrScan,
        loading: this.state.loadingOCR
      }, "Validate MRZ Code")))))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.state.isConnected === false ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
        active: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Loader"], {
        indeterminate: true
      }, "Waiting for Admin")) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Segment"], {
        style: {
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
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
      })), this.state.sent ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        success: true,
        header: "Success",
        content: this.state.message
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Container"], {
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
      }), this.state.message ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.message
      }) : null), this.state.otpEntered ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        style: {
          color: "white",
          backgroundColor: "#ff3344",
          width: "50%",
          margin: "0px auto"
        },
        fluid: true,
        onClick: this.otpVerify
      }, "Submit") : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_12__["Button"], {
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



/***/ }),

/***/ "./pages/videochat.js":
/*!****************************!*\
  !*** ./pages/videochat.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoChatPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_VideoChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/VideoChat */ "./components/VideoChat.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VideoChatPage =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChatPage, _Component);

  function VideoChatPage() {
    _classCallCheck(this, VideoChatPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(VideoChatPage).apply(this, arguments));
  }

  _createClass(VideoChatPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VideoChat__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
  }]);

  return VideoChatPage;
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



/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/videochat.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/videochat.js */"./pages/videochat.js");


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

/***/ "mrz":
/*!**********************!*\
  !*** external "mrz" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mrz");

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

/***/ "otplib/otplib-browser":
/*!****************************************!*\
  !*** external "otplib/otplib-browser" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("otplib/otplib-browser");

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

/***/ "react-otp-input":
/*!**********************************!*\
  !*** external "react-otp-input" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-otp-input");

/***/ }),

/***/ "recordrtc":
/*!****************************!*\
  !*** external "recordrtc" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recordrtc");

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

/***/ "tesseract.ts":
/*!*******************************!*\
  !*** external "tesseract.ts" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tesseract.ts");

/***/ })

/******/ });
//# sourceMappingURL=videochat.js.map