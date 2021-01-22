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

exports.getTherapistRefByPatient = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    pats.doc(req.params.pid)
        .get()
        .then((doc) => {
            const ther_id = doc.data().therapist;
            ther.doc(ther_id)
                .get()
                .then((docter) => {
                    res.status(200).send(docter.id)
                })
        })
}

exports.getAllSessionsByPatient = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.where('patient', '==', req.params.pid)
        .get()
        .then((query) => {
            const data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            res.status(200).send(data)
        })
}