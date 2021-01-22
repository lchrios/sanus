"use strict";

var _require = require('../firestore'),
    db = _require.db;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions'); // Get therapist info

exports.getAllTherapists = function (req, res) {
  ther.get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.ref);
    });
    res.send({
      data: data,
      dbrefs: refs
    });
  });
};

exports.getTherapist = function (req, res) {
  ther.doc(req.params.tid).get().then(function (doc) {
    res.send(doc.data());
  });
};

exports.getAllSessionsByTherapist = function (req, res) {
  sess.where('therapist_id', '==', req.params.pid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.ref);
    });
    res.send(data);
  });
};