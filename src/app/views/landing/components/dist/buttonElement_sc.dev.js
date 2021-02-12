"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactScroll = require("react-scroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-radius:50px;\n    background: ", ";\n\n    white-space:nowrap;\n    padding: ", ";\n\n    color: ", ";\n\n    font-size: ", ";\n\n    outline:none;\n    border:none;\n    cursor:pointer;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    transition: all 0.9 ease-in-out;\n\n    &:hover {\n        \n        background: ", ";\n        color: ", ";\n        transition: all 0.9 ease-in-out;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject(), function (_ref) {
  var primary = _ref.primary;
  return primary ? '#00009C' : '#010606';
}, function (_ref2) {
  var big = _ref2.big;
  return big ? '14px 48px' : '12px 30px';
}, function (_ref3) {
  var dark = _ref3.dark;
  return dark ? 'white' : 'black';
}, function (_ref4) {
  var fontbig = _ref4.fontbig;
  return fontbig ? '20px' : '16px';
}, function (_ref5) {
  var primary = _ref5.primary;
  return primary ? 'white' : '#00009C';
}, function (_ref6) {
  var dark = _ref6.dark;
  return dark ? 'black' : 'white';
});
exports.Button = Button;