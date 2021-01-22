const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');


exports.getSession = (req, res) => {
    sess.doc(req.params.sid)
        .get()
        .then((doc) => {
            res.send(doc.data())
        })
}