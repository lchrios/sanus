"use strict";

var functions = require("firebase-functions");

var fileUpload = require('express-fileupload');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var express = require("express");

var app = express();

var cors = require('cors');

var _require = require('./firebase'),
    admin = _require.admin;
/** 
 * TODO: Validar que existan los docmentos.    */
// * Funciones de autenticacion


var _require2 = require("./routes/auth"),
    createUserWithEmailAndPassword = _require2.createUserWithEmailAndPassword,
    isAuthenticated = _require2.isAuthenticated,
    isAuthorized = _require2.isAuthorized,
    createTherapistWithEmailAndPassword = _require2.createTherapistWithEmailAndPassword,
    setAdmin = _require2.setAdmin,
    setTherapist = _require2.setTherapist,
    setUser = _require2.setUser,
    updateTherapistInfo = _require2.updateTherapistInfo,
    getFilesAndInfo = _require2.getFilesAndInfo; // * Funciones relativas al usuario


var _require3 = require("./routes/users"),
    getAllSessionsByUser = _require3.getAllSessionsByUser,
    getUser = _require3.getUser,
    getTherapistByUser = _require3.getTherapistByUser,
    getAllUsers = _require3.getAllUsers,
    assignTherapist = _require3.assignTherapist,
    newTestAnswers = _require3.newTestAnswers,
    getUserImage = _require3.getUserImage,
    uploadImg = _require3.uploadImg,
    submitTest = _require3.submitTest,
    getTherapistSchedule = _require3.getTherapistSchedule,
    getUserPayed = _require3.getUserPayed,
    getAllUserImage = _require3.getAllUserImage; // * Funciones relativas al terapeuta


var _require4 = require("./routes/therapists"),
    getAllTherapists = _require4.getAllTherapists,
    getAllSessionsByTherapist = _require4.getAllSessionsByTherapist,
    getTherapist = _require4.getTherapist,
    getPatientsbyTherapist = _require4.getPatientsbyTherapist,
    getPatientsImageByTherapist = _require4.getPatientsImageByTherapist,
    getNotesByTherapist = _require4.getNotesByTherapist,
    newNote = _require4.newNote,
    setSchedule = _require4.setSchedule,
    getSchedule = _require4.getSchedule,
    getTherImage = _require4.getTherImage,
    uploadTherImg = _require4.uploadTherImg,
    getAllTherImage = _require4.getAllTherImage,
    getAllUncompletedSessionsByTherapist = _require4.getAllUncompletedSessionsByTherapist,
    handleAccountUpdate = _require4.handleAccountUpdate; // * Funcions relativas a las sesiones


var _require5 = require("./routes/sessions"),
    getSession = _require5.getSession,
    newSession = _require5.newSession,
    deleteSession = _require5.deleteSession,
    updateSession = _require5.updateSession; // * Funciones relativas a los blogs


var _require6 = require("./routes/blogs"),
    getAllBlogs = _require6.getAllBlogs,
    getBlog = _require6.getBlog,
    newBlog = _require6.newBlog,
    deleteBlog = _require6.deleteBlog,
    updateBlog = _require6.updateBlog,
    getAllBlogsByTherapist = _require6.getAllBlogsByTherapist,
    getLandBlogs = _require6.getLandBlogs; // * Funciones de stripe


var _require7 = require("./routes/stripe"),
    sendPaymentInfo = _require7.sendPaymentInfo,
    handleStripeEvent = _require7.handleStripeEvent,
    expressAccount = _require7.expressAccount,
    connectReAuth = _require7.connectReAuth,
    connectFailed = _require7.connectFailed,
    validateStripe = _require7.validateStripe;

var filesRouter = require('./routes/files');

var _require8 = require("./routes/fixes"),
    fixAllUsers = _require8.fixAllUsers,
    fixAllSessions = _require8.fixAllSessions,
    fixAllTherapists = _require8.fixAllTherapists,
    fixAllBlogs = _require8.fixAllBlogs,
    fixAllTherapistsImage = _require8.fixAllTherapistsImage;

var _require9 = require("./routes/mails"),
    mailNewUser = _require9.mailNewUser; //app.use(express.urlencoded({ extended: true }));


app.use(logger('dev')); // const upload = multer({ 
//     storage: multer.memoryStorage(),
//     limits: 5 * 1024 * 1024,
// });
// * permisos del CORS

