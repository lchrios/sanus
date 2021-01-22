"use strict";

var _require = require('../firestore'),
    db = _require.db;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getAllPatients = function (req, res) {
  pats.get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.send(data);
  });
};

exports.getPatient = function (req, res) {
  pats.doc(req.params.pid).get().then(function (doc) {
    res.send(doc.data());
  });
};

exports.getAllSessionsByPatient = function (req, res) {
  sess.where('patient_id', '==', req.params.pid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.ref);
    });
    res.send(data);
  });
};