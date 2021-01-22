const { db } = require('../firestore')
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
            // update patient sessions
            const patref = pats.doc(req.body.patient)
            patref.get()
                .then((patdoc) => {
                    const sessdata = patdoc.data().sessions;
                    sessdata.push(doc.id);
                    patref.update({sessions: sessdata})
                    
                })
            const terref = pats.doc(req.body.therapist)
            terref.get()
                .then((terdoc) => {
                    const data = terdoc.data().sessions;
                    data.push(doc.id);
                    patref.update({sessions: data})
                    
                })
        })
}