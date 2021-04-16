"use strict";

var stripe = require('stripe')("sk_test_51IRM5vEkM6QFZKw2N9Ow9xCKwSd2b8J3JjWb2BL9kH5FVCXvJ5fSmFW6GvJot90XsUdgSfbtpPraG5u9Kmycvi5C00HIcjkWgG");

var _require = require('../firebase'),
    admin = _require.admin,
    storage = _require.storage;

var db = admin.firestore();
var thers = db.collection('therapists');
var users = db.collection('users');
/**La private key será utilizada con una variable de entorno */

exports.sendPaymentInfo = function (req, res) {
  var _req$body = req.body,
      amount = _req$body.amount,
      email = _req$body.email,
      payment_method_id = _req$body.payment_method_id;
  users.doc(req.params.uid).get().then(function (doc) {
    var pm = doc.data().payment_met;
    pm.push(payment_method_id);
    doc.ref.update({
      payment_met: pm
    }).then(function () {
      console.log("PMs actualizados");
    })["catch"](function (er) {
      console.error(er.message);
    });
  });
  stripe.paymentIntents.create({
    "amount": amount,
    "currency": 'mxn',
    "description": 'Sesión individual',
    "payment_method": payment_method_id,
    "payment_method_types": ['card', 'oxxo'],
    "receipt_email": email
  }).then(function (paymentIntent) {
    console.log(paymentIntent.receipt_email, "Ticket de pago generado exitosamente api");
    return res.status(200).send({
      "client_secret": paymentIntent.client_secret,
      "message": 'Ticket de pago generato exitosamente'
    });
  })["catch"](function (error) {
    console.log('Error al procesar tu pago', error.message);
    res.status(400).send(error);
  });
};

exports.handleStripeEvent = function (req, res) {
  // * Código que maneja el otso
  var sig = req.headers['stripe-signature']; // @Signature de la API de Stripe
  //0-testCLI 1-stripe-test 2-stripe live mode @Secreto del endpoint webhook

  var endpoint_secret = ["whsec_OMF9oQSkPJsmHdMFJlTsWYe8pgLahNBd", "whsec_CObnwxUSvfRajVBO08viht8UpZNRXWhI", "whsec_fwfyWE5QTrOkBJZ7mEfU3LxgsOwhkpvy"][1];
  var event = req.body; // @ Lee la información enviada

  try {
    /* 
      * Se construye unevento a traves de stripe pasando como argumentos:
        @ Signature de stripe
        @ secreto del endpoint
        @ Informacion obtenida del POST
    */
    event = stripe.webhooks.constructEvent(req.body, sig, endpoint_secret);
  } catch (err) {
    return res.status(400).send("Webhook Error: ".concat(err.message));
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      console.log("Pago recibido con " + event["payment_method_types"]); // * Se hizo el pago del voucher del OXXO exitosamente 

      break;

    case 'payment_intent.requires_action':
      // * Se genero el voucher del OXXO
      console.log("Voucher generado");
    // - 1 Crear sesion en firestore con valor
    // - 

    case 'payment_intent.processing':
      // * Se esta procesando el outcome del pago
      console.log("Voucher en proceso");
      break;

    case 'payment_intent.payment_failed':
      // * No se hizo el pago exitosamente :C
      console.log("Pago no realizado");
      break;
    // ... handle other event types

    default:
      console.log("Unhandled event type ".concat(event.type));
  }

  return res.status(200).send({
    received: true
  });
};

exports.expressAccount = function (req, res) {
  var email = req.body.email;
  var account = stripe.accounts.create({
    type: 'express',
    email: email,
    country: 'MX',
    business_type: 'individual'
  }).then(function (response) {
    /**
     * TODO MOVER TEST DATA
     */
    var hosts = ['http://localhost:9999/iknelia-3cd8e/us-central1/api', // * local emulator dev host
    'https://iknelia.app' // * cloud api host
    ];
    thers.doc(req.params.tid).update({
      stripeId: response.id,
      charges_enabled: response.charges_enabled
    }).then(function () {
      return console.log('Actualización de stripeID completada.');
    })["catch"](function (err) {
      return console.error(err);
    });
    stripe.accountLinks.create({
      account: response.id,
      refresh_url: "".concat(hosts[1], "/").concat(req.params.tid, "/reAuth"),
      return_url: "".concat(hosts[1], "/").concat(req.params.tid, "/dashboard"),
      type: "account_onboarding"
    }).then(function (response1) {
      console.log("Enviando link");
      return res.status(200).send(response1);
    });
  })["catch"](function (e) {
    console.error('No ha sido posible crear tu cuenta');
    console.error(e);
  });
};

exports.connectReAuth = function (req, res) {
  thers.doc(req.params.tid).get().then(function (doc) {
    stripe.accounts.retrieve(doc.data().stripeId).then(function (account) {
      res.status(200).send({
        charges_enabled: account.charges_enabled
      });
    });
  })["catch"](function (e) {
    console.error('No ha sido posible traer tus datos');
    console.error(e);
  });
}; // exports.reAuth = (req,res) => {
//     const {email} = req.body
//     const account = stripe.accounts.create({
//         type:'express',
//         email: email,
//         capabilities: {
//             card_payments: {requested:true},
//             transfers: {requested:true}
//         }
//     })
// }