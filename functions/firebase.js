
const admin = require("firebase-admin");
const { Storage } = require("@google-cloud/storage");
const serviceAccount = require("./iknelia-3cd8e-firebase-adminsdk-tvnqs-e15e084561.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const storage = new Storage(serviceAccount);

module.exports = { admin, storage };