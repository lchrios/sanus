"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useAuth = _interopRequireDefault(require("app/hooks/useAuth"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hosts = ['http://localhost:9999/iknelia-3cd8e/us-central1/api', // * local emulator dev host
'https://us-central1-iknelia-3cd8e.cloudfunctions.net/api' // * cloud api host
];

var _default = _axios["default"].create({
  baseURL: hosts[0],
  headers: {
    "Content-type": "application/json"
  }
});

exports["default"] = _default;