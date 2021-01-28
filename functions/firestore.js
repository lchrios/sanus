const firebase = require('firebase');
const config = require('config');

firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

module.exports = { firebase, db, auth };