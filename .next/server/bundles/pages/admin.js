module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProfileHeader__ = __webpack_require__("./components/ProfileHeader.js");
var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/components/Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"], {
    style: {
      width: 650,
      border: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), props.children);
});

/***/ }),

/***/ "./components/ProfileHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("jwt-decode");
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
      console.log(decoded.role);

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
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"], {
        pointing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        name: "home",
        onClick: this.profileBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
        name: "home",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        name: "logout",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], {
        name: "user",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.currentUser)))));
    }
  }]);

  return ProfileHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/UserList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ProfileHeader__ = __webpack_require__("./components/ProfileHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);

var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/components/UserList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var UserList =
/*#__PURE__*/
function (_Component) {
  _inherits(UserList, _Component);

  function UserList() {
    var _this;

    _classCallCheck(this, UserList);

    _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this));
    _this.state = {
      users: [],
      usrs: [],
      test: "",
      isChosen: false
    };
    _this.currentUser = Object(__WEBPACK_IMPORTED_MODULE_6__utils_UserUtils__["a" /* default */])();
    return _this;
  }

  _createClass(UserList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post(window.location.origin + "/userlist");

              case 3:
                response = _context.sent;

                if (response.data.success) {
                  this.setState({
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
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(member, e) {
        var currentUser, response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                currentUser = member.username;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post(window.location.origin + "/users", {
                  currentUser: currentUser
                });

              case 4:
                response = _context2.sent;

                if (response.data.success) {
                  this.setState({
                    usrs: response.data.userData
                  });
                  this.setState({
                    img1: response.data.pic1
                  });
                  this.setState({
                    img2: response.data.pic2
                  });
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 11:
                this.setState({
                  isChosen: true
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      return function selectUser(_x, _x2) {
        return _selectUser.apply(this, arguments);
      };
    }() //TODO: Create UserProfile component with default template

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "List of all Users"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        style: {
          marginTop: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
        width: 4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["List"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.state.users.map(function (member) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["List"].Item, {
          key: member.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
          name: "user",
          size: "small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["List"].Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["List"].Header, {
          as: "a",
          onClick: _this2.selectUser.bind(_this2, member),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, member.username)));
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Grid"].Column, {
        width: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, this.state.isChosen ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
        style: {
          marginTop: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], {
        as: "h3",
        block: true,
        style: {
          backgroundColor: "#d9edf7"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], {
        name: "user",
        size: "big",
        style: {
          align: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), this.state.usrs.lname, ",", this.state.usrs.fname), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Username: ", this.state.usrs[0].username), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "ID: ", this.state.usrs[0].id)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "First Name: ", this.state.usrs[0].fname), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Last Name: ", this.state.usrs[0].lname)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.img1),
        style: {
          width: "200px",
          height: "113px",
          float: "left"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "img-responsive",
        src: "../static/".concat(this.state.img2),
        style: {
          width: "200px",
          height: "113px",
          float: "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })))) : null)))));
    }
  }]);

  return UserList;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/VideoChat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoChat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webrtc_MediaHandler__ = __webpack_require__("./webrtc/MediaHandler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("pusher-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_peer__ = __webpack_require__("simple-peer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_simple_peer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_simple_peer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout__ = __webpack_require__("./components/Layout.js");
var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/components/VideoChat.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var APP_KEY = "0f924dcd44dc93a88aa7";

var wrtc = __webpack_require__("wrtc");







var VideoChat =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoChat, _Component);

  function VideoChat() {
    var _this;

    _classCallCheck(this, VideoChat);

    _this = _possibleConstructorReturn(this, (VideoChat.__proto__ || Object.getPrototypeOf(VideoChat)).call(this));
    _this.state = {
      hasMedia: false,
      otherUserName: ""
    };
    var token = Object(__WEBPACK_IMPORTED_MODULE_5__utils_CookieUtils__["a" /* getCookie */])("x-access-token");
    var decoded = __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default()(token);
    var userName = Object(__WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__["a" /* default */])();
    window.user = {
      name: userName
    };
    window.xsrftoken = decoded.xsrftoken;
    _this.user = window.user;
    _this.user.stream = null;
    _this.peers = {};
    _this.mediaHandler = new __WEBPACK_IMPORTED_MODULE_1__webrtc_MediaHandler__["a" /* default */]();

    _this.setupPusher();

    _this.callTo = _this.callTo.bind(_assertThisInitialized(_this));
    _this.setupPusher = _this.setupPusher.bind(_assertThisInitialized(_this));
    _this.startPeer = _this.startPeer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VideoChat, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.mediaHandler.getPermissions().then(function (stream) {
        _this2.setState({
          hasMedia: true
        });

        _this2.user.stream = stream;

        try {
          _this2.myVideo.srcObject = stream;
        } catch (e) {
          _this2.myVideo.src = URL.createObjectURL(stream);
        }

        _this2.myVideo.play();
      });
    }
  }, {
    key: "setupPusher",
    value: function setupPusher() {
      var _this3 = this;

      //TODO: Pusher only one way: User->Admin
      __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a.logToConsole = true;
      this.pusher = new __WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a(APP_KEY, {
        authEndpoint: "/pusher/auth",
        cluster: "eu",
        auth: {
          params: this.user.name,
          headers: {
            "X-XSRF-Token": window.xsrfToken
          }
        }
      });
      this.channel = this.pusher.subscribe("presence-video-channel"); //presence: requires auth!

      this.channel.bind("client-signal-".concat(this.user.name), function (signal) {
        var peer = _this3.peers[signal.userName]; // if peer does not already exist, we got an incoming call

        if (peer === undefined) {
          _this3.setState({
            otherUserName: signal.userName
          });

          peer = _this3.startPeer(signal.userName, false);
        }

        peer.signal(signal.data);
      });
    }
  }, {
    key: "startPeer",
    value: function startPeer(userName) {
      var _this4 = this;

      var initiator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var wrtc = arguments.length > 2 ? arguments[2] : undefined;
      //TODO: initiator is always user!
      var peer = new __WEBPACK_IMPORTED_MODULE_3_simple_peer___default.a({
        initiator: initiator,
        stream: this.user.stream,
        trickle: false,
        wrtc: wrtc
      });
      peer.on("signal", function (data) {
        _this4.channel.trigger("client-signal-".concat(userName), {
          type: "signal",
          userName: _this4.user.name,
          data: data
        });
      });
      peer.on("stream", function (stream) {
        /*try {
          this.myVideo.srcObject = stream; //bug -> why is the stream reloading?
        } catch (e) {
          this.myVideo.src = URL.createObjectURL(stream);
          console.log(e);
        }
         this.myVideo.play();
        });*/
        _this4.userVideo.srcObject = stream; //bug -> why is the stream reloading?

        var playPromise = _this4.userVideo.play();

        if (playPromise !== null) {
          playPromise.catch(function () {
            _this4.userVideo.play();
          });
        }
      });
      peer.on("close", function () {
        var peer = _this4.peers[userName];

        if (peer !== undefined) {
          peer.destroy(err);
        }

        _this4.peers[userName] = undefined;
      });
      return peer;
    }
  }, {
    key: "callTo",
    value: function callTo(userName) {
      this.peers[userName] = this.startPeer(userName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_semantic_ui_react__["Header"], {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "Video Chat"), ["Admin"].map(function (userName) {
        return _this5.user.name !== userName ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
          key: userName,
          onClick: function onClick() {
            return _this5.callTo(userName);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, "Call ", userName) : null;
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "video-container",
        style: {
          width: "650px",
          height: "380px",
          margin: "0px auto",
          position: "relative",
          border: "3px solid #000"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        className: "my-video",
        ref: function ref(_ref) {
          _this5.myVideo = _ref;
        },
        style: {
          width: "130px",
          position: "absolute",
          left: "10px",
          bottom: "10px",
          border: "3px solid #0061ff",
          zIndex: "2"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        className: "user-video",
        ref: function ref(_ref2) {
          _this5.userVideo = _ref2;
        },
        style: {
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          top: "0",
          width: "100%",
          height: "100%",
          zIndex: "1"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }))));
    }
  }]);

  return VideoChat;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./pages/admin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProfileHeader__ = __webpack_require__("./components/ProfileHeader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_VideoChat__ = __webpack_require__("./components/VideoChat.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UserList__ = __webpack_require__("./components/UserList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_head__);

var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/pages/admin.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var adminPage =
/*#__PURE__*/
function (_Component) {
  _inherits(adminPage, _Component);

  function adminPage() {
    var _this;

    _classCallCheck(this, adminPage);

    _this = _possibleConstructorReturn(this, (adminPage.__proto__ || Object.getPrototypeOf(adminPage)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "handleItemClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref) {
        var name = _ref.name;
        return _this.setState({
          activeItem: name
        });
      }
    });
    _this.state = {
      errorMessage: "",
      activeItem: "home"
    };
    return _this;
  }

  _createClass(adminPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(window.location.origin, "/admin");

              case 2:
                response = _context.sent;

                if (response.data.success == false) {
                  Router.push("/profile");
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var activeItem = this.state.activeItem;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_ProfileHeader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Container"], {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Column, {
        width: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Menu"], {
        fluid: true,
        vertical: true,
        tabular: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Menu"].Item, {
        name: "home",
        active: activeItem === "home",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Menu"].Item, {
        name: "userlist",
        active: activeItem === "userlist",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Menu"].Item, {
        name: "videochat",
        active: activeItem === "videochat",
        onClick: this.handleItemClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Grid"].Column, {
        stretched: true,
        width: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.state.activeItem === "userlist" ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_UserList__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }) : null, this.state.activeItem === "videochat" ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_VideoChat__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }) : null, this.state.activeItem === "home" ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_semantic_ui_react__["Header"], {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Welcome to the Admin Page")) : null)))));
    }
  }]);

  return adminPage;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (adminPage);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")();

module.exports = routes;

/***/ }),

/***/ "./utils/CookieUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setCookie;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCookie;
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "HttpOnly;" + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

/***/ }),

/***/ "./utils/UserUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCurrentUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);


function getCurrentUser(currentUser) {
  var token = Object(__WEBPACK_IMPORTED_MODULE_0__CookieUtils__["a" /* getCookie */])('x-access-token');
  var decoded = __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token);
  currentUser = decoded.username;
  return currentUser;
}

/***/ }),

/***/ "./webrtc/MediaHandler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaHandler; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/admin.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jwt-decode":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pusher-js":
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "simple-peer":
/***/ (function(module, exports) {

module.exports = require("simple-peer");

/***/ }),

/***/ "wrtc":
/***/ (function(module, exports) {

module.exports = require("wrtc");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map