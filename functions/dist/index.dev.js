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
    getPatient = _require.getPatient,
    getTherapistByPatient = _require.getTherapistByPatient,
    getTherapistRefByPatient = _require.getTherapistRefByPatient;

var _require2 = require('./routes/therapists'),
    getAllTherapists = _require2.getAllTherapists,
    getAllSessionsByTherapist = _require2.getAllSessionsByTherapist,
    getTherapist = _require2.getTherapist,
    getAllTherapistsRefs = _require2.getAllTherapistsRefs;

var _require3 = require('./routes/sessions'),
    getSession = _require3.getSession,
    newSession = _require3.newSession,
    deleteSession = _require3.deleteSession;

var _require4 = require("./routes/dist/sessions.dev"),
    updateSession = _require4.updateSession;

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
app.get('/p/:pid/t', getTherapistByPatient);
app.get('/p/:pid/t/ref', getTherapistRefByPatient);
app.get('/p/:pid/s', getAllSessionsByPatient);
app.get('/p/:pid/s/:sid', getSession);
app.get('/b', getAllBlogs);
app.get('/b/:bid', getBlog);
app.post('/s/new', newSession);
app.put('/s/:sid', updateSession);
app.get('/s/:sid', getSession);
app["delete"]('/s/:sid', deleteSession);
exports.api = functions.region('us-central1').https.onRequest(app);