"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var notes = db.collection("notes");
var ther = db.collection('therapists');

exports.getAllNotesByTherapist = function (req, res) {
  notes.where("author", "==", req.params.tid).get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    console.log("Datos de las notas obtenidos correctamente!");
    return res.status(200).send({
      id: refs,
      data: data
    });
  })["catch"](function (error) {
    console.error("Error al obtener las notas del terapeuta", error);
    return res.status(404).send(error);
  });
};

exports.getNote = function (req, res) {
  notes.doc(req.params.nid).get().then(function (doc) {
    console.log("Datos de la nota obtenidos correctamente!");
    return res.status(200).send({
      id: doc.id.toString(),
      data: doc.data()
    });
  })["catch"](function (error) {
    console.error("Error al obtener la nota del terapeuta", error);
    return res.status(404).send(error);
  });
};

exports.newNote = function (req, res) {
  notes.add(req.body.notedata).then(function (doc) {
    console.log("Nota creada exitosamente");
    author = ther.doc(req.body.blogdata.author);
    author.get().then(function (doc) {
      mynotes = doc.data().notes;
      mynotes.push(doc.id);
      author.update({
        notes: mynotes
      }).then(function () {
        console.log("Añadida al autor exitosamente!");
        return res.status(201).send(doc.id);
      })["catch"](function (error) {
        console.log('Error actualizando el campo notes en author document', error);
        return res.status(404).send(error);
      });
    })["catch"](function (error) {
      console.log('Error obteniendo author document', error);
      return res.status(404).send(error);
    });
  })["catch"](function (error) {
    console.log('Error creando el note document', error);
    return res.status(404).send(error);
  });
};

exports.deleteNote = function (req, res) {
  notes.doc(req.params.nid)["delete"]().then(function () {
    console.log('Se borro el note document exitosamente!');
    return res.status(204);
  })["catch"](function (error) {
    console.log('Error borrando el note document', error);
    return res.status(404).send(error);
  });
};

exports.updateNote = function (req, res) {
  notes.doc(req.params.nid).update(req.body.notedata).then(function () {
    console.log('Acutalización del note document exitosa!');
    return res.status(204);
  })["catch"](function (error) {
    return res.status(404).send('Error al actualizar el note document', error);
  });
};