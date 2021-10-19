
const admin = require("firebase-admin");
const serviceAccount = require("./sanus-5ce83-firebase-adminsdk-ex6jo-19e3a47885.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const storage = admin.storage();

module.exports = { admin, storage };