app.use(cors());
app.use(function (req, res, next) {
  // let whitelist = [
  //     "https://sanus-5ce83.web.app",
  //     "https://sanus-5ce83.firebaseapp.com",
  //     "http://localhost:3000",
  // ]
  // let host = req.get('host');
  // whitelist.forEach((v, k) => {
  //     if (host.indexOf(v) > -1) {
  //         res.setHeader('Access-Control-Allow-Origin', v)
  //     }
  // })
  res.header("Access-Control-Allow-Origin", "*");
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
// * uso de transformacion a json

app.use(express.json());
app.get('/hello', function (req, res) {
  return res.status(200).send('Hello!');
}); // * rutas de stripe (manejo de eventos de stripe)
//app.post("/updateAccount", handleAccountUpdate)

app.post("/webhook", handleStripeEvent);
app.post("/updateAccount", handleAccountUpdate);
app.use(cookieParser()); // * rutas de terapeuta

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
app.post("/t/:tid/image", isAuthenticated, isAuthorized(roles.therapist), uploadTherImg); // * rutas de usuario

app.get("/u", isAuthenticated, isAuthorized(roles.admin), getAllUsers);
app.get("/u/:uid", isAuthenticated, isAuthorized(roles.user, true), getUser);
app.get("/u/:uid/t", isAuthenticated, isAuthorized(roles.user, true), getTherapistByUser);
app.get("/u/:uid/s", isAuthenticated, isAuthorized(roles.user, true), getAllSessionsByUser);
app.get("/u/:uid/s/:sid", isAuthenticated, isAuthorized(roles.user, true), getSession);
app.post("/u/:uid/t/:tid", isAuthenticated, isAuthorized(roles.user, true), assignTherapist);
app.post("/u/:uid/test", isAuthenticated, isAuthorized(roles.user, true), submitTest);
app.get("/u/:uid/schedule", isAuthenticated, isAuthorized(roles.user, true), getTherapistSchedule);
app.get("/u/:uid/payed", isAuthenticated, isAuthorized(roles.user, true), getUserPayed);
app.get("/u/:uid/image", isAuthenticated, isAuthorized(roles.user), getUserImage);
app.get("/users/image", isAuthenticated, isAuthorized(roles.user), getAllUserImage);
app.post("/u/:uid/image", uploadImg); //*rutas de stripe (lado terapeuta)

app.post("/t/:tid/connect", isAuthenticated, isAuthorized(roles.therapist), expressAccount);
app.get("/t/:tid/reAuth", isAuthenticated, isAuthorized(roles.therapist), connectReAuth);
app.post("/t/:tid/connectFailed", isAuthenticated, isAuthorized(roles.therapist), connectFailed);
app.get("/t/:tid/validateStripe", isAuthenticated, isAuthorized(roles.therapist), validateStripe); //*rutas de stripe (lado user)

app.post("/u/:uid/checkout", isAuthenticated, isAuthorized(roles.user, true), sendPaymentInfo); // * rutas de blogs

app.get("/b", isAuthenticated, isAuthorized(roles.user), getAllBlogs);
app.get("/b/land", getLandBlogs);
app.get("/b/:bid", isAuthenticated, isAuthorized(roles.user), getBlog);
app["delete"]("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), deleteBlog);
app.put("/b/:bid", isAuthenticated, isAuthorized(roles.therapist), updateBlog); // * rutas de sesiones

app.post("/s/new", isAuthenticated, isAuthorized(roles.user), newSession);
app.put("/s/:sid", isAuthenticated, isAuthorized(roles.user), updateSession);
app.get("/s/:sid", isAuthenticated, isAuthorized(roles.user), getSession);
app["delete"]("/s/:sid", isAuthenticated, isAuthorized(roles.user), deleteSession); // * rutas de correos

app.post("/u/:uid/mails/new", isAuthenticated, isAuthorized(roles.user, true), mailNewUser); // * rutas de autenticacion

app.options('/auth/signuser', function (req, res) {
  res.sendStatus(200);
});
app.post("/auth/signuser", createUserWithEmailAndPassword);
app.post("/auth/signtherapist", createTherapistWithEmailAndPassword);
app.post("/t/:tid", isAuthenticated, isAuthorized(roles.therapist, true), updateTherapistInfo); // * rutas de autorizacion

app.put("/auth/:uid/admin", setAdmin);
app.put("/auth/:uid/therapist", setTherapist);
app.put("/auth/:uid/user", setUser);
app.use(fileUpload({
  "limits": 20 * 1024 * 1024
}));
app.use("/files", filesRouter);
app.get("/schedules/clean", function (req, res) {
  var firestore = admin.firestore();
  var sched = firestore.collection("schedules");
  sched.get().then(function (query) {
    // * Obtain and return all the existing therapists 
    // * Variables meant for a resume about behavior
    var updated_scheds = [];
    var deleted_scheds = [];
    var errors_updating = [];
    var ok_upd8 = 0;
    var total_del = 0;
    query.forEach(function (sched_doc) {
      // * Read data from the doc
      var _sched_doc$data = sched_doc.data(),
          schedule = _sched_doc$data.schedule,
          options = _sched_doc$data.options;

      var new_schedule,
          deleted_sched = []; // * Generate new schedule

      new_schedule = schedule.filter(function (d) {
        return new Date(d).valueOf() >= new Date().valueOf();
      }); // * Check which dates where erased

      deleted_sched = schedule.filter(function (d) {
        return !new_schedule.includes(d);
      }); // * Update options startDate to prevent users seeing old dates

      options.startDate = new Date().toISOString(); // * Save this info for the report

      updated_scheds.push(new_schedule);
      deleted_scheds.push(deleted_sched);
      total_del += deleted_sched.length; // * Update the schedule into the firebase document

      sched_doc.ref.update({
        "schedule": new_schedule,
        "options": options
      }).then(function () {
        ok_upd8++;
      })["catch"](function (er) {
        errors_updating.push(er);
      });
    });
    return res.status(200).send({
      "success": true,
      "updated_schedules": updated_scheds,
      "deleted_schedules": deleted_scheds,
      "errors_updating": errors_updating,
      "success_updating": ok_upd8,
      "failed_updating": ok_upd8 - errors_updating.length,
      "total_deleted": total_del
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
var HOURS = 12;
setTimeout(function () {
  var firestore = admin.firestore();
  var sched = firestore.collection("schedules");
  sched.get().then(function (query) {
    // * Obtain and return all the existing therapists 
    // * Variables meant for a resume about behavior
    var updated_scheds = [];
    var deleted_scheds = [];
    var errors_updating = [];
    var ok_upd8 = 0;
    var total_del = 0;
    query.forEach(function (sched_doc) {
      // * Read data from the doc
      var _sched_doc$data2 = sched_doc.data(),
          schedule = _sched_doc$data2.schedule,
          options = _sched_doc$data2.options;

      var new_schedule,
          deleted_sched = []; // * Generate new schedule

      new_schedule = schedule.filter(function (d) {
        return new Date(d).valueOf() >= new Date().valueOf();
      }); // * Check which dates where erased

      deleted_sched = schedule.filter(function (d) {
        return !new_schedule.includes(d);
      }); // * Update options startDate to prevent users seeing old dates

      options.startDate = new Date().toISOString(); // * Save this info for the report

      updated_scheds.push(new_schedule);
      deleted_scheds.push(deleted_sched);
      total_del += deleted_sched.length; // * Update the schedule into the firebase document

      sched_doc.ref.update({
        "schedule": new_schedule,
        "options": options
      }).then(function () {
        ok_upd8++;
      })["catch"](function (er) {
        errors_updating.push(er);
      });
    });
    return res.status(200).send({
      "success": true,
      "updated_schedules": updated_scheds,
      "deleted_schedules": deleted_scheds,
      "errors_updating": errors_updating,
      "success_updating": ok_upd8,
      "failed_updating": ok_upd8 - errors_updating.length,
      "total_deleted": total_del
    });
  })["catch"](function (err) {
    console.log(err);
  });
}, 3600 * 1000 * HOURS); // * rutas de fixing 
// ! BORRARLAS DESPUES DE TERMINAR SU USO

app.post("/fix/users", fixAllUsers);
app.post("/fix/sessions", fixAllSessions);
app.post("/fix/therapists", fixAllTherapists);
app.post("/fix/therapists/img", fixAllTherapistsImage);
app.post("/fix/blogs", fixAllBlogs); // * export de la api

exports.api = functions.region("us-central1").https.onRequest(app);