const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();


const { 
    getAllPatients, 
    getAllSessionsByPatient, 
    getPatient,
    getTherapistByPatient,
    getTherapistRefByPatient
} = require('./routes/patients');

const {
    getAllTherapists,
    getAllSessionsByTherapist,
    getTherapist,
    getAllTherapistsRefs
} = require('./routes/therapists');

const {
    getSession, 
    newSession,
    deleteSession
} = require('./routes/sessions');
const { updateSession } = require("./routes/dist/sessions.dev");

app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
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

app.post('/s/new', newSession);
app.post('/s/:sid', updateSession);
app.delete('/s/:sid', deleteSession);

exports.api = functions.region('us-central1').https.onRequest(app)