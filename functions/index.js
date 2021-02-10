const functions = require("firebase-functions");
const express = require('express');
const app = express();

// * Funciones de autenticacion
const {
  createUserWithEmailAndPassword,
  logout,
  signInWithEmailAndPassword,
  signInWithGoogle,
  validateIdToken
} = require('./routes/auth');

// * Funciones relativas al usuario
const {
    getAllSessionsByUser, 
    getUser,
    getTherapistByUser,
    getTherapistRefByUser,
    getAllUsers,
} = require('./routes/users');

// * Funciones relativas al terapeuta
const {
    getAllTherapists,
    getAllSessionsByTherapist,
    getTherapist,
    getAllTherapistsRefs,
    getPatientsbyTherapists
} = require('./routes/therapists');


// * Funcions relativas a las sesiones
const {
    getSession, 
    newSession,
    deleteSession,
    updateSession,
} = require('./routes/sessions');

// * Funciones relativas a los blogs
const {
  getAllBlogs,
  getBlog,
  newBlog,
  deleteBlog,
  updateBlog,
  getAllBlogsByTherapist,
} = require('./routes/blogs');

// * uso de transformacion a json
app.use(express.json())

// permisos del CORS
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "iknelia.netlify.app");
  res.header("Access-Control-Allow-Origin", "localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// * rutas de terapeuta
app.get('/t', getAllTherapists);
app.get('/t/ref', getAllTherapistsRefs);
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);
app.get('/t/:tid/b', getAllBlogsByTherapist);
app.get('/t/:tid/u', getPatientsbyTherapists)

// * rutas de usuario
app.get('/u', getAllUsers);
app.get('/u/:uid', getUser);
app.get('/u/:uid/t', getTherapistByUser);
app.get('/u/:uid/t/ref', getTherapistRefByUser);
app.get('/u/:uid/s', getAllSessionsByUser);
app.get('/u/:uid/s/:sid', getSession);

// * rutas de blogs
app.get('/b', getAllBlogs);
app.get('/b/:bid', getBlog);
app.post('/b/new', newBlog);
app.delete('/b/:bid', deleteBlog);
app.put('/b/:bid', updateBlog);

// * rutas de sesiones
app.post('/s/new', newSession);
app.put('/s/:sid', updateSession);
app.get('/s/:sid', getSession);
app.delete('/s/:sid', deleteSession);

// * rutas de autenticacion
app.post('/auth/login', signInWithEmailAndPassword);
app.post('/auth/signin', createUserWithEmailAndPassword);
app.post('/auth/login-google', signInWithGoogle);
app.post('/auth/:uid/logout', logout);

// * export de la api 
exports.api = functions.region('us-central1').https.onRequest(app)