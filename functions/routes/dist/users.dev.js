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
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};

exports.getAllUsers = function (req, res) {
  users.get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};

exports.getUser = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    res.status(200).send(doc.data());
  });
};

exports.getTherapistByUser = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    var ther_id = doc.data().therapist;
    ther.doc(ther_id).get().then(function (docter) {
      res.status(200).send(docter.data());
    });
  });
};

exports.getTherapistRefByUser = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    var ther_id = doc.data().therapist;
    ther.doc(ther_id).get().then(function (docter) {
      res.status(200).send(docter.id.toString());
    });
  });
};

exports.getAllSessionsByUser = function (req, res) {
  sess.where('patient', '==', req.params.uid).get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.status(200).send(data);
  });
};