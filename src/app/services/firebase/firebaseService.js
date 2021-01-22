
import { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { firebaseConfig } from 'config.js'
import { getAllTodo } from 'app/views/todo/TodoService';

var state = {
    therapist: {
        data: {},
        dbref: null
    },
    patient: {
        data: {},
        dbref: null
    },
    pat_mult: {
        data: [],
        dbref: [],
    },   
    ther_mult: {
        data: [],
        dbref: [],
    },
}

var setState = (...state) => {
    state = {...state   }
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    var firestore = firebase.firestore()
    var storage = firebase.storage()
    var auth = firebase.auth();
    
    var patients_coll = firestore.collection('patients')
    var therapists_coll = firestore.collection('therapists')
    var roles_coll = firestore.collection('roles')
    var sessions_coll = firestore.collection('sessions')

}

export const resetPatients = () => {
    setState({
        ...state,
        pat_mult: {
            data: [],
            dbref: [],
        }
    })
}

export const resetTherapists = () => {
    setState({
        ...state,
        ther_mult: {
            data: [],
            dbref: [],
        }
    })
}

export const getPatientData = (docId) => {
    //   generally it's better to use uid for docId
    patients_coll
        .doc(docId)
        .get()
        .then((doc) => {
            setState({
                ...state,
                patient: {
                    data: doc.data(),
                    dbref: doc.ref
                },
            })
        })
    
    return state.patient
}

export const getTherapistData = (docId) => {
    //   generally it's better to use uid for docId
    therapists_coll
        .doc(docId)
        .get()
        .then((doc) => {
            setState({
                ...state,
                therapist: {
                    data: doc.data(),
                    dbref: doc.ref
                },
            })
        })

    return state.therapist       
}

export const getTherapistByPatient = (patId) => {
    patients_coll
        .doc(patId)
        .get()
        .then(doc => 
            doc.data().therapist
                .get()
                .then(docter => 
                    setState({
                        ...state,
                        therapist: {
                            data: docter.data(),
                            dbref: docter.ref
                        },
                    })
                )
        )
    
    return state.therapist
}

export const getPatientsByTherapist = (therId) => { 
    resetPatients()
    therapists_coll
        .doc(therId)
        .get()
        .then(doc => { 
            setState({
                ...state,
                pat_mult: {
                    ...state.pat_mult,
                    dbref: doc.data().patients,
                },  
            })
            state.pat_mult.dbref.forEach(pat => {
                pat.get().then(patData => {
                    state.pat_mult.data.push(patData.data())
                })
            }) 
        })
    return state.pat_mult 
}

export const getAllPatients = () => {
    resetPatients()
    patients_coll
        .get()
        .then(docList => docList.forEach(doc => {
            state.pat_mult.data.push(doc.data())
            state.pat_mult.dbref.push(doc.ref)
        }))
    
    return state.pat_mult
}


export const getAllTherapists = () => {
    resetTherapists()
    therapists_coll
        .get()
        .then(docList => { 
            docList.forEach(doc => {
                state.ther_mult.data.push(doc.data())
                state.ther_mult.dbref.push(doc.ref)
            })
        })

    return state.ther_mult
}
