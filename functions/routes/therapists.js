const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');

// Get therapist info
exports.getAllTherapists = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    ther.get()
        .then((query) => {
            var datas = [];
            query.forEach((doc) => {
                datas.push(doc.data());
            })
            
            res.status(200).send(datas)
        })
}

exports.newTherapist = (req, res) => {
    ther.set(req.body.data)
        .then(doc => {
            firebase.firestore()
                .collection('patients')
                .doc(user.uid)
                .get()
                .then(docRole => {
                    setDbRef(docRole.ref)
                })              
        })
}

exports.getAllTherapistsRefs = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    ther.get()
        .then((query) => {
            var datas = [];
            query.forEach((doc) => {
                datas.push(doc.id);
            })   
            res.status(200).send(datas)
        })
}

exports.getTherapist = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    ther.doc(req.params.tid)
        .get()
        .then((doc) => {
            res.status(200).send(doc.data())
        })
}

exports.getAllSessionsByTherapist = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.where('therapist', '==', req.params.pid)
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
}