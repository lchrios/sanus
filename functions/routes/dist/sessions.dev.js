"use strict";

var _require = require('../firestore'),
    db = _require.db;

var pats = db.collection('patients');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getSession = function (req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  sess.doc(req.params.sid).get().then(function (doc) {
    res.status(204).send(doc.data());
  });
};