"use strict";

var _require = require('../firestore'),
    db = _require.db;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions'); // Get therapist info

exports.getAllTherapists = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  ther.get().then(function (query) {
    var datas = [];
    query.forEach(function (doc) {
      datas.push(doc.data());
    });
    res.status(200).send(datas);
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
  });
};

exports.getTherapist = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  ther.doc(req.params.tid).get().then(function (doc) {
    res.status(200).send(doc.data());
  });
};

exports.getAllSessionsByTherapist = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.where('therapist_id', '==', req.params.pid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.ref);
    });
    res.status(200).send(data);
  });
};