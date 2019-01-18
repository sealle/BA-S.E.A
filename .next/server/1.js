exports.ids = [1];
exports.modules = {

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


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





var UserData =
/*#__PURE__*/
function (_Component) {
  _inherits(UserData, _Component);

  function UserData() {
    var _this;

    _classCallCheck(this, UserData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserData).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "editAddress", function () {
      _this.setState({
        inAddressEdit: true,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "editEmail", function () {
      _this.setState({
        inAddressEdit: false,
        inEmailEdit: true,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "editMobile", function () {
      _this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: true,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "editCompName", function () {
      _this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: true,
        inCompAddressEdit: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "editCompAddress", function () {
      _this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "exitEditMode", function () {
      _this.setState({
        inAddressEdit: false,
        inEmailEdit: false,
        inMobileEdit: false,
        inCompNameEdit: false,
        inCompAddressEdit: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveAddress",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = new FormData();
              formData.append("street", _this.state.street);
              formData.append("houseNr", _this.state.houseNr);
              formData.append("postCode", _this.state.postCode);
              formData.append("placeOfRes", _this.state.placeOfRes);
              formData.append("username", _this.state.users[0].username);
              console.log(_this.state.users[0].username, _this.state.street);
              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.location.origin + "/editData", formData);

            case 9:
              response = _context.sent;

              if (response.data.success) {
                _this.exitEditMode();
              }

              window.location.href = "/profile";

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveEmail",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var email, userName, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = _this.state.email;
              userName = _this.state.users[0].username;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.location.origin + "/editData", {
                email: email,
                userName: userName
              });

            case 4:
              response = _context2.sent;

              if (response.data.success) {
                _this.exitEditMode();
              }

              window.location.href = "/profile";

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveMobile",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var mobNr, userName, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              mobNr = _this.state.mobNr;
              userName = _this.state.users[0].username;
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.location.origin + "/editData", {
                mobNr: mobNr,
                userName: userName
              });

            case 4:
              response = _context3.sent;

              if (response.data.success) {
                _this.exitEditMode();
              }

              window.location.href = "/profile";

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveCompName",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var compName, userName, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              compName = _this.state.compName;
              userName = _this.state.users[0].username;
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.location.origin + "/editData", {
                compName: compName,
                userName: userName
              });

            case 4:
              response = _context4.sent;

              if (response.data.success) {
                _this.exitEditMode();
              }

              window.location.href = "/profile";

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveCompAddress",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var formData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              formData = new FormData();
              formData.append("businessAd", _this.state.businessAd);
              formData.append("compHouseNr", _this.state.compHouseNr);
              formData.append("compPostCode", _this.state.compPostCode);
              formData.append("residence", _this.state.residence);
              formData.append("username", _this.state.users[0].username);
              _context5.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.location.origin + "/editData", formData);

            case 8:
              response = _context5.sent;

              if (response.data.success) {
                _this.exitEditMode();
              }

              window.location.href = "/profile";

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAccordionClick", function (e, titleProps) {
      var index = titleProps.index;
      var activeIndex = _this.state.activeIndex;
      var newIndex = activeIndex === index ? -1 : index;

      _this.setState({
        activeIndex: newIndex
      });
    });

    _this.state = {
      users: [],
      beneficialOwners: [],
      inAddressEdit: false,
      inEmailEdit: false,
      inMobileEdit: false,
      inCompNameEdit: false,
      inCompAddressEdit: false
    };
    return _this;
  } //get user data from server


  _createClass(UserData, [{
    key: "componentWillMount",
    value: function () {
      var _componentWillMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(window.location.origin + "/users");

              case 3:
                response = _context6.sent;

                if (response.data.success) {
                  this.setState({
                    users: response.data.userData,
                    beneficialOwners: response.data.beneficialOwners,
                    isComp: response.data.isComp
                  });
                }

                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      return function componentWillMount() {
        return _componentWillMount.apply(this, arguments);
      };
    }() //edit address

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeIndex = this.state.activeIndex;
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
        })), _this2.state.beneficialOwners.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Title, {
          active: activeIndex === 0,
          index: 0,
          onClick: _this2.handleAccordionClick,
          style: {
            fontWeight: "bold"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "dropdown"
        }), "Beneficial Owners of the Assets"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Content, {
          active: activeIndex === 0
        }, _this2.state.beneficialOwners.map(function (beneficialOwner) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            fluid: true,
            label: "First Name",
            value: beneficialOwner.ownerName
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            fluid: true,
            label: "Last Name",
            value: beneficialOwner.ownerLastName
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            width: "eleven",
            fluid: true,
            label: "Street",
            value: beneficialOwner.ownerStreet
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            width: "five",
            fluid: true,
            label: "House Number",
            value: beneficialOwner.ownerHouseNr
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            width: "six",
            fluid: true,
            label: "Postal Code",
            value: beneficialOwner.ownerPostCode
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            width: "ten",
            fluid: true,
            label: "Place of Residenz",
            value: beneficialOwner.ownerPlaceOfRes
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            widths: "equal"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
            readOnly: true,
            fluid: true,
            label: "Date of Birth",
            value: beneficialOwner.ownerDateOfBirth
          })));
        }))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          style: {
            fontWeight: "bold",
            display: "inline-block",
            paddingRight: "5px"
          }
        }, "Identity Card"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
          trigger: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            name: "question circle outline"
          }),
          content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Note: If you receive a new identity card, you will need to re-register and redo the identification process!")),
          hideOnScroll: true
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
          widths: "equal",
          style: {
            margin: "0px auto"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../static/".concat(_this2.state.users[0].ID1),
          target: "_blank",
          style: {
            width: "50%"
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "img-responsive",
          src: "../static/".concat(_this2.state.users[0].ID1),
          style: {
            width: "200px",
            height: "113px"
          }
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "../static/".concat(_this2.state.users[0].ID2),
          target: "_blank"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "img-responsive",
          src: "../static/".concat(_this2.state.users[0].ID2),
          style: {
            width: "200px",
            height: "113px"
          }
        }))), _this2.state.users[0].isComp == "1" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
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
          href: "../static/".concat(_this2.state.users[0].doc1),
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
          href: "../static/".concat(_this2.state.users[0].doc2),
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : this.state.users[0].isComp == "1" && this.state.inCompNameEdit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : this.state.users[0].isComp == "1" && this.state.inCompAddressEdit ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], null, "Save"))) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          fontWeight: "bold",
          textAlign: "center"
        }
      }, "Request re-registration!"))));
    }
  }]);

  return UserData;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

};;
//# sourceMappingURL=1.js.map