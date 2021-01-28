const { db, auth} = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');

const initialAuthState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FB_AUTH_STATE_CHANGED': {
            const { isAuthenticated, user } = action.payload

            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

exports.validateIdToken = async (req, res, next) => {
    console.log('Check if request is authorized with Firebase ID token');

    if ((req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
        !(req.cookies && req.cookies.__session)) {
            console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
            'Make sure you authorize your request by providing the following HTTP header:',
            'Authorization: Bearer <Firebase ID Token>',
            'or by passing a "__session" cookie.');
            return res.status(403).send('Unauthorized');;
    }

    let idToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        console.log('Found "Authorization" header');
        // Read the ID Token from the Authorization header.
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else if (req.cookies) {
        console.log('Found "__session" cookie');
        // Read the ID Token from cookie.
        idToken = req.cookies.__session;
    } else {
        // No cookie
        return res.status(403).send('Unauthorized');
    }

    try {
        const decodedIdToken = await auth.verifyIdToken(idToken);
        console.log('ID Token correctly decoded', decodedIdToken);
        req.user = decodedIdToken;
        next();
        return;
    } catch (error) {
        console.error('Error while verifying Firebase ID token:', error);
        res.status(403).send('Unauthorized');
        return;
    }
 
}

exports.signInWithEmailAndPassword = (req, res) => {
    auth.signInWithEmailAndPassword(email, password)
    return res.status(200).send()
}

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    
    return firebase.auth().signInWithPopup(provider)
}

const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    
    return firebase.auth().signInWithPopup(provider)
}

const signInWithTwitter = () => {
    const provider = new firebase.auth.TwitterAuthProvider()
    
    return firebase.auth().signInWithPopup(provider)
}

const createUserWithEmailAndPassword = async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

const logout = () => {
    return firebase.auth().signOut()
}

useEffect(() => {

    const uns = 

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            
            firebase.firestore()
                .collection('roles')
                .doc(user.uid)
                .get()
                .then(doc => {
                    firebase.firestore()
                        .collection('patients')
                        .doc(user.uid)
                        .get()
                        .then(docRole => {
                            setDbRef(docRole.ref)
                        })              
                })
            dispatch({
                type: 'FB_AUTH_STATE_CHANGED',
                payload: {
                    isAuthenticated: true,
                    user: {
                        uid: user.uid,
                        name: user.displayName || user.email,
                        img: user.photoURL,
                        email: user.email,
                        age: 18,
                        phone: user.phoneNumber,
                        db_ref: dbRef
                    },
                },
            })
        } else {
            dispatch({
                type: 'FB_AUTH_STATE_CHANGED',
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            })
        }
    })

    return unsubscribe
}, [dispatch])
