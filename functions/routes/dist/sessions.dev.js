"use strict";

var firebase = require('firebase');

var db = firebase.firestore();
var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getSession = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.doc(req.params.sid).get().then(function (doc) {
    res.status(200).send(doc.data());
  });
};

exports.newSession = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.add(req.body).then(function (doc) {
    sess.doc(doc.id).set({
      id: doc.id
    }, {
      merge: true
    }); // update patient sessions

    var patref = pats.doc(req.body.patient);
    patref.get().then(function (patdoc) {
      var sessdata = patdoc.data().sessions;
      sessdata.push(doc.id);
      patref.update({
        sessions: sessdata
      });
    });
    var terref = pats.doc(req.body.therapist);
    terref.get().then(function (terdoc) {
      var data = terdoc.data().sessions;
      data.push(doc.id);
      patref.update({
        sessions: data
      });
    });
  });
};

exports.updateSession = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.doc(req.params.sid).set(req.body).then(function () {
    console.log("Sesion actualizada con exito!");
  });
};

exports.deleteSession = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.doc(req.params.sid)["delete"]().then(function () {
    console.log("Sesion cancelada con exito!");
  });
};