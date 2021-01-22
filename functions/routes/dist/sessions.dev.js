"use strict";

var _require = require('../firestore'),
    db = _require.db;

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
    // update patient sessions
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