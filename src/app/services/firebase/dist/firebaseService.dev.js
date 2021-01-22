"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTherapists = exports.getAllPatients = exports.getPatientsByTherapist = exports.getTherapistByPatient = exports.getTherapistData = exports.getPatientData = exports.resetTherapists = exports.resetPatients = void 0;

var _react = require("react");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firebase-firestore");

var _config = require("config.js");

var _TodoService = require("app/views/todo/TodoService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = {
  therapist: {
    data: {},
    dbref: null
  },
  patient: {
    data: {},
    dbref: null
  },
  pat_mult: {
    data: [],
    dbref: []
  },
  ther_mult: {
    data: [],
    dbref: []
  }
};

var setState = function setState() {
  for (var _len = arguments.length, state = new Array(_len), _key = 0; _key < _len; _key++) {
    state[_key] = arguments[_key];
  }

  state = _objectSpread({}, state);
};

if (!_app["default"].apps.length) {
  _app["default"].initializeApp(_config.firebaseConfig);

  var firestore = _app["default"].firestore();

  var storage = _app["default"].storage();

  var auth = _app["default"].auth();

  var patients_coll = firestore.collection('patients');
  var therapists_coll = firestore.collection('therapists');
  var roles_coll = firestore.collection('roles');
  var sessions_coll = firestore.collection('sessions');
}

var resetPatients = function resetPatients() {
  setState(_objectSpread({}, state, {
    pat_mult: {
      data: [],
      dbref: []
    }
  }));
};

exports.resetPatients = resetPatients;

var resetTherapists = function resetTherapists() {
  setState(_objectSpread({}, state, {
    ther_mult: {
      data: [],
      dbref: []
    }
  }));
};

exports.resetTherapists = resetTherapists;

var getPatientData = function getPatientData(docId) {
  //   generally it's better to use uid for docId
  patients_coll.doc(docId).get().then(function (doc) {
    setState(_objectSpread({}, state, {
      patient: {
        data: doc.data(),
        dbref: doc.ref
      }
    }));
  });
  return state.patient;
};

exports.getPatientData = getPatientData;

var getTherapistData = function getTherapistData(docId) {
  //   generally it's better to use uid for docId
  therapists_coll.doc(docId).get().then(function (doc) {
    setState(_objectSpread({}, state, {
      therapist: {
        data: doc.data(),
        dbref: doc.ref
      }
    }));
  });
  return state.therapist;
};

exports.getTherapistData = getTherapistData;

var getTherapistByPatient = function getTherapistByPatient(patId) {
  patients_coll.doc(patId).get().then(function (doc) {
    return doc.data().therapist.get().then(function (docter) {
      return setState(_objectSpread({}, state, {
        therapist: {
          data: docter.data(),
          dbref: docter.ref
        }
      }));
    });
  });
  return state.therapist;
};

exports.getTherapistByPatient = getTherapistByPatient;

var getPatientsByTherapist = function getPatientsByTherapist(therId) {
  resetPatients();
  therapists_coll.doc(therId).get().then(function (doc) {
    setState(_objectSpread({}, state, {
      pat_mult: _objectSpread({}, state.pat_mult, {
        dbref: doc.data().patients
      })
    }));
    state.pat_mult.dbref.forEach(function (pat) {
      pat.get().then(function (patData) {
        state.pat_mult.data.push(patData.data());
      });
    });
  });
  return state.pat_mult;
};

exports.getPatientsByTherapist = getPatientsByTherapist;

var getAllPatients = function getAllPatients() {
  resetPatients();
  patients_coll.get().then(function (docList) {
    return docList.forEach(function (doc) {
      state.pat_mult.data.push(doc.data());
      state.pat_mult.dbref.push(doc.ref);
    });
  });
  return state.pat_mult;
};

exports.getAllPatients = getAllPatients;

var getAllTherapists = function getAllTherapists() {
  resetTherapists();
  therapists_coll.get().then(function (docList) {
    docList.forEach(function (doc) {
      state.ther_mult.data.push(doc.data());
      state.ther_mult.dbref.push(doc.ref);
    });
  });
  return state.ther_mult;
};

exports.getAllTherapists = getAllTherapists;