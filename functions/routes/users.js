const { admin } = require('../firebase');
var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getAllUsers = (req, res) => {
    users
        .get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.status(200).send(data)
        });
}

exports.getAllUsers = function (req, res) {
    users
        .get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.status(200).send(data)
        });
}

exports.getUser = (req, res) => {
    users.doc(req.params.uid)
        .get()
        .then((doc) => {
            res.status(200).send(doc.data())
        })
}

exports.getTherapistByUser = (req, res) => {
    users.doc(req.params.uid)
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
    users.doc(req.params.uid)
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
    sess.where('patient', '==', req.params.uid)
        .get()
        .then((query) => {
            const data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            res.status(200).send(data)
        })
}