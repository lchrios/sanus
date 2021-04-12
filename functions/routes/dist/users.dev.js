"use strict";

var _require = require('../firebase'),
    admin = _require.admin,
    storage = _require.storage;

var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var tests = db.collection("tests");
var schedules = db.collection("schedules");

exports.getAllUsers = function (req, res) {
  users.get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    console.log('Datos de usuarios obtenidos correctamente!');
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.error('Error obteniendo los usuarios', error);
    return res.status(404).send(error);
  });
};

exports.getUser = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    console.log('Datos de usuario obtenidos correctamente!');
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.error('Error obteniendo los datos de usuario', error);
    return res.status(404).send(error);
  });
};

exports.getTherapistByUser = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    var ther_id = doc.data().therapist;

    if (ther_id === undefined) {
      console.log("No hay terapeuta");
      return res.status(204).send({});
    } else {
      ther.doc(ther_id).get().then(function (docther) {
        console.log('Datos de terapeuta obtenidos correctamente!');
        return res.status(200).send({
          id: ther_id,
          data: docther.data()
        });
      })["catch"](function (error) {
        console.error('Error obteniendo los datos del terapeuta', error);
        return res.status(404).send(error);
      });
    }
  });
};

exports.getTherapistSchedule = function (req, res) {
  users.doc(req.params.uid).get().then(function (doc) {
    schedules.doc(doc.data().therapist).get().then(function (docSched) {
      if (docSched.exists) {
        var data = docSched.data();
        return res.status(200).send({
          schedule: data.schedule !== undefined ? data.schedule : undefined,
          options: data.options
        });
      } else {
        return res.status(204).send({});
      }
    })["catch"](function (er) {
      return res.status(400).send(er);
    });
  })["catch"](function (er) {
    return res.status(400).send(er);
  });
};

exports.getAllSessionsByUser = function (req, res) {
  sess.where('user', '==', req.params.uid) //.orderBy("date", "desc")
  .get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    console.log('Datos de sesiones obtenidos correctamente!');
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.error('Error obteniendo los datos de sesiones', error);
    return res.status(404).send(error);
  });
};

exports.assignTherapist = function (req, res) {
  console.log("Reasignando terapeuta ".concat(req.params.tid));
  users.doc(req.params.uid).update({
    therapist: req.params.tid
  }).then(function () {
    console.log('Terapeuta asignado correctamente');
    return res.status(201).send();
  })["catch"](function (error) {
    console.error('Error actualizando el terapeuta del usuario', error);
    return res.status(404).send(error);
  });
};

exports.newTestAnswers = function (req, res) {
  tests.add(req.body.answers).then(function (doc) {
    console.log("Nueva entrada de respuestas creada correctamente!");
    return res.status(203).send(doc.id);
  })["catch"](function (error) {
    console.log("Error creando el registro de respuesta!");
    console.error(error);
    return res.status(404).send(error);
  });
};

exports.uploadImg = function (req, res) {
  console.log("Subiendo imagen del usuario ".concat(req.params.uid));
  console.log(req.body.file);

  if (!req.files || Object.keys(req.files).length === 0) {
    console.log("No hay archivos :C");
    return res.status(400).send({
      success: false,
      message: 'No files were uploaded'
    });
  }

  var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
  var stored_img = bucket.file("usuarios/".concat(req.params.uid, ".").concat(req.file.name.split(".")[1]));
  var blobStream = stored_img.createWriteStream();
  blobStream.on('error', function (error) {
    console.log('Something is wrong! Unable to upload at the moment.' + error);
  });
  blobStream.on('finish', function () {
    var imgURL = "https://storage.googleapis.com/".concat(bucket.name, "/").concat(stored_img.name); //image url from firebase server

    console.log(imgURL);
    auth.updateUser(user.uid, {
      photoURL: imgURL
    }).then(function () {
      return res.status(200).send({
        success: true,
        message: 'File was uploaded',
        imgURL: imgURL
      });
    })["catch"](function (er) {
      return res.status(400).send(er);
    });
  });
  blobStream.end(req.file.buffer);
};

exports.getUserImage = function (req, res) {
  // * Demo for image uploa
  var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
  users.doc(req.params.uid).get().then(function (doc) {
    var data = doc.data();
    var stor_file = bucket.file(data.img);
    stor_file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 30 * 60 * 1000 // 15 minutes

    }).then(function (sURL) {
      return res.status(200).send({
        url: sURL[0]
      });
    })["catch"](function (er) {
      return res.status(404).send(er);
    });
  });
};

exports.submitTest = function (req, res) {
  // Validar que el usuario no haya contestado antes
  tests.doc(req.params.uid).set(req.body.testdata).then(function (doc) {
    users.doc(req.params.uid).update({
      "answered": true
    }).then(function () {
      return res.status(201).send({
        message: "Respuestas registradas",
        id: doc.id
      });
    })["catch"](function (er) {
      return res.status(400).send(er);
    });
  })["catch"](function (er) {
    return res.status(400).send(er);
  });
};

exports.getUserPayed = function (req, res) {
  sess.where("payed", "==", false).where("user", "==", req.params.uid).get().then(function (query) {
    return res.status(200).send({
      payed: query.empty
    });
  })["catch"](function (er) {
    return res.status(500).send(er);
  });
};