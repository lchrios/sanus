"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hosts = ['http://localhost:9999/sanus-5ce83/us-central1/api', // * local emulator dev host
'https://us-central1-sanus-5ce83.cloudfunctions.net/api' // * cloud api host
];

var _default = _axios["default"].create({
  baseURL: hosts[1],
  headers: {
    "Content-type": "application/json"
  }
});

exports["default"] = _default;