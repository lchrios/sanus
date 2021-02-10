"use strict";

var functions = require("firebase-functions");

var express = require("express");

var app = express(); // * Funciones de autenticacion

var _require = require("./routes/auth"),
    createUserWithEmailAndPassword = _require.createUserWithEmailAndPassword,
    signInWithEmailAndPassword = _require.signInWithEmailAndPassword,
    isAuthenticated = _require.isAuthenticated,
    isAuthorized = _require.isAuthorized; // * Funciones relativas al usuario


var _require2 = require("./routes/users"),
    getAllSessionsByUser = _require2.getAllSessionsByUser,
    getUser = _require2.getUser,
    getTherapistByUser = _require2.getTherapistByUser,
    getTherapistRefByUser = _require2.getTherapistRefByUser,
    getAllUsers = _require2.getAllUsers; // * Funciones relativas al terapeuta


var _require3 = require("./routes/therapists"),
    getAllTherapists = _require3.getAllTherapists,
    getAllSessionsByTherapist = _require3.getAllSessionsByTherapist,
    getTherapist = _require3.getTherapist,
    getPatientsbyTherapist = _require3.getPatientsbyTherapist; // * Funcions relativas a las sesiones


var _require4 = require("./routes/sessions"),
    getSession = _require4.getSession,
    newSession = _require4.newSession,
    deleteSession = _require4.deleteSession,
    updateSession = _require4.updateSession; // * Funciones relativas a los blogs


var _require5 = require("./routes/blogs"),
    getAllBlogs = _require5.getAllBlogs,
    getBlog = _require5.getBlog,
    newBlog = _require5.newBlog,
    deleteBlog = _require5.deleteBlog,
    updateBlog = _require5.updateBlog,
    getAllBlogsByTherapist = _require5.getAllBlogsByTherapist;

var _require6 = require("app/auth/authRoles"),
    authRoles = _require6.authRoles; // * uso de transformacion a json


app.use(express.json());
/* eslint max-len: ["error", { "ignoreStrings": true }] */
// * permisos del CORS

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "iknelia.netlify.app");
  res.header("Access-Control-Allow-Origin", "localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // * Niveles de permisos por roles 

var roles = {
  admin: ['admin'],
  // Only SA & Admin has access
  therapist: ['admin', 'therapist'],
  // Only SA & Admin & Editor has access
  user: ['admin', 'therapist', 'user'] // Everyone has access

}; // - La ventaja de esta modalidad de autorizacion es que así podemos
// - definir los permisos de acceso individualmente por ruta
// * rutas de terapeuta

app.get("/t", isAuthenticated, isAuthorized(roles.user), getAllTherapists);
app.get("/t/:tid", isAuthenticated, isAuthorized(roles.user), getTherapist);
app.get("/t/:tid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByTherapist);
app.get("/t/:tid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.get("/t/:tid/b", isAuthenticated, isAuthorized(roles.user), getAllBlogsByTherapist);
app.get("/t/:tid/u", isAuthenticated, isAuthorized(roles.therapist), getPatientsbyTherapist); // * rutas de usuario

app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user), getTherapistByUser);
app.get("/u/:uid/t/ref", isAuthenticated, isAuthorized(roles.user), getTherapistRefByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession); // * rutas de blogs

app.get("/b", isAuthenticated, isAuthorized(roles.user), getAllBlogs);
app.get("/b/:bid", isAuthenticated, isAuthorized(roles.user), getBlog);
app.post("/b/new", isAuthenticated, isAuthorized(roles.therapist), newBlog);
app["delete"]("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), deleteBlog);
app.put("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), updateBlog); // * rutas de sesiones

app.post("/s/new", isAuthenticated, isAuthorized(roles.user), newSession);
app.put("/s/:sid", isAuthenticated, isAuthorized(roles.user), updateSession);
app.get("/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app["delete"]("/s/:sid", isAuthenticated, isAuthorized(roles.user), deleteSession); // TODO: confirmSession function
// * rutas de autenticacion

app.post("/auth/login", signInWithEmailAndPassword);
app.post("/auth/signin", createUserWithEmailAndPassword); // * export de la api

exports.api = functions.region("us-central1").https.onRequest(app);