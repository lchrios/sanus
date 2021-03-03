"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _authRoles = require("../../auth/authRoles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var EditBlogForm = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("./components/blogs/EditBlogForm"));
  });
});

var TherapistHome = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./TherapistHome'));
  });
});

var TherapistBlogs = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./TherapistBlogs'));
  });
});

var BlogEntryForm = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/blogs/BlogEntryForm'));
  });
});

var TherapistCalendar = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./TherapistCalendar'));
  });
});

var PatientsList = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./PatientList'));
  });
});

var CompletedSessions = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./TherapistsSessionsHistory'));
  });
});

var Comments = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./CommentsApp'));
  });
});

var NotesApp = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./components/notes/NotesApp'));
  });
});

var Schedule = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./TherapistSchedule'));
  });
});

var therapistRoutes = [{
  path: "/:tid/dashboard",
  component: TherapistHome,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/appointments",
  component: TherapistCalendar,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/myblogs",
  component: TherapistBlogs,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/newblog",
  component: BlogEntryForm,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/patients",
  component: PatientsList,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/editblog/",
  component: EditBlogForm,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/completedApp",
  component: CompletedSessions,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/comments",
  component: Comments,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/notes",
  component: NotesApp,
  exact: false,
  auth: _authRoles.authRoles.therapist
}, {
  path: "/:tid/schedule",
  component: Schedule,
  exact: false,
  auth: _authRoles.authRoles.therapist
}];
var _default = therapistRoutes;
exports["default"] = _default;