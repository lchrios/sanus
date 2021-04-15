"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBtnLink = exports.NavBtn = exports.NavLinks = exports.NavItem = exports.NavMenu = exports.MobileIcon = exports.NavLogo = exports.NavbarContainer = exports.Nav = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 50px;\nbackground: #AFE3ED;\nwhite-space:nowrap;\npadding: 10px 22px;\ncolor: #010606;\nfont-size: 16px;\noutline:none;\nborder:none;\ncursor:pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration:none;\n\n&:hover {\n    transition: all 0.2s ease-in-out;\n    background: white;\n    color: #010606;\n};\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ndisplay:flex;\nalign-items:center;\n\n@media screen and (max-widhth: 960px) {\ndisplay:none;\n};\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\ncolor:white;\ndisplay:flex;\nalign-items:center;\ntext-decoration:none;\npadding:0 1rem;\nheight: 100%;\ncursor: pointer;\n\n    &:active {\n     border-bottom:3px solid #01bf71\n }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n height:80px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ncolor:white;\ndisplay:flex;\nalign-items:center;\nlist-style:none;\ntext-align:center;\nmargin-right:-22px;\n\n \n\n @media screen and (max-width:960px) {\n     display:none;\n }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\ndisplay:none;\n\n @media screen and (max-width: 960px) {\n     color:white;\n     display:block;\n     position:absolute;\n     top:0;\n     right:0;\n     transform: translate(-100%, 60%);\n     font-size:1.8rem;\n     cursor:pointer;\n\n }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n color:white;\n\n justify-self: flex-start;\n cursor:pointer;\n font-family: 'Dancing Script', cursive;\n font-size:36px;\n display:flex;\n align-items:center;\n margin-left:24px;\n font-weight:bold;\n text-decoration:none;\n \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n \n display: flex; \n justify-content:space-between;\n height:80px;\n z-index:1;\n width:100%;\n padding:0 24px;\n max-width:1100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n background: ", ";\n height:80px;\n margin-top: -80px;\n display:flex;\n justify-content:center;\n align-items: center;\n font-size: 1rem;\n position: sticky;\n top: 0;\n z-index:10;\n\n @media screen and (max-width:960px) {\n     transition: 0.8s all ease;\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject(), function (_ref) {
  var scrollNav = _ref.scrollNav;
  return scrollNav ? '#1C35C3' : 'transparent';
});

exports.Nav = Nav;

var NavbarContainer = _styledComponents["default"].div(_templateObject2());

exports.NavbarContainer = NavbarContainer;
var NavLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.NavLogo = NavLogo;

var MobileIcon = _styledComponents["default"].div(_templateObject4());

exports.MobileIcon = MobileIcon;

var NavMenu = _styledComponents["default"].ul(_templateObject5());

exports.NavMenu = NavMenu;

var NavItem = _styledComponents["default"].li(_templateObject6());

exports.NavItem = NavItem;
var NavLinks = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject7());
exports.NavLinks = NavLinks;

var NavBtn = _styledComponents["default"].nav(_templateObject8());

exports.NavBtn = NavBtn;
var NavBtnLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject9());
exports.NavBtnLink = NavBtnLink;