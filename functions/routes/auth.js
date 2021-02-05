const { db, auth } = require('../firestore');
const users = db.collection('users');
const ther = db.collection('therapists');
const sess = db.collection('sessions');
const roles = db.collection('roles');
const { User, userConverter } = require('../schema/user');

exports.validateIdToken = async (req, res, next) => {
    console.log('Check if request is authorized with Firebase ID token');

    if ((req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
        !(req.cookies && req.cookies.__session)) {
            console.error('No Firebase ID token fue pasado como Bearer token en el Authorization header.',
            'Asegurate que autorizas tu request proveyendo el siguiente HTTP header:',
            'Authorization: Bearer <Firebase ID Token>',
            'o pasando una "__session" cookie.');
            return res.status(403).send('Unauthorized');;
    }

    let idToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        console.log('Encontrado "Authorization" header');
        // Read the ID Token from the Authorization header.
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else if (req.cookies) {
        console.log('Encontrado "__session" cookie');
        // Read the ID Token from cookie.
        idToken = req.cookies.__session;
    } else {
        // No cookie
        return res.status(403).send('Unauthorized');
    }

    try {
        const decodedIdToken = await auth.verifyIdToken(idToken);
        console.log('ID Token correctamente decodificado', decodedIdToken);
        req.user = decodedIdToken;
        next();
        return;
    } catch (error) {
        console.error('Error al verififcar el Firebase ID token:', error);
        res.status(403).send('Unauthorized');
        return;
    }
 
}

exports.signInWithEmailAndPassword = (req, res) => {
    auth.signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(user => {
        console.log('Autenticado exitosamente con esta informacion:', user);
        return res.status(200).send(user);
    })
    .catch(error => {
        console.log('Login fallido!', error);
        return res.status(404).send(error)
    })
    
}

exports.signInWithGoogle = (req, res) => {
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider)
    .then(result => {
        var credential = result.credential;
        var token = result.accessToken;
        var user = result.user;
        console.log('Login con Google exitoso!');
        return res.status(200).send({
            credential: { ...credential },
            token: { ...token },
            user: { ...user },
        });
    })
    .catch(error => {
        console.log('Login con Google fallido!', error);
        return res.status(404).send(error);
    })
}

exports.signInWithFacebook = (req, res) => {
    const provider = new firebase.auth.FacebookAuthProvider()
    
    auth.signInWithPopup(provider)
    .then(result => {
        var credential = result.credential;
        var token = result.accessToken;
        var user = result.user;
        console.log('Login con Facebook exitoso!');
        return res.status(200).send({
            credential: { ...credential },
            token: { ...token },
            user: { ...user },
        });
    })
    .catch(error => {
        console.log('Login con Facebook fallido!', error);
        return res.status(404).send(error);
    })
}

exports.signInWithTwitter = (req, res) => {
    const provider = new firebase.auth.TwitterAuthProvider()
    
    auth.signInWithPopup(provider)
    .then(result => {
        var credential = result.credential;
        var token = result.accessToken;
        var user = result.user;
        console.log('Login con Twitter exitoso!');
        return res.status(200).send({
            credential: { ...credential },
            token: { ...token },
            user: { ...user },
        });
    })
    .catch(error => {
        console.log('Login con Twitter fallido!', error);
        return res.status(404).send(error);
    })
}

exports.createUserWithEmailAndPassword = (req, res) => {
    auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(user => {
        // subir a colleccion de usuarios
        users
            .doc(user.uid)
            .withConverter(userConverter)
            .set(new User(...req.body.userdata))
            .then(() => {
                console.log('Collection: Users - Listo!');
            })
            .then(() => {
                // subir a colleccion de roles
                roles
                    .doc(user.uid)
                    .set({role: 'users'})
                    .then(() => {
                        console.log('Collection: Roles - Listo!');
                    })
            })
            .then(() => {
                console.log('Usuario registrado correctamente!');
                return res.status(201).send(user);
            });

    })
    .catch(error => {
        console.log('Error creando usuario!', error);
        return res.status(404).send(error)
    })
}

exports.logout = (req, res) => {
    auth.revokeRefreshTokens(req.params.uid).then(() => {
        return res.status(200).send(auth.getUser(req.params.uid));
    }, error => {
        return res.status(404).send(error);
    })
}
