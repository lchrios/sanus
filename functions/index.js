const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require('cors');

/** 
 * TODO: Validar que existan los docmentos.    */

// * Funciones de autenticacion
const {
  createUserWithEmailAndPassword,
  isAuthenticated,
  isAuthorized,
  createTherapistWithEmailAndPassword,
  setAdmin,
  setTherapist,
  setUser,
  updateTherapistInfo,
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
  uploadImg,
  submitTest,
  getTherapistSchedule
} = require("./routes/users");

// * Funciones relativas al terapeuta
const {
  getAllTherapists,
  getAllSessionsByTherapist,
  getTherapist,
  getPatientsbyTherapist,
  getNotesByTherapist,
  newNote,
  setSchedule,
  getSchedule
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

// * Funciones de stripe
  const { 
      sendPaymentInfo, 
      handleStripeEvent, 
} = require("./routes/stripe");

const { fixAllUsers, fixAllSessions, fixAllTherapists, fixAllBlogs } = require("./routes/fixes");

// * uso de transformacion a json
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// const upload = multer({ 
//     storage: multer.memoryStorage(),
//     limits: 5 * 1024 * 1024,
// });

// * permisos del CORS
app.use(cors());
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", [
        "https://iknelia.app",
        "http://localhost:3000",
        "http://localhost:5000",
        "https://www.iknelia.app", 
        "https://iknelia.netlify.app", 
        "https://iknelia-3cd8e.web.app/",
        "https://iknelia-3cd8e.firebaseapp.com/",
        
    ][1]);
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
app.get("/t/:tid/schedule", isAuthenticated, isAuthorized(roles.therapist), getSchedule);
app.post("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist), newNote);
app.post("/t/:tid/b", isAuthenticated, isAuthorized(roles.therapist), newBlog);
app.post("/t/:tid/schedule", isAuthenticated, isAuthorized(roles.therapist), setSchedule);

// * rutas de usuario
app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user), getTherapistByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.post("/u/:uid/t/:tid", isAuthenticated, isAuthorized(roles.user), assignTherapist);
app.post("/u/:uid/test", isAuthenticated, isAuthorized(roles.user), submitTest);
app.get("/u/:uid/schedule", isAuthenticated, isAuthorized(roles.user), getTherapistSchedule)

app.get("/u/:uid/image", getUserImage);
app.post("/u/:uid/image", uploadImg);

//*rutas de stripe (lado user)
app.post("/u/:uid/checkout", isAuthenticated, isAuthorized(roles.user), sendPaymentInfo);
app.post("/webhook", handleStripeEvent);

// * rutas de blogs
app.get("/b", isAuthenticated, isAuthorized(roles.user), getAllBlogs);
app.get("/b/:bid", isAuthenticated, isAuthorized(roles.user), getBlog);
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
app.post("/t/:tid", isAuthenticated, isAuthorized(roles.therapist), updateTherapistInfo)

// * rutas de autorizacion
app.put("/auth/:uid/admin", setAdmin);
app.put("/auth/:uid/therapist", setTherapist);
app.put("/auth/:uid/user", setUser);


// * rutas de fixing 
// ! BORRARLAS DESPUES DE TERMINAR SU USO
app.post("/fix/users", fixAllUsers);
app.post("/fix/sessions", fixAllSessions);
app.post("/fix/therapists", fixAllTherapists);
app.post("/fix/blogs", fixAllBlogs);



// * export de la api
exports.api = functions.region("us-central1").https.onRequest(app);
