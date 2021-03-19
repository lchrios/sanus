// !!!!!!!! ESTE ARCHIVO SE DEBE ELIMINAR ANTES DEL DEPLOY !!!!!!!!!!!!!!!!!11
const Joi = require('joi') 
const { admin } = require('../firebase');
const db = admin.firestore();
const users = db.collection("users");
const session = db.collection("sessions");
     

// * User database schema for validation
 

exports.fixAllUsers = (req, res) => {
    // ? Fields to eliminate
    // *    location

    // ? Fields to add
    // *    address

    users.get()
    .then( query => {
        var ers = [];
        query.forEach( doc => {
            var data = doc.data();
            let fixed_data = {
                address: data.address || "Dirección",
                age: data.age || 18,
                answered: data.answered || false,
                email: data.email || "email@mail.com",
                img: data.img || "usuarios/placeholders/none-user.png",
                lname: data.lname || "Apellido",
                name: data.name || "Nombre",
                payment_met: data.payment_met || [],
                phone: data.phone || "0101010101",
                therapist: data.therapist || "",
                gender: data.gender || "Hombre", 
            }
            doc.ref.set(fixed_data)
            .then(() => {
                console.log(doc.id)
            })
            .catch(er => {
                ers.push(er);
            })
        })
        return ers.length === 0 ? res.status(200).send("Usuarios correctamente corregidos") : res.status(400).send({errors: ers, message: "Errores al actualizar ciertos usuarios"})
    })
}

exports.fixAllTherapists = (req, res) => {
    
}

exports.fixAllSessions = (req, res) => {
    sessions.get()
    .then( query => {
        var ers = [];
        query.forEach( doc => {
            var data = doc.data();
            let fixed_data = {
                address: data.address || "Dirección",
                age: data.age || 18,
                answered: data.answered || false,
                email: data.email || "email@mail.com",
                img: data.img || "usuarios/placeholders/none-user.png",
                lname: data.lname || "Apellido",
                name: data.name || "Nombre",
                payment_met: data.payment_met || [],
                phone: data.phone || "0101010101",
                therapist: data.therapist || "",
                gender: data.gender || "Hombre", 
            }
            doc.ref.set(fixed_data)
            .then(() => {
                console.log(doc.id)
            })
            .catch(er => {
                ers.push(er);
            })
        })
        return ers.length === 0 ? res.status(200).send("Usuarios correctamente corregidos") : res.status(400).send({errors: ers, message: "Errores al actualizar ciertos usuarios"})
    })    
}

exports.fixAllBlogs = (req, res) => {
    
}

exports.fixAllNotes = (req, res) => {
    
}

exports.fixAllReviews = (req, res) => {
    
}

const user_schema = Joi.object({
    address: Joi.string()
        .alphanum()
        .min(3)
        .max(150)
        .required(),
    
    age: Joi.number()
        .integer()
        .min(18)
        .required(),

    answered: Joi.boolean()
        .required(),
        
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    img: Joi.string()
        .alphanum()
        .min(3)
        .required(),

    lname: Joi.string()
        .alphanum()
        .min(3)
        .max(150)
        .required(),
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(150)
        .required(),

    payment_met: Joi.array(),

    phone: Joi.string()
        .alphanum()
        .min(10)
        .max(14)
        .required(),

    therapist: Joi.string()
        .alphanum()
        .min(3)
        .max(150)
        .required(),

})