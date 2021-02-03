"use strict";

var _require = require('../firestore'),
    db = _require.db;

var ther = db.collection('therapists');

exports.getAllBlogs = function (req, res) {
  ther.orderBy("date", "desc").get().then(function (query) {
    var data = [];
    query.forEach(function (doc) {
      data.push(doc.data());
    });
    return res.status(200).send(data);
  });
};

exports.getBlog = function (req, res) {};

exports.newBlog = function (req, res) {};

exports.deleteBlog = function (req, res) {};

exports.updateBlog = function (req, res) {};