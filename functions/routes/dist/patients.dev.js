"use strict";

var express = require('express');

var firebase = require('firebase');

var _require = require('../firestore'),
    db = _require.db;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions'); // Get therapist info

exports.getAllTherapists = function (req, res) {
  ther.get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.send(data);
  });
};

exports.getAllPatients = function (req, res) {
  pats.get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    res.send(data);
  });
};

exports.getTherapist = function (req, res) {
  ther.doc(req.params.tid).get().then(function (doc) {
    res.send(doc.data());
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

exports.getSession = function (req, res) {
  sess.doc(req.params.sid).get().then(function (doc) {
    res.send(doc.data());
  });
};