const functions = require("firebase-functions");
var fileUpload = require('express-fileupload');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
const cors = require('cors');
const { admin } = require('./firebase');


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
  getFilesAndInfo,
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
  getTherapistSchedule,
  getUserPayed,
  getAllUserImage
} = require("./routes/users");

// * Funciones relativas al terapeuta
const {
  getAllTherapists,
  getAllSessionsByTherapist,
  getTherapist,
  getPatientsbyTherapist,
  getPatientsImageByTherapist,
  getNotesByTherapist,
  newNote,
  setSchedule,
  getSchedule,
  getTherImage,
  uploadTherImg,
  getAllTherImage,
  getAllUncompletedSessionsByTherapist,
  handleAccountUpdate,
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
  getLandBlogs,
} = require("./routes/blogs");

// * Funciones de stripe
const { 
      sendPaymentInfo, 
      handleStripeEvent, 
      expressAccount,
      connectReAuth,
      connectFailed,
      validateStripe,
} = require("./routes/stripe");

const filesRouter = require('./routes/files');

const { fixAllUsers, fixAllSessions, fixAllTherapists, fixAllBlogs, fixAllTherapistsImage } = require("./routes/fixes");
const { mailNewUser } = require("./routes/mails");

//app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

// const upload = multer({ 
//     storage: multer.memoryStorage(),
//     limits: 5 * 1024 * 1024,
// });

// * permisos del CORS
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", [
        "https://iknelia.app",
        "http://localhost:3000",
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

// * uso de transformacion a json
app.use(express.json());


// * rutas de stripe (manejo de eventos de stripe)
//app.post("/updateAccount", handleAccountUpdate)
app.post("/webhook", handleStripeEvent);
app.post("/updateAccount", handleAccountUpdate);

app.use(cookieParser());

// * rutas de terapeuta
app.get("/t", isAuthenticated, isAuthorized(roles.user), getAllTherapists);
app.get("/t/:tid", isAuthenticated, isAuthorized(roles.user), getTherapist);
app.get("/t/:tid/s", isAuthenticated, isAuthorized(roles.user, true), getAllSessionsByTherapist);
app.get("/t/:tid/s/uncompleted", isAuthenticated, isAuthorized(roles.user, true), getAllUncompletedSessionsByTherapist);
app.get("/t/:tid/s/:sid", isAuthenticated, isAuthorized(roles.user, true), getSession);
app.get("/t/:tid/b", isAuthenticated, isAuthorized(roles.user), getAllBlogsByTherapist);
app.get("/t/:tid/u", isAuthenticated, isAuthorized(roles.therapist, true), getPatientsbyTherapist);
app.get("/t/:tid/u/image", isAuthenticated, isAuthorized(roles.therapist, true), getPatientsImageByTherapist);
app.get("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist, true), getNotesByTherapist);
app.get("/t/:tid/schedule", isAuthenticated, isAuthorized(roles.therapist, true), getSchedule);
app.post("/t/:tid/n", isAuthenticated, isAuthorized(roles.therapist, true), newNote);
app.post("/t/:tid/b", isAuthenticated, isAuthorized(roles.therapist, true), newBlog);
app.post("/t/:tid/schedule", isAuthenticated, isAuthorized(roles.therapist, true), setSchedule);
app.get("/t/image", isAuthenticated, isAuthorized(roles.user), getAllTherImage);
app.get("/t/:tid/image", isAuthenticated, isAuthorized(roles.user), getTherImage);
app.post("/t/:tid/image", isAuthenticated, isAuthorized(roles.therapist), uploadTherImg);

// * rutas de usuario
app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user, true), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user, true), getTherapistByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user, true), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user, true), getSession);
app.post("/u/:uid/t/:tid", isAuthenticated, isAuthorized(roles.user, true), assignTherapist);
app.post("/u/:uid/test", isAuthenticated, isAuthorized(roles.user, true), submitTest);
app.get("/u/:uid/schedule", isAuthenticated, isAuthorized(roles.user, true), getTherapistSchedule)
app.get("/u/:uid/payed", isAuthenticated, isAuthorized(roles.user, true), getUserPayed)
app.get("/u/:uid/image", isAuthenticated, isAuthorized(roles.user), getUserImage);
app.get("/users/image", isAuthenticated, isAuthorized(roles.user), getAllUserImage);
app.post("/u/:uid/image", uploadImg);

//*rutas de stripe (lado terapeuta)
app.post("/t/:tid/connect", isAuthenticated, isAuthorized(roles.therapist), expressAccount)
app.get("/t/:tid/reAuth", isAuthenticated, isAuthorized(roles.therapist), connectReAuth)
app.post("/t/:tid/connectFailed", isAuthenticated, isAuthorized(roles.therapist), connectFailed)
app.get("/t/:tid/validateStripe", isAuthenticated, isAuthorized(roles.therapist), validateStripe)

//*rutas de stripe (lado user)
app.post("/u/:uid/checkout", isAuthenticated, isAuthorized(roles.user, true), sendPaymentInfo);


