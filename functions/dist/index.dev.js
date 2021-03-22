"use strict";

var functions = require("firebase-functions");

var express = require("express");

var app = express();

var cors = require('cors');

var multer = require('multer'); // * Funciones de autenticacion


var _require = require("./routes/auth"),
    createUserWithEmailAndPassword = _require.createUserWithEmailAndPassword,
    isAuthenticated = _require.isAuthenticated,
    isAuthorized = _require.isAuthorized,
    createTherapistWithEmailAndPassword = _require.createTherapistWithEmailAndPassword,
    setAdmin = _require.setAdmin,
    setTherapist = _require.setTherapist,
    setUser = _require.setUser; // * Funciones relativas al usuario


var _require2 = require("./routes/users"),
    getAllSessionsByUser = _require2.getAllSessionsByUser,
    getUser = _require2.getUser,
    getTherapistByUser = _require2.getTherapistByUser,
    getAllUsers = _require2.getAllUsers,
    assignTherapist = _require2.assignTherapist,
    newTestAnswers = _require2.newTestAnswers,
    getUserImage = _require2.getUserImage,
    uploadImg = _require2.uploadImg,
    submitTest = _require2.submitTest,
    getTherapistSchedule = _require2.getTherapistSchedule; // * Funciones relativas al terapeuta


var _require3 = require("./routes/therapists"),
    getAllTherapists = _require3.getAllTherapists,
    getAllSessionsByTherapist = _require3.getAllSessionsByTherapist,
    getTherapist = _require3.getTherapist,
    getPatientsbyTherapist = _require3.getPatientsbyTherapist,
    getNotesByTherapist = _require3.getNotesByTherapist,
    newNote = _require3.newNote,
    setSchedule = _require3.setSchedule,
    getSchedule = _require3.getSchedule; // * Funcions relativas a las sesiones


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
    getAllBlogsByTherapist = _require5.getAllBlogsByTherapist; // * Funciones de stripe


var _require6 = require("./routes/stripe"),
    sendPaymentInfo = _require6.sendPaymentInfo,
    handleStripeEvent = _require6.handleStripeEvent;

var _require7 = require("./routes/fixes"),
    fixAllUsers = _require7.fixAllUsers,
    fixAllSessions = _require7.fixAllSessions,
    fixAllTherapists = _require7.fixAllTherapists,
    fixAllBlogs = _require7.fixAllBlogs; // * uso de transformacion a json


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var upload = multer({
  storage: multer.memoryStorage(),
  limits: 5 * 1024 * 1024
}); // * permisos del CORS

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", ["https://iknelia.app", "http://localhost:3000", "http://localhost:5000", "https://www.iknelia.app", "https://iknelia.netlify.app", "https://iknelia-3cd8e.web.app/", "https://iknelia-3cd8e.firebaseapp.com/"][1]);
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
app.get("/t/:tid/u", isAuthenticated, isAuthorized(roles.therapist), getPatientsbyTherapist);
app.get("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist), getNotesByTherapist);
app.get("/t/:tid/schedule", isAuthenticated, isAuthorized(roles.therapist), getSchedule);
app.post("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist), newNote);
app.post("/t/:tid/b", isAuthenticated, isAuthorized(roles.therapist), newBlog);
app.post("/t/:tid/schedule", isAuthenticated, isAuthorized(roles.therapist), setSchedule); // * rutas de usuario

app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user), getTherapistByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.post("/u/:uid/t/:tid", isAuthenticated, isAuthorized(roles.user), assignTherapist);
app.post("/u/:uid/test", isAuthenticated, isAuthorized(roles.user), submitTest);
app.get("/u/:uid/schedule", isAuthenticated, isAuthorized(roles.user), getTherapistSchedule);
app.get("/u/:uid/image", getUserImage);
app.post("/u/:uid/image", uploadImg); //*rutas de stripe (lado user)

app.post("/u/:uid/checkout", isAuthenticated, isAuthorized(roles.user), sendPaymentInfo);
app.post("/webhook", handleStripeEvent); // * rutas de blogs

app.get("/b", isAuthenticated, isAuthorized(roles.user), getAllBlogs);
app.get("/b/:bid", isAuthenticated, isAuthorized(roles.user), getBlog);
app["delete"]("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), deleteBlog);
app.put("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), updateBlog); // * rutas de sesiones

app.post("/s/new", isAuthenticated, isAuthorized(roles.user), newSession);
app.put("/s/:sid", isAuthenticated, isAuthorized(roles.user), updateSession);
app.get("/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app["delete"]("/s/:sid", isAuthenticated, isAuthorized(roles.user), deleteSession); // TODO: confirmSession function
// * rutas de autenticacion

app.post("/auth/signuser", createUserWithEmailAndPassword);
app.post("/auth/signtherapist", createTherapistWithEmailAndPassword); // * rutas de autorizacion

app.put("/auth/:uid/admin", setAdmin);
app.put("/auth/:uid/therapist", setTherapist);
app.put("/auth/:uid/user", setUser); // * rutas de fixing 
// ! BORRARLAS DESPUES DE TERMINAR SU USO

app.post("/fix/users", fixAllUsers);
app.post("/fix/sessions", fixAllSessions);
app.post("/fix/therapists", fixAllTherapists);
app.post("/fix/blogs", fixAllBlogs); // * export de la api

exports.api = functions.region("us-central1").https.onRequest(app);