"use strict";

var functions = require("firebase-functions");

var express = require('express');

var cors = require('cors')({
  origin: true
});

var app = express();

var _require = require('./routes/patients'),
    getAllPatients = _require.getAllPatients,
    getAllSessionsByPatient = _require.getAllSessionsByPatient,
    getPatient = _require.getPatient;

var _require2 = require('./routes/therapists'),
    getAllTherapists = _require2.getAllTherapists,
    getAllSessionsByTherapist = _require2.getAllSessionsByTherapist,
    getTherapist = _require2.getTherapist,
    getAllTherapistsRefs = _require2.getAllTherapistsRefs;

var _require3 = require('./routes/sessions'),
    getSession = _require3.getSession;

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.get('/t', getAllTherapists);
app.get('/t/ref', getAllTherapistsRefs);
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);
app.get('/p', getAllPatients);
app.get('/p/:pid', getPatient);
app.get('/p/:pid/s', getAllSessionsByPatient);
app.get('/p/:pid/s/:sid', getSession);
exports.api = functions.region('us-central1').https.onRequest(app);