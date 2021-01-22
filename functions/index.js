const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();


const { 
    getAllPatients, 
    getAllSessionsByPatient, 
    getPatient
} = require('./routes/patients');

const {
    getAllTherapists,
    getAllSessionsByTherapist,
    getTherapist,
    getAllTherapistsRefs
} = require('./routes/therapists');

const {
    getSession
} = require('./routes/sessions');

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
app.get('/t/ref', getAllTherapistsRefs)
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);

app.get('/p', getAllPatients);
app.get('/p/:pid', getPatient)
app.get('/p/:pid/s', getAllSessionsByPatient);
app.get('/p/:pid/s/:sid', getSession);


exports.api = functions.region('us-central1').https.onRequest(app)