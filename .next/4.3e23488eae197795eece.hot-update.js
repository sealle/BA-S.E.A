webpackHotUpdate(4,{

/***/ "./components/ProfileHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_CookieUtils__ = __webpack_require__("./utils/CookieUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__ = __webpack_require__("./utils/UserUtils.js");
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
    Object.defineProperty(_assertThisInitialized(_this), "userProfile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        __WEBPACK_IMPORTED_MODULE_3__routes__["Router"].pushRoute("/userdata");
      }
    });

    _this.logout = function (e) {
      return _this._logout();
    };

    _this.currentUser = Object(__WEBPACK_IMPORTED_MODULE_4__utils_UserUtils__["a" /* default */])();
    return _this;
  }

  _createClass(ProfileHeader, [{
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
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */], {
        pointing: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        name: "home",
        onClick: this.profileBack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        name: "home",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        name: "view profile",
        onClick: this.userProfile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        name: "logout",
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["f" /* Menu */].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["e" /* Icon */], {
        name: "user",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.currentUser)))));
    }
  }]);

  return ProfileHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ })

})
//# sourceMappingURL=4.3e23488eae197795eece.hot-update.js.map