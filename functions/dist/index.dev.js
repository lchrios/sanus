"use strict";

var functions = require("firebase-functions");

var express = require('express');

var app = express();

var _require = require('./routes/patients'),
    getAllTherapists = _require.getAllTherapists,
    getAllPatients = _require.getAllPatients,
    getAllSessionsByPatient = _require.getAllSessionsByPatient,
    getAllSessionsByTherapist = _require.getAllSessionsByTherapist,
    getTherapist = _require.getTherapist,
    getPatient = _require.getPatient,
    getSession = _require.getSession;

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