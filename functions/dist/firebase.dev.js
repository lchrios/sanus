"use strict";

var admin = require("firebase-admin");

var serviceAccount = require("./sanus-5ce83-firebase-adminsdk-ex6jo-19e3a47885.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
var storage = admin.storage();
module.exports = {
  admin: admin,
  storage: storage
};