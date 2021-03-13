const {admin} = require('../firebase');
const db = admin.firestore();
const auth = admin.auth();
var users = db.collection('users');
var thers = db.collection('therapists');  
var roles = db.collection('roles');
var { User, userConverter } = require('../schema/user');
var { Therapist, therapistConverter } = require('../schema/therapist');

 
exports.isAuthorized = (hasRole, allowSameUser) => { // TODO Corregir lectura de roles
    return (req, res, next) => {
        // TODO: Remover cuando se termine la prueba
        // console.log('Skipeando autorizacion por prueba');
        // next();
        // return;


        const { role, uid } = res.locals;
        const id  = req.headers.uid;

        if (allowSameUser && id && uid === id) { // * permite que el usuario pueda pedir informacion propia
            return next();
        } else if (!role) { // * no tiene rol el usuario
            return res.status(403).send('Unauthorized');
        } else if (hasRole.indexOf(role) > -1) { // * revisa que el rol del usuario contenga los permitidos 
            return next();
        }

        return res.status(403).send('Unauthorized');
    }
}

exports.isAuthenticated = (req, res, next) => {

    // TODO: Remover cuando se termine la prueba
    // console.log('Skipeando autenticacion por prueba');
    // next();
    // return;


    console.log('Verificando que el tokenId sea válido');
    //console.log(req.headers.authorization)
    /* 
     * Verifica que el request contenga un ID Token.
     - Por convención el authorization header al portar 
     - un string 'Bearer ' justo antes del tokenId.
    */
    if (!(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) &&
    !(req.cookies && req.cookies.__session)) {
            console.error('Ningun Firebase ID token fue pasado como Bearer token en el Authorization header.',
            'Asegurate que autorizas tu request proveyendo el siguiente HTTP header:',
            'Authorization: Bearer <Firebase ID Token>',
            'o pasando una "__session" cookie.');
            return res.status(403).send('Unauthorized');
    }

    let idToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        // * En este caso se encuentra exitosamente un formato de string que comience con 'Bearer '.
        console.log('Encontrado "Authorization" header');
        // * Lee el ID Token del authorization header.
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else if (req.cookies) {
        // * Si no encuentra el authorization header procede a revisar si el reques cuenta con cookies de sesión.
        console.log('Encontrado "__session" cookie');
        // * Lee el ID Token de la cookie.
        idToken = req.cookies.__session;
    } else {
        // * No se encontró ni un authorization header válido o alguna cookie. 
        return res.status(403).send('Unauthorized');
    }

    // * Una vez obtenido el ID Token, procedemos a verificar que sea correcto mediante firebase auth
    auth
        .verifyIdToken(idToken)
        .then( decodedIdToken => { // * Obtenemos el decodedIDToken como resultado de una operación exitosa
            console.log('ID Token verificado!');
            res.locals = { ...res.locals, uid: decodedIdToken.uid, role: decodedIdToken.role }
            next();
            return;
        })
        .catch( error => {
            console.error('Error al verififcar el Firebase ID token:', error);
            res.status(403).send('Unauthorized');
            return;
        });

/*
    * Esta es una forma diferente de hacer exactamente lo mismo que el código previo
    * pero la estructura es distinta, en este se usa un bloque try catch para manejar
    * el error que nos daría el caso de que no se pueda verificar el token muestra el error 
 ?  try {
 ?      const decodedIdToken = await auth.verifyIdToken(idToken);
 ?      console.log('ID Token correctamente decodificado', decodedIdToken);
 ?      req.user = decodedIdToken;
 ?      next();
 ?      return;
 ?  } catch (error) {
 ?      console.error('Error al verififcar el Firebase ID token:', error);
 ?      res.status(403).send('Unauthorized');
 ?      return;
 ?  }
*/
}

exports.setAdmin = (req, res) => {
    auth
        .setCustomUserClaims(req.params.uid, { role: "admin" } )
        .then(() => {
            console.log('Usuario hecho admin exitosamente');
            return res.status(201);
        })
        .catch( error => {
            console.error('Error cambiando el rol del usuario', error);
            return res.status(404).send(error);
        })
}

exports.setTherapist = (req, res) => {
    auth
        .setCustomUserClaims(req.params.uid, { role: "therapist" } )
        .then(() => {
            console.log('Usuario hecho therapist exitosamente');
            return res.status(201);
        })
        .catch( error => {
            console.error('Error cambiando el rol del usuario', error);
            return res.status(404).send(error);
        })
}

exports.setUser = (req, res) => {
    auth
        .setCustomUserClaims(req.params.uid, { role: "user" } )
        .then(() => {
            console.log('Usuario hecho user exitosamente');
            return res.status(201);
        })
        .catch( error => {
            console.error('Error cambiando el rol del usuario', error);
            return res.status(404).send(error);
        })
}

exports.createUserWithEmailAndPassword = (req, res) => {

    auth
        .createUser({
            email: req.body.email,
            emailVerified: false,
            password: req.body.password,
            displayName: req.body.userdata.name,
            photoURL: req.body.userdata.img || "",
            disabled: false,
        })
        .then( userRecord => {

            console.log('Auth: Usuario creado exitosamene!');
            // * Sube el usuario creado a colleccion de usuarios
            users
                .doc(userRecord.uid)
                .withConverter(userConverter)
                .set(req.body.userdata)
                .then(() => {
                    console.log('Collection: Users - Listo!', userRecord.uid);
                    // * Actualizar el rol del usuario a 'user'
                    auth
                        .setCustomUserClaims(userRecord.uid, { role: "user" })
                        .then(() => {
                            console.log('Usuario registrado con rol "user" correctamente!');
                            return res.status(201).send(userRecord.uid);
                        })
                        .catch( error => {
                            console.error('Error asignando el rol de "user" al usuario', eror)
                            return res.status(404).send(error);
                        })
                })
                .catch( error => {
                    console.error('Error registrando el usuario en collection "users"', error);
                    return res.status(404).send(error);
                })
        })
        .catch(error => {
            console.log('Error creando usuario!', error);
            return res.status(500).send(error)
        });
}

exports.createTherapistWithEmailAndPassword = (req, res) => {
    auth
        .createUser({
            email: req.body.email,
            emailVerified: false,
            password: req.body.password,
            displayName: req.body.userdata.name,
            photoURL: req.body.userdata.img || "",
            disabled: false,
        })
        .then(user => {
            // subir a colleccion de usuarios
            thers
                .doc(user.uid)
                .withConverter(therapistConverter)
                .set(req.body.therapistdata)
                .then(() => {
                    console.log('Collection: Therapist- Listo!');
                    // * Actualizar el rol del usuario a 'user'
                    auth
                        .setCustomUserClaims(user.uid, { role: "therapist" })
                        .then(() => {
                            console.log('Usuario registrado con rol "therapist" correctamente!');
                            return res.status(201).send(user);
                        })
                        .catch( error => {
                            console.error('Error asignando el rol de "therapist" al usuario', eror)
                            return res.status(404).send(error);
                        })
                })
                .catch( error => {
                    console.error('Error registrando el usuario en collection "therapists"', error);
                    return res.status(404).send(error);
                })
        })
        .catch(error => {
            console.log('Error creando terapeuta!', error);
            return res.status(404).send(error)
        });
}
