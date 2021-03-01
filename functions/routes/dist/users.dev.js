"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getAllUsers = function (req, res) {
  users.get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    console.log('Datos de usuarios obtenidos correctamente!');
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.error('Error obteniendo los usuarios', error);
    return res.status(404).send(error);
  });
};

exports.getUser = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    console.log('Datos de usuario obtenidos correctamente!');
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.error('Error obteniendo los datos de usuario', error);
    return res.status(404).send(error);
  });
};

exports.getTherapistByUser = function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  users.doc(req.params.uid).get().then(function (doc) {
    var ther_id = doc.data().therapist;

    if (ther_id == null) {
      console.log("No hay terapeuta");
      return res.status(204).send({});
    } else {
      ther.doc(ther_id).get().then(function (docther) {
        console.log('Datos de terapeuta obtenidos correctamente!');
        return res.status(200).send({
          id: ther_id,
          data: docther.data()
        });
      })["catch"](function (error) {
        console.error('Error obteniendo los datos del terapeuta', error);
        return res.status(404).send(error);
      });
    }
  });
};

exports.getAllSessionsByUser = function (req, res) {
  sess.where('patient', '==', req.params.uid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    console.log('Datos de sesiones obtenidos correctamente!');
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.error('Error obteniendo los datos de sesiones', error);
    return res.status(404).send(error);
  });
};

exports.assignTherapist = function (req, res) {
  console.log("Reasignando terapeuta ".concat(req.params.tid));
  users.doc(req.params.uid).update({
    therapist: req.params.tid
  }).then(function () {
    console.log('Terapeuta asignado correctamente');
    return res.status(201);
  })["catch"](function (error) {
    console.error('Error actualizando el terapeuta del usuario', error);
    return res.status(404).send(error);
  });
};