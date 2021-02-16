"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var blogs = db.collection('blogs'); // * Get therapist info

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
    res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error al obtener terapeuta!', error);
    return res.status(404).send(error);
  });
};

exports.getAllSessionsByTherapist = function (req, res) {
  sess.where('therapist', '==', req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.ref);
    });
    res.status(200).send({
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
};