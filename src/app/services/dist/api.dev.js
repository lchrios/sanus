"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hosts = ['http://localhost:9999/', 'https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/'];

var _default = _axios["default"].create({
  baseURL: hosts[0]
});

exports["default"] = _default;