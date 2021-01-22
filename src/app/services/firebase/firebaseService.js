
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

    patients_coll
    therapists_coll
    sessions_coll
    roles_coll

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

        this.patients_coll = this.firestore.collection('patients')
        this.therapists_coll = this.firestore.collection('therapists')
        this.sessions_coll = this.firestore.collection('sessions')
        this.roles_coll = this.firestore.collection('roles')

        
        this.patient_data = []
        this.therapist_data = null
        this.session_data = []
    
        this.patient_ref = []
        this.therapist_ref = null
        this.session_ref = []

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
        const [therapistData, setTherapistData] = useState()
        const [sessionData, setSessionData] = useState()

        const [allPatientsData, setAllPatientsData] = useState([])
        const [allTherapistsData, setAllTherapistsData] = useState([])
        const [allSessionsData, setAllSessionsData] = useState()
        */

        this.state = {
            therapist: {
                data: {},
                dbref: null
            },
            patient: {
                data: {},
                dbref: null
            },
            pat_mult: [],   
            ther_mult: [],
        }
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

    /*getTherapistData = (docId) => {
        //   generally it's better to use uid for docId
        this.firestore
            .collection('therapists')
            .doc(docId)
            .get()
            .then((doc) => {
                this.therapist_data = doc.data()

                
            })

        return this.therapist_data
            
    }*/

    getTherapistByPatient = (patId) => {
        this.therapist_data = []
        this.therapist_ref = []

        this.patients_coll
            .doc(patId)
            .get()
            .then(doc => 
                doc.data().therapist
                    .get()
                    .then(docter => docter.data())
            )
    }

    /*getPatientsByTherapist = (therId) => { 
        this.multiple_patient_data = []


        
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
    }*/


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
