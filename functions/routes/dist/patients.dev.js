"use strict";

var _require = require('../firestore.js'),
    db = _require.db;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getAllPatients = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  pats.get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};

exports.getPatient = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  pats.doc(req.params.pid).get().then(function (doc) {
    res.status(200).send(doc.data());
  });
};

exports.getTherapistByPatient = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  pats.doc(req.params.pid).get().then(function (doc) {
    var ther_id = doc.data().therapist;
    ther.doc(ther_id).get().then(function (docter) {
      res.status(200).send(docter.data());
    });
  });
};

exports.getTherapistRefByPatient = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  pats.doc(req.params.pid).get().then(function (doc) {
    var ther_id = doc.data().therapist;
    ther.doc(ther_id).get().then(function (docter) {
      res.status(200).send(docter.id);
    });
  });
};

exports.getAllSessionsByPatient = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.where('patient_id', '==', req.params.pid).get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};