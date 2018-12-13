webpackHotUpdate("static/development/pages/passwordchange.js",{

/***/ "./pages/passwordchange.js":
/*!*********************************!*\
  !*** ./pages/passwordchange.js ***!
  \*********************************/
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);


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









var PwChange =
/*#__PURE__*/
function (_Component) {
  _inherits(PwChange, _Component);

  function PwChange() {
    var _this;

    _classCallCheck(this, PwChange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PwChange).call(this));
    _this.state = {
      errorMessage: "",
      password: "",
      confirmPassword: "",
      username: ""
    };

    _this.confirmP = function (e) {
      return _this._confirmP();
    };

    return _this;
  } //decode token in link to receive username


  _createClass(PwChange, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var token = window.location.pathname.split("/");
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(token[2]);
      this.setState({
        username: decoded.username
      });
    } //send new password to server

  }, {
    key: "_confirmP",
    value: function () {
      var _confirmP2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.state.password == this.state.confirmPassword)) {
                  _context.next = 17;
                  break;
                }

                formData = new FormData();
                formData.append("password", this.state.password);
                formData.append("username", this.state.username);
                this.setState({
                  loading: true
                });
                _context.prev = 5;
                _context.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(window.location.origin + "/changepw", formData);

              case 8:
                res = _context.sent;

                if (res.data.success) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()("Congratulations!", "Your password has been changed!", "success");
                  _routes__WEBPACK_IMPORTED_MODULE_2__["Router"].push("/login");
                } else {
                  this.setState({
                    errorMessage: res.data.message
                  });
                }

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);

              case 15:
                _context.next = 18;
                break;

              case 17:
                this.setState({
                  errorMessage: "Passwords are not the same!"
                });

              case 18:
                this.setState({
                  loading: false
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12]]);
      }));

      return function _confirmP() {
        return _confirmP2.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n        body {\n          background: #e6e6e6;\n        }\n      "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        style: {
          maxWidth: "450px",
          margin: "auto",
          marginTop: "50px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h1",
        textAlign: "center",
        style: {
          color: "#2985d0",
          marginTop: "10px"
        }
      }, "Password Reset"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        as: "h3",
        textAlign: "center",
        style: {
          marginBottom: 20
        }
      }, "Please enter your username and select a new password and confirm it", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Popup"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          name: "question circle outline",
          style: {
            marginTop: "-17px"
          }
        }),
        content: "The password must contain at least 1 upper case letter, 1 lower case letter, 1 digit, 1 special character and minimum eight in length!",
        hideOnScroll: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.confirmP,
        error: this.state.errorMessage
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        icon: "lock",
        iconPosition: "left",
        type: "password",
        placeholder: "Password",
        name: "password",
        value: this.state.password,
        onChange: function onChange(event) {
          return _this2.setState({
            password: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
        width: "sixteen",
        icon: "lock",
        iconPosition: "left",
        type: "password",
        placeholder: "Confirm Password",
        name: "confirmPassword",
        value: this.state.confirmPassword,
        onChange: function onChange(event) {
          return _this2.setState({
            confirmPassword: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
        error: true,
        header: "Oops!",
        content: this.state.errorMessage
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        fluid: true,
        icon: true,
        size: "large",
        color: "blue",
        loading: this.state.loading
      }, "Confirm")))));
    }
  }]);

  return PwChange;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PwChange);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/passwordchange")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=passwordchange.js.8fecd034d914d5cf3d72.hot-update.js.map