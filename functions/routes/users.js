const { admin } = require('../firebase');
var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');

exports.getAllUsers = function (req, res) {
    users
        .get()
        .then( query => {
            var data = [];
            var refs = [];
            query.forEach( doc => {
                data.push(doc.data());
                refs.push(doc.id.toString());
            })
            
            console.log('Datos de usuarios obtenidos correctamente!');
            return res.status(200).send([refs, data]);
        })
        .catch( error => {
            console.error('Error obteniendo los usuarios', error);
            return res.status(404).send(error);
        })
}

exports.getUser = (req, res) => {
    users
        .doc(req.params.uid)
        .get()
        .then( doc => {
            console.log('Datos de usuario obtenidos correctamente!');
            return res.status(200).send(doc.data());
        })
        .catch( error => {
            console.error('Error obteniendo los datos de usuario', error);
            return res.status(404).send(error);
        })
}

exports.getTherapistByUser = (req, res) => {
    users
        .doc(req.params.uid)
        .get()
        .then( doc => {
            const ther_id = doc.data().therapist;
            ther
                .doc(ther_id)
                .get()
                .then( docther => {
                    console.log('Datos de terapeuta obtenidos correctamente!');
                    return res.status(200).send([ther_id, docther.data()])
                })
                .catch( error => {
                     console.error('Error obteniendo los datos del terapeuta', error);
                     return res.status(404).send(error);
                })
        })
}

exports.getAllSessionsByUser = (req, res) => {
    sess
        .where('patient', '==', req.params.uid)
        .get()
        .then( query => {
            const data = [];
            const refs = []
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.id.toString());
            })

            console.log('Datos de sesiones obtenidos correctamente!');
            return res.status(200).send([refs, data]);
        })
        .catch( error => {
            console.error('Error obteniendo los datos de sesiones', error);
            return res.status(404).send(error);
        })
}