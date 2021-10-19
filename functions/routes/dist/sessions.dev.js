"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var users = db.collection('users');
var thers = db.collection('therapists');
var schedules = db.collection('schedules');
var sess = db.collection('sessions');

exports.getSession = function (req, res) {
  sess.doc(req.params.sid).get().then(function (doc) {
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error obteniendo el session document', error);
    return res.status(404).send(error);
  });
};

exports.newSession = function (req, res) {
  var _req$body$sessiondata = req.body.sessiondata,
      therapist = _req$body$sessiondata.therapist,
      start = _req$body$sessiondata.start;
  sess.add(req.body.sessiondata).then(function (doc) {
    // * Actualizar el schedule del terapeuta
    schedules.doc(therapist).get().then(function (docsched) {
      var sched = docsched.data().schedule; // * Obtener el index de la fecha

      var ind = sched.indexOf(start);

      if (ind > -1) {
        // * Borrar el schedule 
        sched.slice(ind, 1); // * Subir el nuevo schedule

        docsched.ref.update({
          schedule: sched
        }).then(function () {
          console.log("Schedule actualizada");
          return res.status(201).send({
            id: doc.id
          });
        })["catch"](function (er) {
          return res.status(400).send({
            code: er.code,
            message: er.message
          });
        });
      }
    })["catch"](function (er) {
      return res.status(400).send({
        code: er.code,
        message: er.message
      });
    });
  })["catch"](function (error) {
    console.log("Unable to create new session", error);
    return res.status(404).send(error);
  });
};

exports.updateSession = function (req, res) {
  sess.doc(req.params.sid).update(req.body.sessiondata).then(function () {
    console.log('Sesion actualizada con exito!');
    return res.status(204);
  })["catch"](function (error) {
    console.log('Error actualizando el session document', error);
    return res.status(404).send(error);
  });
};

exports.deleteSession = function (req, res) {
  sess.doc(req.params.sid)["delete"]().then(function () {
    console.log('Sesion cancelada con exito!');
    return res.status(204);
  })["catch"](function () {
    console.error('Error borrando el documento de sesion', error);
    return res.status(404).send(error);
  });
};