// * rutas de blogs
app.get("/b", isAuthenticated, isAuthorized(roles.user), getAllBlogs);
app.get("/b/land", getLandBlogs);
app.get("/b/:bid", isAuthenticated, isAuthorized(roles.user), getBlog);
app.delete("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), deleteBlog);
app.put("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), updateBlog);

// * rutas de sesiones
app.post("/s/new", isAuthenticated, isAuthorized(roles.user), newSession);
app.put("/s/:sid", isAuthenticated, isAuthorized(roles.user), updateSession);
app.get("/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app.delete("/s/:sid", isAuthenticated, isAuthorized(roles.user), deleteSession);

// * rutas de correos
app.post("/u/:uid/mails/new", isAuthenticated, isAuthorized(roles.user, true), mailNewUser);

// * rutas de autenticacion
app.post("/auth/signuser", createUserWithEmailAndPassword);
app.post("/auth/signtherapist", createTherapistWithEmailAndPassword)
app.post("/t/:tid", isAuthenticated, isAuthorized(roles.therapist, true), updateTherapistInfo)

// * rutas de autorizacion
app.put("/auth/:uid/admin", setAdmin);
app.put("/auth/:uid/therapist", setTherapist);
app.put("/auth/:uid/user", setUser);
app.use(fileUpload({ "limits": 20 * 1024 * 1024 }));
app.use("/files", filesRouter);
app.get("/schedules/clean", (req, res) => {
    let firestore = admin.firestore(); 
    let sched = firestore.collection("schedules");
    sched.get()
    .then(query => { // * Obtain and return all the existing therapists 
        
        // * Variables meant for a resume about behavior
        let updated_scheds = [];
        let deleted_scheds = []; 
        let errors_updating = [];
        let ok_upd8 = 0;
        let total_del = 0;
        
        query.forEach(sched_doc => {

            // * Read data from the doc
            let { schedule, options } = sched_doc.data(); 
            let new_schedule, deleted_sched = []; 
            
            // * Generate new schedule
            new_schedule = schedule.filter(d => new Date(d).valueOf() >= new Date().valueOf());
            // * Check which dates where erased
            deleted_sched = schedule.filter(d => !new_schedule.includes(d)); 
            
            // * Update options startDate to prevent users seeing old dates
            options.startDate = new Date().toISOString(); 
            
            // * Save this info for the report
            updated_scheds.push(new_schedule);
            deleted_scheds.push(deleted_sched);
            total_del += deleted_sched.length;
            
            // * Update the schedule into the firebase document
            sched_doc.ref.update({
                "schedule": new_schedule,
                "options": options,
            })
            .then(() => {
                ok_upd8++;
            })
            .catch(er => {
                errors_updating.push(er);
            })

        })

        return res.status(200).send({
            "success": true,
            "updated_schedules": updated_scheds,
            "deleted_schedules": deleted_scheds,
            "errors_updating": errors_updating,
            "success_updating": ok_upd8,
            "failed_updating": ok_upd8 - errors_updating.length,
            "total_deleted": total_del
        })

    })
    .catch(err => {
        console.log(err);
    })
})

let HOURS = 12;

setTimeout(() =>{
    let firestore = admin.firestore(); 
    let sched = firestore.collection("schedules");
    sched.get()
    .then(query => { // * Obtain and return all the existing therapists 
        
        // * Variables meant for a resume about behavior
        let updated_scheds = [];
        let deleted_scheds = []; 
        let errors_updating = [];
        let ok_upd8 = 0;
        let total_del = 0;
        
        query.forEach(sched_doc => {

            // * Read data from the doc
            let { schedule, options } = sched_doc.data(); 
            let new_schedule, deleted_sched = []; 
            
            // * Generate new schedule
            new_schedule = schedule.filter(d => new Date(d).valueOf() >= new Date().valueOf());
            // * Check which dates where erased
        deleted_sched = schedule.filter(d => !new_schedule.includes(d)); 
            
            // * Update options startDate to prevent users seeing old dates
            options.startDate = new Date().toISOString(); 
            
            // * Save this info for the report
            updated_scheds.push(new_schedule);
            deleted_scheds.push(deleted_sched);
            total_del += deleted_sched.length;
            
            // * Update the schedule into the firebase document
            sched_doc.ref.update({
                "schedule": new_schedule,
                "options": options,
            })
            .then(() => {
                ok_upd8++;
            })
            .catch(er => {
                errors_updating.push(er);
            })

        })

        return res.status(200).send({
            "success": true,
            "updated_schedules": updated_scheds,
            "deleted_schedules": deleted_scheds,
            "errors_updating": errors_updating,
            "success_updating": ok_upd8,
            "failed_updating": ok_upd8 - errors_updating.length,
            "total_deleted": total_del
        })

    })
    .catch(err => {
        console.log(err);
    })
}, 3600 * 1000 * HOURS);



// * rutas de fixing 
// ! BORRARLAS DESPUES DE TERMINAR SU USO
app.post("/fix/users", fixAllUsers);
app.post("/fix/sessions", fixAllSessions);
app.post("/fix/therapists", fixAllTherapists);
app.post("/fix/therapists/img", fixAllTherapistsImage);
app.post("/fix/blogs", fixAllBlogs);



// * export de la api
exports.api = functions.region("us-central1").https.onRequest(app);
