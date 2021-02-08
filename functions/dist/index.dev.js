"use strict";

var functions = require("firebase-functions");

var express = require('express');

var cors = require('cors')({
  origin: true
});

var app = express(); // importacion de funciones 

var _require = require('./routes/auth'),
    createUserWithEmailAndPassword = _require.createUserWithEmailAndPassword,
    logout = _require.logout,
    signInWithEmailAndPassword = _require.signInWithEmailAndPassword,
    signInWithGoogle = _require.signInWithGoogle,
    validateIdToken = _require.validateIdToken;

var _require2 = require('./routes/users'),
    getAllSessionsByUser = _require2.getAllSessionsByUser,
    getUser = _require2.getUser,
    getTherapistByUser = _require2.getTherapistByUser,
    getTherapistRefByUser = _require2.getTherapistRefByUser,
    getAllUsers = _require2.getAllUsers;

var _require3 = require('./routes/therapists'),
    getAllTherapists = _require3.getAllTherapists,
    getAllSessionsByTherapist = _require3.getAllSessionsByTherapist,
    getTherapist = _require3.getTherapist,
    getAllTherapistsRefs = _require3.getAllTherapistsRefs,
    getPatientsbyTherapists = _require3.getPatientsbyTherapists;

var _require4 = require('./routes/sessions'),
    getSession = _require4.getSession,
    newSession = _require4.newSession,
    deleteSession = _require4.deleteSession,
    updateSession = _require4.updateSession;

var _require5 = require('./routes/blogs'),
    getAllBlogs = _require5.getAllBlogs,
    getBlog = _require5.getBlog,
    newBlog = _require5.newBlog,
    deleteBlog = _require5.deleteBlog,
    updateBlog = _require5.updateBlog,
    getAllBlogsByTherapist = _require5.getAllBlogsByTherapist; // uso de transformacion a json


app.use(express.json()); // evitar problemas de control de acceso del CORS

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
}); // rutas de terapeuta

app.get('/t', getAllTherapists);
app.get('/t/ref', getAllTherapistsRefs);
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);
app.get('/t/:tid/b', getAllBlogsByTherapist);
app.get('/t/:tid/u', getPatientsbyTherapists); // rutas de usuario

app.get('/u', getAllUsers);
app.get('/u/:uid', getUser);
app.get('/u/:uid/t', getTherapistByUser);
app.get('/u/:uid/t/ref', getTherapistRefByUser);
app.get('/u/:uid/s', getAllSessionsByUser);
app.get('/u/:uid/s/:sid', getSession); // rutas de blogs

app.get('/b', getAllBlogs);
app.get('/b/:bid', getBlog);
app.post('/b/new', newBlog);
app["delete"]('/b/:bid', deleteBlog);
app.put('/b/:bid', updateBlog); // rutas de sesiones

app.post('/s/new', newSession);
app.put('/s/:sid', updateSession);
app.get('/s/:sid', getSession);
app["delete"]('/s/:sid', deleteSession); // rutas de autenticacion

app.post('/auth/login', signInWithEmailAndPassword);
app.post('/auth/signin', createUserWithEmailAndPassword);
app.post('/auth/login-google', signInWithGoogle);
app.post('/auth/:uid/logout', logout);
exports.api = functions.region('us-central1').https.onRequest(app);