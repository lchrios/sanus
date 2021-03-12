const { admin } = require('../firebase');
var db = admin.firestore();
const users = db.collection('users');
const ther = db.collection('therapists');
const sess = db.collection('sessions');
const blogs = db.collection('blogs');

// * Get therapist info
exports.getAllTherapists = (req, res) => {
    ther
        .get()
        .then((query) => {
            var data = [];
            var refs = [];
            query.forEach( doc => {
                data.push(doc.data());
                refs.push(doc.id.toString());
            })

            res.status(200).send({ id: refs, data: data })
        })
        .catch(error => {
            console.log('Error al obtener terapeutas!', error);
            return res.status(404).send(error)
        })
}

exports.getPatientsbyTherapist = (req,res) => {
    users
        .where("therapist", "==", req.params.tid)
        .get()
        .then(query => {
            var data = [];
            var refs = [];
            query.forEach(doc => {
                data.push(doc.data());
                refs.push(doc.id.toString());
            })

            return res.status(200).send({ id: refs, data: data })
        })
        .catch(error => {
            console.log('No fue posible obtener la información de usuarios asignados')
            return res.status(404).send(error)
        })
}

exports.getTherapist = (req, res) => {
    ther
        .doc(req.params.tid)
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
    sess
        .where('therapist', '==', req.params.tid)
        .get()
        .then((query) => {
            const data = [];
            const refs = [];
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.ref);
            })
            res.status(200).send({ id: refs, data: data })
        })
        .catch(error => {
            console.log('Error al obtener sesiones terapeuta!', error);
            return res.status(404).send(error)
        })
}


// * Obtener notas del terapeuta
exports.getNotesByTherapist = (req, res) => {
    console.log("obteniendo notas")
    ther.doc(req.params.tid)
        .get()
        .then(doc => {
            const notes_ref = doc.ref.collection("notes");
            notes_ref
                .get()
                .then(query => {
                    const data = [];
                    const refs = [];

                    query.forEach(doc => {
                        data.push(doc.data());
                        refs.push(doc.id.toString());
                    })

                    return res.status(200).send({ id: refs, data: data })
                })
                .catch(error => {
                    console.error("Error obteniendo las notas del terapeuta", error);
                    return res.status(404).send(error);
                })
        })
        .catch(error => {
            console.error("Error obteniendo los datos del terapeuta", error);
            return res.status(404).send(error);
        })
}

//** Crear una nueva nota */
exports.newNote = (req,res) => {
    console.log('Creando nota')
}