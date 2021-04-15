"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var ther = db.collection('therapists');
var blogs = db.collection('blogs');
var storage = admin.storage();

exports.getAllBlogs = function (req, res) {
  blogs.orderBy('date', 'desc').get().then(function (query) {
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
    console.log('Error obteniendo todos los blog documents', error);
    return res.status(404).send(error);
  });
};

exports.getLandBlogs = function (req, res) {
  // * Obtiene los blogs más recientes
  blogs.orderBy('date', 'desc').limit(3).get().then(function (query) {
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
    console.log('Error obteniendo todos los blog documents', error);
    return res.status(404).send(error);
  });
};

exports.getAllBlogsByTherapist = function (req, res) {
  blogs.where('author', '==', req.params.tid) // .orderBy('date', 'desc')
  .get().then(function (query) {
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
    console.log('Error obteniendo los blog documents del terapeuta', error);
    return res.status(404).send(error);
  });
};

exports.getBlog = function (req, res) {
  blogs.doc(req.params.bid).get().then(function (doc) {
    return res.status(200).send(doc.data());
  })["catch"](function (error) {
    console.log('Error obteniendo el blog document', error);
    return res.status(404).send(error);
  });
};

exports.newBlog = function (req, res) {
  blogs.add(req.body.blogdata).then(function (blogdoc) {
    var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
    var stored_img = bucket.file("usuarios/".concat(req.params.tid, ".png"));
    req.body.blogdata.imgBLOG;
    /*
    // actualizar campo de id
     ! no sirve por lo pronto,
     TODO: Arreglar el upload de la foto
    blogdoc
        .update({
            id: blogdoc.id
        })
        .then(() => {
            console.log('Campo ID: actualizado!\nCampo IMG: actualizado!')
        })
        .catch(error => {
            console.log('Error actualizando blog document', error);
            return res.status(404).send(error);
        }) 
      */
  })["catch"](function (error) {
    console.log('Error creando el blog document', error);
    return res.status(404).send(error);
  });
};

exports.deleteBlog = function (req, res) {
  blogs.doc(req.params.bid)["delete"]().then(function () {
    console.log('Se borro el blog document exitosamente!');
    return res.status(204);
  })["catch"](function (error) {
    console.log('Error borrando el blog document', error);
    return res.status(404).send(error);
  });
};

exports.updateBlog = function (req, res) {
  blogs.doc(req.params.bid).update(req.body.blogdata).then(function () {
    console.log('Acutalización del blog document exitosa!');
    return res.status(201).send({
      message: "Blog editado correctamente",
      bid: req.params.bid
    });
  })["catch"](function (error) {
    return res.status(404).send(error);
  });
};