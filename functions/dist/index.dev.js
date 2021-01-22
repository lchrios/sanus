"use strict";

var functions = require("firebase-functions");

var express = require('express');

var app = express();

var _require = require('./routes/patients'),
    getAllPatients = _require.getAllPatients,
    getAllSessionsByPatient = _require.getAllSessionsByPatient,
    getPatient = _require.getPatient;

var _require2 = require('./routes/therapists'),
    getAllTherapists = _require2.getAllTherapists,
    getAllSessionsByTherapist = _require2.getAllSessionsByTherapist,
    getTherapist = _require2.getTherapist;

var _require3 = require('./routes/sessions'),
    getSession = _require3.getSession;

app.use(express.json());
app.get('/t', getAllTherapists);
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);
app.get('/p', getAllPatients);
app.get('/p/:pid', getPatient);
app.get('/p/:pid/s', getAllSessionsByPatient);
app.get('/p/:pid/s/:sid', getSession);
exports.api = functions.region('us-central1').https.onRequest(app);