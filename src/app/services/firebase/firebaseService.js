
import { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import { firebaseConfig } from 'config.js'
import { SignalCellularNullTwoTone } from '@material-ui/icons';

class FirebaseService {
    auth
    firestore
    storage

    googleProvider
    facebookProvider
    twitterProvider

    patient_data
    therapist_data
    session_data

    patient_ref
    therapist_ref
    session_ref

    multiple_patient_data
    multiple_therapist_data
    multiple_session_data

    multiple_patient_ref
    multiple_therapist_ref
    multiple_session_ref

    all_patient_data
    all_therapist_data
    all_session_data

    all_patient_ref
    all_therapist_ref
    all_session_ref

    


    // // ========= UNCOMMENT FOLLOWING LINES IF YOU WANT TO USE FIREBASE ===========
    constructor() {
        this.init();
        this.auth = firebase.auth();
        this.firestore = firebase.firestore()
        this.storage = firebase.storage()

        this.multiple_patient_data = []
        this.multiple_session_data = []
        this.multiple_therapist_data = []

        this.multiple_patient_ref = []
        this.multiple_session_ref = []
        this.multiple_therapist_ref = []


        this.all_patient_data = []
        this.all_session_data = []
        this.all_therapist_data = []

        this.all_patient_ref = []
        this.all_session_ref = []
        this.all_therapist_ref = []

        /*
        const [patientData, setPatientData] = useState()
        const [therpistData, setTherpistData] = useState()
        const [sessionData, setSessionData] = useState()

        const [allPatientsData, setAllPatientsData] = useState()
        const [allTherapistsData, setAllTherapistsData] = useState()
        const [allSessionsData, setAllSessionsData] = useState()
        */

    }

    
    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
    }

    getPatientData = (docId) => {
        //   generally it's better to use uid for docId
        this.firestore
            .collection('patients')
            .doc(docId)
            .get()
            .then((doc) => {
                this.patient_data = doc.data()
            })
        
        return [this.patient_data, this.patient_ref]
        
        
    }

    getTherapistData = (docId) => {
        //   generally it's better to use uid for docId
        this.firestore
            .collection('therapists')
            .doc(docId)
            .get()
            .then((doc) => {
                this.therapist_data = doc.data()

                
            })

        return this.therapist_data
            
    }

    getTherapistByPatient = (patId) => {
        this.therapist_data = null

        this.firestore
            .collection('patients')
            .doc(patId)
            .get()
            .then(doc => {
                let ther = doc.data().therapist
                if (ther != null) {
                    ther
                        .get()
                        .then(therDoc => {
                            this.therapist_data = therDoc.data()
                        })
                }
            })
        return this.therapist_data
    }

    getPatientsByTherapist = (therId) => { 
        this.multiple_patient_data = []

        this.firestore
            .collection('therapists')
            .doc(therId)
            .get()
            .then(doc => {
                doc.data().patients.forEach(pat => {
                    pat.get().then(patData => {
                        this.multiple_patient_data.push(patData.data())
                    })
                }) 

                return this.multiple_patient_data
            }) 
    }

    getAllPatients = () => {
        this.multiple_patient_data = []

        this.firestore
            .collection('patients')
            .get()
            .then((docList) => {
                docList.forEach((doc) => {
                    this.multiple_patient_data.push(doc.data())
                })

                return this.multiple_patient_data
            })
    }


    getAllTherapists = () => {
        this.all_therapist_data = []
        this.all_therapist_ref = []

        const ther_coll = this.firestore.collection('therapists')

        ther_coll
            .get()
            .then((docList) => {
                docList.forEach((doc) => {
                    this.all_therapist_data.push(doc.data())
                    this.all_therapist_ref.push(doc.ref)
                })                
            })

        return [this.all_therapist_data, this.all_therapist_ref]
    }
}

const instance = new FirebaseService()

export default instance
