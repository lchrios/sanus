"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEvent = exports.updateEvent = exports.addNewEvent = exports.getAllEvents = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllEvents = function getAllEvents(uid) {
  return _axios["default"].get('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/p/' + uid + '/s');
};

exports.getAllEvents = getAllEvents;

var addNewEvent = function addNewEvent(event) {
  console.log('añadiendo nuewvo evento');
  return _axios["default"].post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/new', event);
};

exports.addNewEvent = addNewEvent;

var updateEvent = function updateEvent(event) {
  return _axios["default"].post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/' + event.id, event);
};

exports.updateEvent = updateEvent;

var deleteEvent = function deleteEvent(id) {
  return _axios["default"]["delete"]('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/' + id);
};

exports.deleteEvent = deleteEvent;