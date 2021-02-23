"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEvent = exports.updateEvent = exports.addNewEvent = exports.getAllEvents = void 0;

var _api = _interopRequireDefault(require("app/services/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllEvents = function getAllEvents(uid) {
  return _api["default"].get('/u/' + uid + '/s');
};

exports.getAllEvents = getAllEvents;

var addNewEvent = function addNewEvent(event) {
  console.log('añadiendo nuewvo evento');
  return _api["default"].post('/s/new', {
    sessiondata: event
  });
};

exports.addNewEvent = addNewEvent;

var updateEvent = function updateEvent(event) {
  return _api["default"].post('/s/' + event.id, event);
};

exports.updateEvent = updateEvent;

var deleteEvent = function deleteEvent(id) {
  return _api["default"]["delete"]('/s/' + id);
};

exports.deleteEvent = deleteEvent;