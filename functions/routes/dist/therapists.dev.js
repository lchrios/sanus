"use strict";

var _require = require('../firestore'),
    db = _require.db;

var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var blogs = db.collection('blogs'); // Get therapist info

exports.getAllTherapists = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  ther.get().then(function (query) {
    var datas = [];
    query.forEach(function (doc) {
      datas.push(doc.data());
    });
    res.status(200).send(datas);
  })["catch"](function (error) {
    console.log('Error al obtener terapeutas!', error);
    return res.status(404).send(error);
  });
};

exports.getPatientsbyTherapists = function (req, res) {
  users.where("therapist", "==", req.params.tid).get().then(function (query) {
    var data = [];
    console.log('SIMON SIMON');
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    return res.status(200).send(data);
  })["catch"](function (error) {
    console.log('No fue posible obtener la información de usuarios asignados');
    return res.status(404).send(error);
  });
};

exports.newTherapist = function (req, res) {
  ther.set(req.body.data).then(function (doc) {
    console.log('Terapeuta agregado a la base de datos');
    return res.status(201).send(doc.id);
  })["catch"](function (error) {
    console.log('Error al crear terapeuta!', error);
    return res.status(404).send(error);
  });
};

exports.getAllTherapistsRefs = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  ther.get().then(function (query) {
    var datas = [];
    query.forEach(function (doc) {
      datas.push(doc.id);
    });
    res.status(200).send(datas);
  })["catch"](function (error) {
    console.log('Error al obtener terapeutas!', error);
    return res.status(404).send(error);
  });
};

exports.getTherapist = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  ther.doc(req.params.tid).get().then(function (doc) {
    res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error al obtener terapeuta!', error);
    return res.status(404).send(error);
  });
};

exports.getAllSessionsByTherapist = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*'); // * function exclusiva de terapeuta

  sess.where('therapist', '==', req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.ref);
    });
    res.status(200).send(data);
  })["catch"](function (error) {
    console.log('Error al obtener sesiones terapeuta!', error);
    return res.status(404).send(error);
  });
};