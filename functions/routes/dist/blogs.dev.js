"use strict";

var _require = require('../firebase'),
    admin = _require.admin;

var db = admin.firestore();
var ther = db.collection('therapists');
var blogs = db.collection('blogs');

exports.getAllBlogs = function (req, res) {
  blogs.orderBy('date', 'desc').get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    return res.status(200).send([refs, data]);
  })["catch"](function (error) {
    console.log('Error obteniendo todos los blog documents', error);
    return res.status(404).send(error);
  });
};

exports.getAllBlogsByTherapist = function (req, res) {
  blogs.where('author', '==', req.params.tid) //.orderBy('date', 'desc')
  .get().then(function (query) {
    var data = [];
    var refs = [];
    query.forEach(function (doc) {
      data.push(doc.data());
      refs.push(doc.id.toString());
    });
    return res.status(200).send([refs, data]);
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
    /*
        // subir imagen
    const toUpload = req.body.blogdata.img;
    const metadata = { contentType: file.type };
      var imgurl = "";
    firebase.storage().ref("/blogs/" + blogdoc.id)
        .put(toUpload, metadata)
        .then(snapshot => {
            imgurl = snapshot.ref.getDownloadURL()                    
        })
        .then(url => {
            console.log(url);
        }) 
        */
    // actualizar campo de id
    blogdoc.update({
      id: blogdoc.id
    }).then(function () {
      console.log('Campo ID: actualizado!\nCampo IMG: actualizado!');
    })["catch"](function (error) {
      console.log('Error actualizando blog document', error);
      return res.status(404).send(error);
    }); // actualiar campos de terapeuta

    author = ther.doc(req.body.blogdata.author);
    author.get().then(function (doc) {
      upblogs = doc.data().blogs;
      upblogs.push(blogdoc.id);
      author.update({
        blogs: upblogs
      }).then(function () {
        return res.status(201).send(doc.id);
      })["catch"](function (error) {
        console.log('Error actualizando el campo blogs en author document', error);
        return res.status(404).send(error);
      });
    })["catch"](function (error) {
      console.log('Error obteniendo author document', error);
      return res.status(404).send(error);
    });
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
    return res.status(204);
  })["catch"](function (error) {
    return res.status(404).send('Error al actualizar el blog document', error);
  });
};