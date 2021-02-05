const { db } = require('../firestore')
const users = db.collection('users');
const ther = db.collection('therapists');
const sess = db.collection('sessions');

exports.getAllUsers = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    users.get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.status(200).send(data)
        })
}

exports.getUser = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    users.doc(req.params.pid)
        .get()
        .then((doc) => {
            res.status(200).send(doc.data())
        })
}

exports.getTherapistByUser = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    users.doc(req.params.pid)
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

exports.getTherapistRefByUser = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    users.doc(req.params.pid)
        .get()
        .then((doc) => {
            const ther_id = doc.data().therapist;
            ther.doc(ther_id)
                .get()
                .then((docter) => {
                    res.status(200).send(docter.id.toString())
                })
        })
}

exports.getAllSessionsByUser = (req, res) => {
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