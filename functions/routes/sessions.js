const {admin} = require('../firebase');
const db = admin.firestore();
const users = db.collection('users');
const thers = db.collection('therapists');
const schedules = db.collection('schedules');
const sess = db.collection('sessions');


exports.getSession = (req, res) => {
    sess.doc(req.params.sid)
        .get()
        .then(doc => {
            return res.status(200).send(doc.data());
        })
        .catch(error => {
            console.log('Error obteniendo el session document', error);
            return res.status(404).send(error);
        })
}

exports.newSession = (req, res) => {
    let { therapist, start } = req.body.sessiondata;
    sess.add(req.body.sessiondata)
    .then( doc => {
        // * Actualizar el schedule del terapeuta
        schedules.doc(therapist).get()
        .then(docsched => {
            let sched = docsched.data().schedule;

            // * Obtener el index de la fecha
            let ind = sched.indexOf(start);
            if (ind > -1) {

                // * Borrar el schedule 
                sched.slice(ind, 1)

                // * Subir el nuevo schedule
                docsched.ref.update({schedule: sched})
                .then(() => {
                    console.log("Schedule actualizada")
                    return res.status(201).send({id: doc.id});
                })
                .catch(er => {
                    return res.status(400).send({
                        code: er.code,
                        message: er.message,
                    });
                })
                
            }
        })
        .catch(er => {
            return res.status(400).send({
                code: er.code,
                message: er.message,
            });
        })  
    })
    .catch(error => {
        console.log("Unable to create new blog", error);
        return res.status(404).send(error);
    })
}

exports.updateSession = (req, res) => {
    sess
        .doc(req.params.sid)
        .update(req.body.sessiondata)
        .then(() => {
            console.log('Sesion actualizada con exito!');
            return res.status(204);
        })
        .catch(error => {
            console.log('Error actualizando el session document', error);
            return res.status(404).send(error);
        })
}

exports.deleteSession = (req, res) => {
    sess
        .doc(req.params.sid)
        .delete()
        .then(() => {
            console.log('Sesion cancelada con exito!');
            return res.status(204);
        }) 
        .catch(() => {
            console.error('Error borrando el documento de sesion', error);
            return res.status(404).send(error);
        })    
}
