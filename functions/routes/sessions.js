const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');


exports.getSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.doc(req.params.sid)
        .get()
        .then((doc) => {
            res.status(204).send(doc.data())
        })
}