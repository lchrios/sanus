"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogs = exports.blog3 = exports.blog2 = exports.blog1 = exports.homeObjThree = exports.homeObjTwo = exports.homeObjOne = void 0;

var _videoIcon = _interopRequireDefault(require("../../../../../assets/images/videoIcon.svg"));

var _schedule = _interopRequireDefault(require("../../../../../assets/images/schedule.svg"));

var _icons = require("@material-ui/icons");

var _history = _interopRequireDefault(require("../../../../../history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clickObjOne = function clickObjOne() {
  _history["default"].push('/psychologists');
};

var homeObjOne = {
  id: 'inicio',
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Psicología profesional',
  headline: 'Psicologos online, confiables y accesibles',
  description: 'Conectate de forma privada con un psicologo profesional cuando lo necesites',
  buttonLabel: 'Conoce más',
  buttonClick: clickObjOne,
  imgStart: true,
  img: _videoIcon["default"],
  alt: 'healthy brain',
  dark: true,
  primary: true,
  darkText: false
};
exports.homeObjOne = homeObjOne;

var clickObjTwo = function clickObjTwo() {
  _history["default"].push('/psychologists');
};

var homeObjTwo = {
  id: 'especialistas',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Escoge con quien te sientas comodo',
  headline: 'Selecciona cualquiera de nuestros profesionales, y cambia tu vida, ahora.',
  description: 'Comienza a trabajar en tu salud mental, ahora mismo.',
  buttonLabel: 'Conócelos ahora',
  buttonClick: clickObjTwo,
  imgStart: false,
  img: _schedule["default"],
  alt: 'healthy brain',
  dark: true,
  primary: true,
  darkText: true
};
exports.homeObjTwo = homeObjTwo;

var clickObjThree = function clickObjThree() {
  _history["default"].push('/session/signup');
};

var homeObjThree = {
  id: 'registrarse',
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Todo tu crecimiento personal, en línea',
  headline: 'Conectate online, crece emocionalmente',
  description: 'Tu crecimiento personal, paz mental y emocional, cuando la estés buscando.',
  buttonLabel: 'Comienza ahora',
  buttonClick: clickObjThree,
  imgStart: false,
  img: _schedule["default"],
  alt: 'healthy brain',
  dark: true,
  primary: true,
  darkText: false
};
exports.homeObjThree = homeObjThree;
var blog1 = {
  img: _schedule["default"],
  title: "Vive mejor",
  body: "Trabaja en ti"
};
exports.blog1 = blog1;
var blog2 = {
  img: _schedule["default"],
  title: "Aumenta tu felicidad",
  body: "Toma sesiones online periodicamente"
};
exports.blog2 = blog2;
var blog3 = {
  img: _schedule["default"],
  title: "Sientete bien",
  body: "Pensar con claridad, pensar bien, para vivir bien."
};
exports.blog3 = blog3;
var blogs = [blog1, blog2, blog3];
exports.blogs = blogs;