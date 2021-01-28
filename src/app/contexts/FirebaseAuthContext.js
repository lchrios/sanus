import React, { createContext, useEffect, useReducer, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from 'config.js'
import { MatxLoading } from 'app/components'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


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

const AuthContext = createContext({
    ...initialAuthState,
    method: 'FIREBASE',
    createUserWithEmailAndPassword: () => Promise.resolve(),
    signInWithEmailAndPassword: () => Promise.resolve(),
    signInWithGoogle: () => Promise.resolve(),
    logout: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState)
    const [dbRef, setDbRef] = useState()

    const signInWithEmailAndPassword = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
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

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'FIREBASE',
                createUserWithEmailAndPassword,
                signInWithEmailAndPassword,
                signInWithGoogle,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
