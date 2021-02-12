const functions = require("firebase-functions");
const express = require("express");
const app = express();

// * Funciones de autenticacion
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  isAuthenticated,
  isAuthorized,
  createTherapistWithEmailAndPassword,
} = require("./routes/auth");

// * Funciones relativas al usuario
const {
  getAllSessionsByUser,
  getUser,
  getTherapistByUser,
  getTherapistRefByUser,
  getAllUsers,
  assignTherapist,
} = require("./routes/users");

// * Funciones relativas al terapeuta
const {
  getAllTherapists,
  getAllSessionsByTherapist,
  getTherapist,
  getPatientsbyTherapist,
} = require("./routes/therapists");


// * Funcions relativas a las sesiones
const {
  getSession,
  newSession,
  deleteSession,
  updateSession,
} = require("./routes/sessions");

// * Funciones relativas a los blogs
const {
  getAllBlogs,
  getBlog,
  newBlog,
  deleteBlog,
  updateBlog,
  getAllBlogsByTherapist,
} = require("./routes/blogs");

// * uso de transformacion a json
app.use(express.json());

// * permisos del CORS
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "iknelia.netlify.app");
  res.header("Access-Control-Allow-Origin", "localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// * Niveles de permisos por roles 
const roles = {
  admin: ['admin'], // Only SA & Admin has access
  therapist: ['admin', 'therapist'], // Only SA & Admin & Editor has access
  user: ['admin', 'therapist', 'user'], // Everyone has access
}

// - La ventaja de esta modalidad de autorizacion es que así podemos
// - definir los permisos de acceso individualmente por ruta

// * rutas de terapeuta
app.get("/t", isAuthenticated, isAuthorized(roles.user), getAllTherapists);
app.get("/t/:tid", isAuthenticated, isAuthorized(roles.user), getTherapist);
app.get("/t/:tid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByTherapist);
app.get("/t/:tid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.get("/t/:tid/b", isAuthenticated, isAuthorized(roles.user), getAllBlogsByTherapist);
app.get("/t/:tid/u", isAuthenticated, isAuthorized(roles.therapist), getPatientsbyTherapist);

// * rutas de usuario
app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user), getTherapistByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.put("/u/:uid/assign/:tid", isAuthorized, isAuthorized(roles.user), assignTherapist)

// * rutas de blogs
app.get("/b", isAuthenticated, isAuthorized(roles.user), getAllBlogs);
app.get("/b/:bid", isAuthenticated, isAuthorized(roles.user), getBlog);
app.post("/b/new", isAuthenticated, isAuthorized(roles.therapist), newBlog);
app.delete("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), deleteBlog);
app.put("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), updateBlog);

// * rutas de sesiones
app.post("/s/new", isAuthenticated, isAuthorized(roles.user), newSession);
app.put("/s/:sid", isAuthenticated, isAuthorized(roles.user), updateSession);
app.get("/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.delete("/s/:sid", isAuthenticated, isAuthorized(roles.user), deleteSession);
// TODO: confirmSession function

// * rutas de autenticacion
app.post("/auth/signuser", createUserWithEmailAndPassword);
app.post("/auth/signtherapist", createTherapistWithEmailAndPassword)

// * export de la api
exports.api = functions.region("us-central1").https.onRequest(app);
