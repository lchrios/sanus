const express = require('express');
const firebase = require('firebase');


const { db } = require('../firestore')
const pats = db.collection('patients');
const ther = db.collection('therapists');
const sess = db.collection('sessions');


// Get therapist info
exports.getAllTherapists = (req, res) => {
    ther.get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.send(data)
        })
}

exports.getAllPatients = (req, res) => {
    pats.get()
        .then((query) => {
            var data = [];
            query.forEach((doc) => {
                data.push(doc.data());
            })
            
            res.send(data)
        })
}

exports.getTherapist = (req, res) => {
    ther.doc(req.params.tid)
        .get()
        .then((doc) => {
            res.send(doc.data())
        })
}

exports. getPatient = (req, res) => {
    pats.doc(req.params.pid)
        .get()
        .then((doc) => {
            res.send(doc.data())
        })
}

exports.getAllSessionsByPatient = (req, res) => {
    sess.where('patient_id', '==', req.params.pid)
        .get()
        .then((query) => {
            const data = [];
            const refs = [];
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.ref);
            })
            res.send(data)
        })
}

exports.getAllSessionsByTherapist = (req, res) => {
    sess.where('therapist_id', '==', req.params.pid)
        .get()
        .then((query) => {
            const data = [];
            const refs = [];
            query.forEach((doc) => {
                data.push(doc.data());
                refs.push(doc.ref);
            })
            res.send(data)
        })
}

exports.getSession = (req, res) => {
    sess.doc(req.params.sid)
        .get()
        .then((doc) => {
            res.send(doc.data())
        })
}