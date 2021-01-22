"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEvent = exports.updateEvent = exports.addNewEvent = exports.getAllEvents = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllEvents = function getAllEvents() {
  return _axios["default"].get('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/p/:pid/s');
};

exports.getAllEvents = getAllEvents;

var addNewEvent = function addNewEvent(event) {
  return _axios["default"].post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/new', event);
};

exports.addNewEvent = addNewEvent;

var updateEvent = function updateEvent(event) {
  return _axios["default"].post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/:sid', event);
};

exports.updateEvent = updateEvent;

var deleteEvent = function deleteEvent(event) {
  return _axios["default"].post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/:sid');
};

exports.deleteEvent = deleteEvent;