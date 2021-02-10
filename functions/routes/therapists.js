const { admin } = require('../firebase');
var db = admin.firestore();
const users = db.collection('users');
const ther = db.collection('therapists');
const sess = db.collection('sessions');
const blogs = db.collection('blogs');

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
        .catch(error => {
            console.log('Error al obtener terapeutas!', error);
            return res.status(404).send(error)
        })
}

exports.getPatientsbyTherapists = (req,res) => {
    users
        .where("therapist", "==", req.params.tid)
        .get()
        .then(query => {
            var data = [];

            query.forEach(doc => {
                data.push(doc.data());
            })

            return res.status(200).send(data)
        })
        .catch(error => {
            console.log('No fue posible obtener la información de usuarios asignados')
            return res.status(404).send(error)
        })
}

exports.newTherapist = (req, res) => {
    ther.set(req.body.data)
        .then(doc => {
            console.log('Terapeuta agregado a la base de datos');
            return res.status(201).send(doc.id);
        })
        .catch(error => {
            console.log('Error al crear terapeuta!', error);
            return res.status(404).send(error)
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
        .catch(error => {
            console.log('Error al obtener terapeutas!', error);
            return res.status(404).send(error)
        })
}

exports.getTherapist = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    ther.doc(req.params.tid)
        .get()
        .then((doc) => {
            res.status(200).send(doc.data())
        })
        .catch(error => {
            console.log('Error al obtener terapeuta!', error);
            return res.status(404).send(error)
        })
}

exports.getAllSessionsByTherapist = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    // * function exclusiva de terapeuta
    sess.where('therapist', '==', req.params.tid)
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
        .catch(error => {
            console.log('Error al obtener sesiones terapeuta!', error);
            return res.status(404).send(error)
        })
}