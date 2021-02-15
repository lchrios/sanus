"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowRight = exports.ArrowForward = exports.HeroBtnWrapper = exports.HeroP = exports.HeroH1 = exports.HeroContent = exports.VideoBg = exports.HeroBg = exports.HeroContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    margin-left:8px;\n    font-size:28px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-left:8px;\n    font-size:28px;\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-top:32px;\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n    color:black;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 24px;\n    color:#fff;\n    font-family: 'Dancing Script', cursive;\n    font-size:24px;\n    text-align: center;\n    max-width: 600px;\n\n\n    @media screen and (max-width: 960px ) {\n        font-size: 24px;\n    };\n\n    @media screen and (max-width: 760px) {\n        font-size: 18px;\n    };\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    color:#fff;\n    font-family: 'Cantarell' sans-serif;\n    font-size:48px;\n    text-align:center;\n\n    @media screen and (max-width: 960px) {\n        font-size:40px;\n    };\n\n    @media screen and (max-width: 760px ) {\n        font-size: 32px;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    z-index:3;\n    max-width:500px;\n    position:absolute;\n    padding: 8px 24px;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height:100%;\n    -o-object-fit:cover;\n    object-fit: cover;\n    background: #232a24;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #0c0c0c;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    padding: 0 30px;\n    height: 800px;\n    position: relative;\n    z-index: 1;\n\n    :before {\n        content: ' ';\n        position:absolute;\n        top:0;\n        left:0;\n        right:0;\n        bottom:0;\n        background: linear-gradient(\n            180deg,\n            rgba(0,0,0,0.2) 0%, \n            rgba( 0, 0, 0, 0, 6 ) 100%\n        ), \n        \n        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent\n        100%);\n        z-index:2;\n    }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeroContainer = _styledComponents["default"].div(_templateObject());

exports.HeroContainer = HeroContainer;

var HeroBg = _styledComponents["default"].div(_templateObject2());

exports.HeroBg = HeroBg;

var VideoBg = _styledComponents["default"].video(_templateObject3());

exports.VideoBg = VideoBg;

var HeroContent = _styledComponents["default"].div(_templateObject4());

exports.HeroContent = HeroContent;

var HeroH1 = _styledComponents["default"].h1(_templateObject5());

exports.HeroH1 = HeroH1;

var HeroP = _styledComponents["default"].p(_templateObject6());

exports.HeroP = HeroP;

var HeroBtnWrapper = _styledComponents["default"].div(_templateObject7());

exports.HeroBtnWrapper = HeroBtnWrapper;
var ArrowForward = (0, _styledComponents["default"])(_md.MdArrowForward)(_templateObject8());
exports.ArrowForward = ArrowForward;
var ArrowRight = (0, _styledComponents["default"])(_md.MdKeyboardArrowRight)(_templateObject9());
exports.ArrowRight = ArrowRight;