"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FirebaseLogin = _interopRequireDefault(require("./login/FirebaseLogin"));

var _NotFound = _interopRequireDefault(require("./NotFound"));

var _ForgotPassword = _interopRequireDefault(require("./ForgotPassword"));

var _FirebaseRegister = _interopRequireDefault(require("./register/FirebaseRegister"));

var _UserDataForm = _interopRequireDefault(require("./register/UserDataForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sessionRoutes = [{
  path: '/session/signup',
  component: _FirebaseRegister["default"]
}, {
  path: '/session/register',
  component: _UserDataForm["default"]
}, {
  path: '/session/signin',
  component: _FirebaseLogin["default"]
}, {
  path: '/session/forgot-password',
  component: _ForgotPassword["default"]
}, {
  path: '/session/404',
  component: _NotFound["default"]
}];
var _default = sessionRoutes;
exports["default"] = _default;