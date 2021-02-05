const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();
// importacion de funciones 
const {
  createUserWithEmailAndPassword,
  logout,
  signInWithEmailAndPassword,
  signInWithGoogle,
  validateIdToken
} = require('./routes/auth');

const {
    getAllSessionsByUser, 
    getUser,
    getTherapistByUser,
    getTherapistRefByUser,
    getAllUsers,
} = require('./routes/users');

const {
    getAllTherapists,
    getAllSessionsByTherapist,
    getTherapist,
    getAllTherapistsRefs,
} = require('./routes/therapists');

const {
    getSession, 
    newSession,
    deleteSession,
    updateSession,
} = require('./routes/sessions');

const {
  getAllBlogs,
  getBlog,
  newBlog,
  deleteBlog,
  updateBlog,
  getAllBlogsByTherapist,
} = require('./routes/blogs');

// uso de transformacion a json
app.use(express.json())

// evitar problemas de control de acceso del CORS
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

// rutas de terapeuta
app.get('/t', getAllTherapists);
app.get('/t/ref', getAllTherapistsRefs);
app.get('/t/:tid', getTherapist);
app.get('/t/:tid/s', getAllSessionsByTherapist);
app.get('/t/:tid/s/:sid', getSession);
app.get('/t/:tid/b', getAllBlogsByTherapist);

// rutas de usuario
app.get('/u', getAllUsers);
app.get('/u/:uid', getUser);
app.get('/u/:uid/t', getTherapistByUser);
app.get('/u/:uid/t/ref', getTherapistRefByUser);
app.get('/u/:uid/s', getAllSessionsByUser);
app.get('/u/:uid/s/:sid', getSession);

// rutas de blogs
app.get('/b', getAllBlogs);
app.get('/b/:bid', getBlog);
app.post('/b/new', newBlog);
app.delete('/b/:bid', deleteBlog);
app.put('/b/:bid', updateBlog);

// rutas de sesiones
app.post('/s/new', newSession);
app.put('/s/:sid', updateSession);
app.get('/s/:sid', getSession);
app.delete('/s/:sid', deleteSession);

// rutas de autenticacion
app.post('/auth/login', signInWithEmailAndPassword);
app.post('/auth/signin', createUserWithEmailAndPassword);
app.post('/auth/login-google', signInWithGoogle);
app.post('/auth/:uid/logout', logout);

exports.api = functions.region('us-central1').https.onRequest(app)