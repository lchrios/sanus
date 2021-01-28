"use strict";

var firebase = require('firebase');

var config = require('config');

firebase.initializeApp(config);
var db = firebase.firestore();
var auth = firebase.auth();
module.exports = {
  firebase: firebase,
  db: db,
  auth: auth
};