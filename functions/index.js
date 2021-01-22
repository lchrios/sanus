const functions = require("firebase-functions");
const express = require('express');
const app = express();

const { 
    getAllPatients, 
    getAllSessionsByPatient, 
    getPatient
} = require('./routes/patients');

const {
    getAllTherapists,
    getAllSessionsByTherapist,
    getTherapist
} = require('./routes/therapists');

const {
    getSession
} = require('./routes/sessions');

app.use(express.json())


app.get('/t', getAllTherapists);
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);

app.get('/p', getAllPatients);
app.get('/p/:pid', getPatient)
app.get('/p/:pid/s', getAllSessionsByPatient);
app.get('/p/:pid/s/:sid', getSession);


exports.api = functions.region('us-central1').https.onRequest(app)