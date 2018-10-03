webpackHotUpdate(4,{

/***/ "./pages/login.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_HomeHeader__ = __webpack_require__("./components/HomeHeader.js");

var _jsxFileName = "/Users/SebastianAllemann/BA-S.E.A/pages/login.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    _this.state = {
      password: "",
      username: "",
      errorMessage: "",
      errors: "",
      loading: false
    };

    _this.login = function (e) {
      return _this._login();
    };

    return _this;
  }

  _createClass(Login, [{
    key: "_login",
    value: function () {
      var _login2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var formData, response, res;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //let {username} = this.state;
                //let {password} = this.state;
                formData = new FormData();
                formData.append("username", this.state.username);
                formData.append("password", this.state.password);
                this.setState({
                  loading: true
                });
                _context.prev = 4;
                _context.next = 7;
                return __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default()("/authenticate", {
                  method: "POST",
                  body: formData
                }).then(function (res) {
                  if (res.status >= 400) {
                    return new Error("Bad response from server");
                  }

                  return res.json();
                }).catch(function (err) {
                  console.log(err);
                });

              case 7:
                response = _context.sent;
                _context.next = 10;
                return __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post(window.location.origin + "/authenticate", this.state);

              case 10:
                res = _context.sent;

                if (res.data.success) {
                  Object(__WEBPACK_IMPORTED_MODULE_7__utils_CookieUtils__["b" /* setCookie */])("x-access-token", res.data.token);
                  __WEBPACK_IMPORTED_MODULE_2__routes__["Router"].push("/profile");
                }

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](4);
                this.setState({
                  errorMessage: _context.t0.response.data.message
                });

              case 17:
                this.setState({
                  loading: false
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 14]]);
      }));

      return function _login() {
        return _login2.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_HomeHeader__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Header */], {
        as: "h1",
        textAlign: "center",
        style: {
          marginTop: 60
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Welcome"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["d" /* Header */], {
        as: "h3",
        textAlign: "center",
        style: {
          marginBottom: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Please login or register"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */], {
        onSubmit: this.login,
        error: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, " Username "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "Username",
        name: "username",
        value: this.state.username,
        onChange: function onChange(event) {
          return _this2.setState({
            username: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["c" /* Form */].Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "Password"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "password",
        placeholder: "Password",
        name: "password",
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["g" /* Message */], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Login"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__routes__["Link"], {
        route: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["a" /* Button */], {
        primary: true,
        floated: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Register")))));
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/login")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.0facfccc1284fc5f8977.hot-update.js.map