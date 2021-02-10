
const admin = require("firebase-admin");

const serviceAccount = require("./iknelia-3cd8e-firebase-adminsdk-tvnqs-e15e084561.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = { admin };