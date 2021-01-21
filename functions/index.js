const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp()
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.getTherapists = functions.https.onRequest((req, res) => {
    admin
        .firestore()
        .collection("therapists")
        .get()
        .then((querySnapshot) => {
            let therapists_data = []
            let therapists_refs = []
            querySnapshot.forEach((doc) => {
                therapists_data.push(doc.data())
                therapists_refs.push(doc.ref)
            })
            return res.json(therapists_data)
        })
})