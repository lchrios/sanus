"use strict";

var nodemailer = require('nodemailer');

var _require = require('googleapis'),
    google = _require.google;

var fs = require('fs');

var _require2 = require('util'),
    promisify = _require2.promisify;

var readFile = promisify(fs.readFile);
var CLIENT_ID = '989607099791-4vmr6oht2vb6biodsves45artvt6l982.apps.googleusercontent.com';
var CLEINT_SECRET = 'ciBLgk0ZzdgJ7VvXJ0jWNEPJ';
var REFRESH_TOKEN = '1//04PJ3Dz-io0fkCgYIARAAGAQSNwF-L9IrxWRz77gKGcmpiDNM2K-GSpL5CVu-aQi3VnsN7CU_zwjvkU2BIHAo0tEsGdGd0CO1MsE';
var REDIRECT_URI = ['https://iknelia.app', 'https://developers.google.com/oauthplayground'][1];
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLEINT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({
  "refresh_token": REFRESH_TOKEN
}); // ~ Usuarios
// * 1 - Nueva cuenta usuario

exports.mailNewUser = function (email) {
  oAuth2Client.getAccessToken().then(function (accessToken) {
    //console.log(accessToken)
    var transport = nodemailer.createTransport({
      "service": 'gmail',
      "auth": {
        "type": 'OAuth2',
        "user": 'iknelia.noreply.test@gmail.com',
        "clientId": CLIENT_ID,
        "clientSecret": CLEINT_SECRET,
        "refreshToken": REFRESH_TOKEN,
        "accessToken": accessToken
      }
    });
    readFile('./mails/NuevoUsuario.html', 'utf8').then(function (html2send) {
      var mailOptions = {
        "from": "iknelia no-reply <iknelia.noreply.test@gmail.com>",
        "to": email,
        "subject": 'Te has registrado exitosamente en Iknelia',
        "text": 'Este es un mensaje confirmando tu registro exitoso en https://iknela.app',
        "html": html2send
      };
      transport.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.error(err.message);
          return reject(err);
        } //console.log(info);


        return resolve(info);
      });
    })["catch"](function (err) {
      console.error(err);
      return reject(err);
    });
  })["catch"](function (err) {
    console.log("Hubo un error obteniendo el accessToken de la API de OAuth2");
    console.error(err);
    return reject(err);
  });
}; // * 2 - Voucher OXXO


exports.mailOxxoVoucher = function (req, res) {}; // * 3 - Pago exitoso


exports.mailPaymentSucceeded = function (req, res) {}; // * 4 - Pago fallido


exports.mailPaymentFailed = function (req, res) {}; // ~ Terapeutas
// * 1 - Nueva cuenta terapeuta


exports.mailNewTherapist = function (email) {
  oAuth2Client.getAccessToken().then(function (accessToken) {
    //console.log(accessToken)
    var transport = nodemailer.createTransport({
      "service": 'gmail',
      "auth": {
        "type": 'OAuth2',
        "user": 'iknelia.noreply.test@gmail.com',
        "clientId": CLIENT_ID,
        "clientSecret": CLEINT_SECRET,
        "refreshToken": REFRESH_TOKEN,
        "accessToken": accessToken
      }
    });
    readFile('./mails/NuevoTerapeuta.html', 'utf8').then(function (html2send) {
      var mailOptions = {
        "from": "iknelia no-reply <iknelia.noreply.test@gmail.com>",
        "to": email,
        "subject": 'Te has registrado exitosamente como terapeuta en Iknelia',
        "text": 'Este es un mensaje confirmando tu registro exitoso como terapeuta en https://iknela.app',
        "html": html2send
      };
      transport.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.error(err.message);
          return reject(err);
        } //console.log(info);


        return resolve(info);
      });
    })["catch"](function (err) {
      console.error(err);
      return reject(err);
    });
  })["catch"](function (err) {
    console.log("Hubo un error obteniendo el accessToken de la API de OAuth2");
    console.error(err);
    return reject(err);
  });
}; // * 2 - Envio de datos al admin de los terapeutas (mandar a Male el resumen del registro)


exports.mailSendTherapistResume = function (req, res) {}; // * 3 - Sesion agendada


exports.mailScheduledSession = function (req, res) {};