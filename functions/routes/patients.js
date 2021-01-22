const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');

exports.getAllPatients = (req, res) => {
    pats.get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.send(data)
        })
}

exports. getPatient = (req, res) => {
    pats.doc(req.params.pid)
        .get()
        .then((doc) => {
            res.send(doc.data())
        })
}

exports.getAllSessionsByPatient = (req, res) => {
    sess.where('patient_id', '==', req.params.pid)
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



