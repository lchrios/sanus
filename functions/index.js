const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require('cors')

// * Funciones de autenticacion
const {
  createUserWithEmailAndPassword,
  isAuthenticated,
  isAuthorized,
  createTherapistWithEmailAndPassword,
  setAdmin,
  setTherapist,
  setUser,
} = require("./routes/auth");

// * Funciones relativas al usuario
const {
  getAllSessionsByUser,
  getUser,
  getTherapistByUser,
  getAllUsers,
  assignTherapist,
  newTestAnswers,
  getUserImage,
} = require("./routes/users");

// * Funciones relativas al terapeuta
const {
  getAllTherapists,
  getAllSessionsByTherapist,
  getTherapist,
  getPatientsbyTherapist,
  getNotesByTherapist,
  newNote
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

//*Funciones de stripe
  const { sendPaymentInfo, getSecret } = require("./routes/stripe");

// * uso de transformacion a json
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// * permisos del CORS
app.use(cors());
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://iknelia.netlify.app");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "http://localhost:5000");
  res.header("Access-Control-Allow-Origin", "https://iknelia-3cd8e.web.app/");
  res.header("Access-Control-Allow-Origin", "https://iknelia-3cd8e.firebaseapp.com/");
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
app.get("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist), getNotesByTherapist);
app.post("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist), newNote);

// * rutas de usuario
app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user), getTherapistByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.post("/u/:uid/t/:tid", isAuthenticated, isAuthorized(roles.user), assignTherapist);
app.post("/u/:uid/test", isAuthenticated, isAuthorized(roles.user), newTestAnswers);
app.get("/u/:uid/image", getUserImage);

//*rutas de stripe (lado user)
app.post("/u/:uid/checkout", isAuthenticated, isAuthorized(roles.user), sendPaymentInfo);
// app.get("/u/:uid/secret", isAuthenticated, isAuthorized(roles.user), getSecret);

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

// * rutas de autorizacion
app.put("/auth/:uid/admin", setAdmin);
app.put("/auth/:uid/therapist", setTherapist);
app.put("/auth/:uid/user", setUser);


// * TEMP funtions

app.post("/auth/restore/users/img", (req, res) => {
    admin.firestore().collection("users").get()
    .then( query => {
        query.forEach( doc => {
            doc.ref.update("img", "usuarios/placeholders/none-user.png").catch( er => {
                console.error(er)
            })
        })
        res.status(200).send("Usuarios actualizados");
    })
})


// * export de la api
exports.api = functions.region("us-central1").https.onRequest(app);
