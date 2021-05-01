"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../firebase'),
    admin = _require.admin,
    storage = _require.storage;

var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var blogs = db.collection('blogs');
var schedules = db.collection("schedules");

var stripe = require('stripe')(["sk_test_51IRM5vEkM6QFZKw2N9Ow9xCKwSd2b8J3JjWb2BL9kH5FVCXvJ5fSmFW6GvJot90XsUdgSfbtpPraG5u9Kmycvi5C00HIcjkWgG", "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"][0]); // * Get therapist info


exports.getAllTherapists = function _callee(req, res) {
  var data, refs, links, bucket;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = [];
          refs = [];
          links = [];
          bucket = storage.bucket("iknelia-3cd8e.appspot.com");
          ther.get().then(function (query) {
            query.docs.forEach(function (doc) {
              docdata = doc.data();
              data.push(docdata);
              refs.push(doc.id.toString());
            });
            data.forEach(function (doc) {
              var imgref = doc.img;
              var stor_file = bucket.file(imgref !== undefined ? imgref : 'terapeutas/placeholders/2.jpg');
              stor_file.getSignedUrl({
                version: 'v4',
                action: 'read',
                expires: Date.now() + 30 * 60 * 1000 // 30 minutes   

              }).then(function (sURL) {
                console.log(sURL[0][0]);
                links.push(sURL[0]);
              });
            });
            console.log("Links cargados");
          })["catch"](function (error) {
            console.log('Error al obtener terapeutas!', error);
            return res.status(404).send(error);
          })["finally"](function () {
            setTimeout(function () {
              res.status(200).send({
                id: refs,
                data: data,
                urls: links
              });
            }, 100);
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getPatientsbyTherapist = function (req, res) {
  var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
  users.where("therapist", "==", req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    var urls = [];
    query.forEach(function (doc) {
      var docdata = doc.data();
      data.push(docdata);
      refs.push(doc.id.toString());
      var stor_file = bucket.file(docdata.img ? docdata.img : "usuarios/placeholders/none-user.png");
      stor_file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 30 * 60 * 1000 // 30 minutes   

      }).then(function (sURL) {
        urls.push(sURL[0]);
      })["catch"](function (er) {
        console.log("Error leyendo el link de la imagen");
        return res.status(400).send(er);
      });
    });
    res.status(200).send({
      id: refs,
      data: data,
      url: urls
    }); //setTimeout(20, () => res.status(200).send({ id: refs, data: data, url: urls }))
  })["catch"](function (error) {
    console.log('No fue posible obtener la información de usuarios asignados');
    return res.status(404).send(error);
  });
};

exports.getPatientsImageByTherapist = function (req, res) {
  users.where("therapist", "==", req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.log('No fue posible obtener la información de usuarios asignados');
    return res.status(404).send(error);
  });
};

exports.getTherapist = function (req, res) {
  ther.doc(req.params.tid).get().then(function (doc) {
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error al obtener terapeuta!', error);
    return res.status(404).send(error);
  });
};

exports.getSchedule = function (req, res) {
  schedules.doc(req.params.tid).get().then(function (doc) {
    return res.status(200).send(_objectSpread({}, doc.data()));
  })["catch"](function (er) {
    return res.status(400).send(er);
  });
};

exports.setSchedule = function (req, res) {
  schedules.doc(req.params.tid).set({
    schedule: req.body.schedule,
    options: req.body.options
  }).then(function () {
    return res.status(201).send({
      result: true,
      message: "Schedule actualizada correctamente"
    });
  })["catch"](function (er) {
    return res.status(400).send(er);
  });
};

exports.getAllSessionsByTherapist = function (req, res) {
  sess.where('therapist', '==', req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id);
    });
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.log('Error al obtener sesiones terapeuta!', error);
    return res.status(404).send(error);
  });
};

exports.getAllUncompletedSessionsByTherapist = function (req, res) {
  sess.where('therapist', '==', req.params.tid).where('state', '==', 0).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id);
    });
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.log('Error al obtener sesiones terapeuta!', error);
    return res.status(404).send(error);
  });
}; // * Obtener notas del terapeuta


