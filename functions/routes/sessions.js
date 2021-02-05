const firebase = require('firebase');
const db = firebase.firestore();
const users = db.collection('users');
const ther = db.collection('therapists');
const sess = db.collection('sessions');


exports.getSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
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
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.body.sessiondata)
    sess.add(req.body.sessiondata)
        .then( doc => {
            // actualizar el id del documento
            sess
                .doc(doc.id)
                .update({id: doc.id})
                .then(() => {
                    console.log('Campo session.id actualizado exitosamente!');
                })
                .catch(error => {
                    console.log('Error actualizando el campo session.id', error);
                    return res.status(404).send(error);
                })
            const userref = users.doc(req.body.sessiondata.patient)
            userref
                .get()
                .then( usdoc => {
                    const sessdata = usdoc.data().sessions;
                    sessdata.push(doc.id);
                    userref.update({sessions: sessdata}).then(() => {
                        console.log('Campo user.sessions actualizado correctamente')
                    })
                    .catch(error => {
                        console.log('Error actualizando el campo user.sessions', error);
                        return res.status(404).send(error);
                    })
                })
                .catch(error => {
                    console.log('Error obteniendo los datos del usuario', error);
                    return res.status(404).send(error);
                })
            const terref = ther.doc(req.body.sessiondata.therapist)
            terref.get()
                .then( terdoc => {
                    const data = terdoc.data().sessions;
                    data.push(doc.id);
                    userref.update({sessions: data}).then(() => {
                        console.log('Campo user.sessions actualizado correctamente')
                    })
                    .catch(error => {
                        console.log('Error actualizando el campo therapist.sessions', error);
                        return res.status(404).send(error);
                    })
                })
                .catch(error => {
                    console.log('Error obteniendo los datos del terapeuta', error);
                    return res.status(404).send(error);
                })
        })
        .then(() => {
            return res.status(201).send(doc.id);
        })
        .catch(error => {
            console.log("Unable to create new blog", error);
            return res.status(404).send(error);
        })
}

exports.updateSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess
        .doc(req.params.sid)
        .set(req.body.sessiondata)
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
    res.set('Access-Control-Allow-Origin', '*');
    sess
        .doc(req.params.sid)
        .delete()
        .then(() => {
            console.log('Sesion cancelada con exito!');
            return res.status(204);
        })        
}
