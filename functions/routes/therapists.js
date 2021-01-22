const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');

// Get therapist info
exports.getAllTherapists = (req, res) => {
    ther.get()
        .then((query) => {
            var data = [];
            const refs = [];
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.ref);
            })
            
            res.send({data: data, dbrefs: refs})
        })
}

exports.getTherapist = (req, res) => {
    ther.doc(req.params.tid)
        .get()
        .then((doc) => {
            res.send(doc.data())
        })
}

exports.getAllSessionsByTherapist = (req, res) => {
    sess.where('therapist_id', '==', req.params.pid)
        .get()
        .then((query) => {
            const data = [];
            const refs = [];
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.ref);
            })
            res.send(data)
        })
}