exports.getNotesByTherapist = function (req, res) {
  console.log("obteniendo notas");
  ther.doc(req.params.tid).get().then(function (doc) {
    var notes_ref = doc.ref.collection("notes");
    notes_ref.get().then(function (query) {
      var data = [];
      var refs = [];
      query.forEach(function (doc) {
        data.push(doc.data());
        refs.push(doc.id.toString());
      });
      return res.status(200).send({
        id: refs,
        data: data
      });
    })["catch"](function (error) {
      console.error("Error obteniendo las notas del terapeuta", error);
      return res.status(404).send(error);
    });
  })["catch"](function (error) {
    console.error("Error obteniendo los datos del terapeuta", error);
    return res.status(404).send(error);
  });
}; //** Crear una nueva nota */


exports.newNote = function (req, res) {
  console.log('Creando nota');
};

exports.uploadTherImg = function (req, res) {
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

exports.getAllTherImage = function (req, res) {
  // * Demo for image upload
  var t_list = req.body.thers;
  console.log(t_list);
  var urls = [];
  var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = t_list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var t = _step.value;
      ther.doc(t).get().then(function (doc) {
        var imgref = doc.data().img;
        var stor_file = bucket.file(imgref !== undefined ? imgref : 'terapeutas/placeholders/2.jpg');
        stor_file.getSignedUrl({
          version: 'v4',
          action: 'read',
          expires: Date.now() + 30 * 60 * 1000 // 30 minutes   

        }).then(function (sURL) {
          urls.push(sURL[0]);
        })["catch"](function (er) {
          console.log("Error leyendo el link de la imagen");
          return res.status(400).send(er);
        });
      })["catch"](function (er) {
        console.log("Error leyendo el documento del terapeuta");
        return res.status(400).send(er);
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return res.status(200).send({
    urls: urls
  });
};

exports.getTherImage = function (req, res) {
  // * Demo for image upload
  var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
  ther.doc(req.params.tid).get().then(function (doc) {
    var imgref = doc.data().img;
    var stor_file = bucket.file(imgref !== undefined ? imgref : 'terapeutas/placeholders/2.jpg');
    stor_file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + 30 * 60 * 1000 // 30 minutes   

    }).then(function (sURL) {
      return res.status(200).send({
        url: sURL[0]
      });
    })["catch"](function (er) {
      console.log("Error leyendo el link de la imagen");
      return res.status(400).send(er);
    });
  })["catch"](function (er) {
    console.log("Error leyendo el documento del terapeuta");
    return res.status(400).send(er);
  });
};

exports.handleAccountUpdate = function (req, res) {
  console.log("Recibiendo account update");
  var sig = req.headers['stripe-signature']; // @Signature de la API de Stripe

  var endpoint_secret = ["whsec_KuPDxetqqKx0DO12qmhsjQZrvfP8NU0L", // * LIVE mode
  "whsec_ZBv8dScsRtH1S36P3AllVEhr3vA1HnJf" // * TEST mode
  ][1];
  var event; // @ Lee la información enviada

  try {
    /* 
      * Se construye unevento a traves de stripe pasando como argumentos:
        @ Signature de stripe
        @ secreto del endpoint
        @ Informacion obtenida del POST
    */
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpoint_secret);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send("Webhook Error: ".concat(err.message));
  }

  console.log('Se recibió el evento');

  switch (event.type) {
    case 'account.updated':
      var _event$data$object = event.data.object,
          id = _event$data$object.id,
          charges_enabled = _event$data$object.charges_enabled;
      console.log("charges_enabled", charges_enabled);
      ther.where("stripeId", "==", id).get().then(function (query) {
        query.forEach(function (doc) {
          console.log("Cuenta encontrada: ".concat(doc.id));
          doc.ref.update({
            charges_enabled: charges_enabled
          }).then(function () {
            console.log("Cuenta actualizada!");
            return res.status(200).send({
              "received": true
            });
          });
        });
      });

    default:
      console.log('Unhandled type event', event.type);
      break;
  }

  return res.status(200).send({
    received: true
  });
};