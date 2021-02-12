"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEvent = exports.updateEvent = exports.addNewEvent = exports.getAllEvents = void 0;

var _api = _interopRequireDefault(require("app/services/api"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAllEvents = function getAllEvents(uid) {
  return _api["default"].get('/u/' + uid + '/s');
};

exports.getAllEvents = getAllEvents;

var addNewEvent = function addNewEvent(event) {
  console.log('añadiendo nuevo evento');
  console.log(event);
  return _api["default"].post('/s/new', {
    sessiondata: _objectSpread({}, event)
  });
};

exports.addNewEvent = addNewEvent;

var updateEvent = function updateEvent(event) {
  return _api["default"].post('/s/' + event.id, {
    sessiondata: _objectSpread({}, event)
  });
};

exports.updateEvent = updateEvent;

var deleteEvent = function deleteEvent(id) {
  return _api["default"]["delete"]('/s/' + id);
};

exports.deleteEvent = deleteEvent;