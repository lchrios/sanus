const { admin, storage } = require('../firebase');
var db = admin.firestore();
var users = db.collection('users');
var ther = db.collection('therapists');
var sess = db.collection('sessions');
var tests = db.collection("tests");


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
            return res.status(200).send({ id: refs, data: data });
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
    res.header("Access-Control-Allow-Origin", "*");
    users
        .doc(req.params.uid)
        .get()
        .then( doc => {
            const ther_id = doc.data().therapist;
            if (ther_id == null) {
                console.log("No hay terapeuta");
                return res.status(204).send({});
            } else {
                ther
                .doc(ther_id)
                .get()
                .then( docther => {
                    console.log('Datos de terapeuta obtenidos correctamente!');
                    return res.status(200).send({ id: ther_id, data: docther.data() })
                })
                .catch( error => {
                     console.error('Error obteniendo los datos del terapeuta', error);
                     return res.status(404).send(error);
                })
            }
            
        })
}

exports.getAllSessionsByUser = (req, res) => {
    sess
        .where('patient', '==', req.params.uid)
        .orderBy('date', 'desc')
        .get()
        .then( query => {
            const data = [];
            const refs = []
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.id.toString());
            })

            console.log('Datos de sesiones obtenidos correctamente!');
            return res.status(200).send({ id: refs, data: data });
        })
        .catch( error => {
            console.error('Error obteniendo los datos de sesiones', error);
            return res.status(404).send(error);
        })
}

exports.assignTherapist = (req, res) => {
    console.log(`Reasignando terapeuta ${req.params.tid}`)
    users
        .doc(req.params.uid)
        .update({ therapist: req.params.tid })
        .then(() => {
            console.log('Terapeuta asignado correctamente');
            return res.status(201);
        })
        .catch( error => {
            console.error('Error actualizando el terapeuta del usuario', error);
            return res.status(404).send(error);
        })      
}


exports.newTestAnswers = (req, res) => {
    tests.add(req.body.answers)
        .then( doc => {
            console.log("Nueva entrada de respuestas creada correctamente!");
            return res.status(203).send(doc.id);
        })
        .catch( error => {
            console.log("Error creando el registro de respuesta!");
            console.error(error);
            return res.status(404).send(error);
        })
}

exports.uploadImg = (req, res) => {
    console.log(`Subiendo imagen del usuario ${req.params.uid}`)
    console.log(req.body.file)
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log("No hay archivos :C")
        return res.status(400).send({
            success: false,
            message: 'No files were uploaded',
        });
    }
    
    var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
    var stored_img = bucket.file(`usuarios/${req.params.uid}.${req.file.name.split(".")[1]}`)
    
    const blobStream = stored_img.createWriteStream()

    blobStream.on('error', (error) => {
        console.log('Something is wrong! Unable to upload at the moment.' + error);
    });

    blobStream.on('finish', () => {
        var imgURL = `https://storage.googleapis.com/${bucket.name}/${stored_img.name}`; //image url from firebase server
        console.log(imgURL);
        auth.updateUser(user.uid, {
            photoURL: imgURL,
        })
        .then(() => {
            return res.status(200).send({
                success: true,
                message: 'File was uploaded',
                imgURL: imgURL,
            });
            
        })
        .catch( er => {
            return res.status(400).send(er);
        })
    });

    blobStream.end(req.file.buffer);
}

exports.getUserImage = (req, res) => { // * Demo for image upload

    var bucket = storage.bucket("iknelia-3cd8e.appspot.com");
    var stor_file = bucket.file('usuarios/placeholders/face-1.png');
    stor_file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + 30 * 60 * 1000, // 15 minutes
        
    }).then(sURL => {
        return res.status(200).send(sURL[0]);
    })
    .catch( er => {
        return res.status(404).send(er);
    })
}

exports.submitTest = (req, res) => {
    // Validar que el usuario no haya contestado antes
    tests.doc(req.params.uid).set(req.body.testdata)
    .then(doc => {
        users.doc(req.params.uid).update({"answered": true})
        .then(() => {
            return res.status(201).send({message: "Respuestas registradas", id: doc.id})
        })
        .catch( er => {
            return res.status(400).send(er);
        })
    })
    .catch( er => {
        return res.status(400).send(er);
    })
}