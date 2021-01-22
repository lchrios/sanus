const firebase = require('firebase');
const db = firebase.firestore();
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');


exports.getSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.doc(req.params.sid)
        .get()
        .then((doc) => {
            res.status(200).send(doc.data())
        })
}

exports.newSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.add(req.body)
        .then((doc) => {
            console.log(doc.id)
            sess.doc(doc.id).update({id: doc.id}).then(() => {
                const patref = pats.doc(req.body.patient)

                patref.get()
                    .then((patdoc) => {
                        const sessdata = patdoc.data().sessions;
                        sessdata.push(doc.id);
                        patref.update({sessions: sessdata}).then(() => {
                            const terref = ther.doc(req.body.therapist)
                            terref.get()
                                .then((terdoc) => {
                                    const data = terdoc.data().sessions;
                                    data.push(doc.id);
                                    patref.update({sessions: data})
                                    
                                })
                        })
                    })
            })
        })
}

exports.updateSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.doc(req.params.sid).set(req.body).then(() => {
        console.log("Sesion actualizada con exito!");
    })
}

exports.deleteSession = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    sess.doc(req.params.sid).delete().then(() => {
        console.log("Sesion cancelada con exito!");
    })
}