"use strict";

var functions = require("firebase-functions");

var admin = require("firebase-admin");

admin.initializeApp(); // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getTherapists = functions.https.onRequest(function (req, res) {
  admin.firestore().collection("therapists").get().then(function (querySnapshot) {
    var therapists_data = [];
    var therapists_refs = [];
    querySnapshot.forEach(function (doc) {
      therapists_data.push(doc.data());
      therapists_refs.push(doc.ref);
    });
    return res.json(therapists_data);
  });
});