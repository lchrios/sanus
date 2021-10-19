"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homeObjThree = exports.homeObjTwo = exports.homeObjOne = void 0;

var _schedule = _interopRequireDefault(require("../../../../../assets/images/schedule.svg"));

var _happyFace = _interopRequireDefault(require("../../../../../assets/images/happy-face-1.png"));

var _event = _interopRequireDefault(require("../../../../../assets/images/event-2.jpg"));

var _bg = _interopRequireDefault(require("../../../../../assets/images/bg-1.png"));

var _history = _interopRequireDefault(require("../../../../../history"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clickObjOne = function clickObjOne() {
  _history["default"].push('/therapists');
};

var homeObjOne = {
  id: 'inicio',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Psicología y nutrición profesional',
  headline: 'Escpecialistas online, confiables y accesibles',
  description: 'Conectate de forma privada con un profesional cuando lo necesites',
  buttonLabel: 'Conoce más',
  buttonClick: clickObjOne,
  imgStart: false,
  // img: imgOne,
  alt: 'healthy brain',
  dark: true,
  primary: true,
  darkText: false
};
exports.homeObjOne = homeObjOne;

var clickObjTwo = function clickObjTwo() {
  _history["default"].push('/therapists');
};

var homeObjTwo = {
  id: 'especialistas',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
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
  darkText: false
};
exports.homeObjTwo = homeObjTwo;

var clickObjThree = function clickObjThree() {
  _history["default"].push('/session/signup');
};

var homeObjThree = {
  id: 'registrarse',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Todo tu crecimiento personal, en línea',
  headline: 'Conectate online, crece emocionalmente',
  description: 'Tu crecimiento personal, paz mental y emocional, cuando la estés buscando.',
  buttonLabel: 'Comienza ahora',
  buttonClick: clickObjThree,
  imgStart: false,
  img: _happyFace["default"],
  alt: 'healthy brain',
  dark: true,
  primary: true,
  darkText: false
}; // export const blog1 = {
//     img: img1,
//     title: "Vive mejor",
//     body: "Trabaja en ti"
// }
// export const blog2 = {
//     img: img2,
//     title: "Aumenta tu felicidad",
//     body: "Toma sesiones online periodicamente"
// }
// export const blog3 = {
//     img: img3,
//     title: "Sientete bien",
//     body: "Pensar con claridad, pensar bien, para vivir bien."
// }
// export const blogs = [blog1, blog2, blog3]

exports.homeObjThree = homeObjThree;