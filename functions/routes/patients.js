const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');

exports.getAllPatients = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    pats.get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.status(200).send(data)
        })
}

exports.getPatient = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    pats.doc(req.params.pid)
        .get()
        .then((doc) => {
            res.status(200).send(doc.data())
        })
}

exports.getTherapistByPatient = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    pats.doc(req.params.pid)
        .get()
        .then((doc) => {
            const ther_id = doc.data().therapist;
            ther.doc(ther_id)
                .get()
                .then((docter) => {
                    res.status(200).send(docter.data())
                })
        })
}

exports.getAllSessionsByPatient = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.where('patient_id', '==', req.params.pid)
        .get()
        .then((query) => {
            const data = [];
            const refs = [];
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.ref);
            })
            res.status(200).send(data)
        })


