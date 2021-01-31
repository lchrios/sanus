"use strict";

var _require = require('../firestore'),
    db = _require.db;

var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getAllUsers = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  users.get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};

exports.getUser = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  users.doc(req.params.pid).get().then(function (doc) {
    res.status(200).send(doc.data());
  });
};

exports.getTherapistByUser = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  users.doc(req.params.pid).get().then(function (doc) {
    var ther_id = doc.data().therapist;
    ther.doc(ther_id).get().then(function (docter) {
      res.status(200).send(docter.data());
    });
  });
};

exports.getTherapistRefByUser = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  users.doc(req.params.pid).get().then(function (doc) {
    var ther_id = doc.data().therapist;
    ther.doc(ther_id).get().then(function (docter) {
      res.status(200).send(docter.id.toString());
    });
  });
};

exports.getAllSessionsByUser = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.where('patient', '==', req.params.pid).get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};