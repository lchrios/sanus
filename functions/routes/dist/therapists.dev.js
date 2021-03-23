"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var blogs = db.collection('blogs');
var schedules = db.collection("schedules"); // * Get therapist info

exports.getAllTherapists = function (req, res) {
  ther.get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.log('Error al obtener terapeutas!', error);
    return res.status(404).send(error);
  });
};

exports.getPatientsbyTherapist = function (req, res) {
  users.where("therapist", "==", req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.log('No fue posible obtener la información de usuarios asignados');
    return res.status(404).send(error);
  });
};

exports.getTherapist = function (req, res) {
  ther.doc(req.params.tid).get().then(function (doc) {
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error al obtener terapeuta!', error);
    return res.status(404).send(error);
  });
};

exports.getSchedule = function (req, res) {
  schedules.doc(req.params.tid).get().then(function (doc) {
    return res.status(200).send(_objectSpread({}, doc.data()));
  })["catch"](function (er) {
    return res.status(400).send(er);
  });
};

exports.setSchedule = function (req, res) {
  schedules.doc(req.params.tid).set({
    schedule: req.body.schedule,
    options: req.body.options
  }).then(function () {
    return res.status(201).send({
      result: true,
      message: "Schedule actualizada correctamente"
    });
  })["catch"](function (er) {
    return res.status(400).send(er);
  });
};

exports.getAllSessionsByTherapist = function (req, res) {
  sess.where('therapist', '==', req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id);
    });
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.log('Error al obtener sesiones terapeuta!', error);
    return res.status(404).send(error);
  });
}; // * Obtener notas del terapeuta


exports.getNotesByTherapist = function (req, res) {
  console.log("obteniendo notas");
  ther.doc(req.params.tid).get().then(function (doc) {
    var notes_ref = doc.ref.collection("notes");
    notes_ref.get().then(function (query) {
      var data = [];
      var refs = [];
      query.forEach(function (doc) {
        data.push(doc.data());
        refs.push(doc.id.toString());
      });
      return res.status(200).send({
        id: refs,
        data: data
      });
    })["catch"](function (error) {
      console.error("Error obteniendo las notas del terapeuta", error);
      return res.status(404).send(error);
    });
  })["catch"](function (error) {
    console.error("Error obteniendo los datos del terapeuta", error);
    return res.status(404).send(error);
  });
}; //** Crear una nueva nota */


exports.newNote = function (req, res) {
  console.log('Creando nota');
};