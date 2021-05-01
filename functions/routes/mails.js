const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);


const CLIENT_ID = '989607099791-4vmr6oht2vb6biodsves45artvt6l982.apps.googleusercontent.com';
const CLEINT_SECRET = 'ciBLgk0ZzdgJ7VvXJ0jWNEPJ';
const REFRESH_TOKEN = '1//04PJ3Dz-io0fkCgYIARAAGAQSNwF-L9IrxWRz77gKGcmpiDNM2K-GSpL5CVu-aQi3VnsN7CU_zwjvkU2BIHAo0tEsGdGd0CO1MsE';
const REDIRECT_URI = [
    'https://iknelia.app', 
    'https://developers.google.com/oauthplayground'
][1];

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLEINT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ "refresh_token": REFRESH_TOKEN })

// ~ Usuarios
// * 1 - Nueva cuenta usuario
exports.mailNewUser = (req, res) => {

    oAuth2Client.getAccessToken()
    .then(accessToken => {
        console.log(accessToken)
        const transport = nodemailer.createTransport({
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

        readFile('./mails/NuevoUsuario.html', 'utf8').then(html2send => {
            
            const mailOptions = {
                "from": "iknelia no-reply <iknelia.noreply.test@gmail.com>",
                "to": req.body.email,
                "subject": 'TEST nodemailer',
                "text": 'This is a testing!!!',
                "html": html2send
            };
    
            transport.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error(err.message);
                    return res.status(400).send(err.message);
                }
                console.log(info);
                return res.status(200).send(info);
            });
        })
        .catch(err => {
            console.error(err);
            return res.send(400).send(err)
        });

    })
    .catch(err => {
        console.log("Hubo un error obteniendo el accessToken de la API de OAuth2");
        console.error(err);
        return res.status(400).send(err)
    });
}
// * 2 - Voucher OXXO
exports.mailOxxoVoucher = (req, res) => {}
// * 3 - Pago exitoso
exports.mailPaymentSucceeded = (req, res) => {}
// * 4 - Pago fallido
exports.mailPaymentFailed = (req, res) => {}


// ~ Terapeutas
// * 1 - Nueva cuenta terapeuta
exports.mailNewTherapist = (req, res) => {}
// * 2 - Envio de datos al admin de los terapeutas (mandar a Male el resumen del registro)
exports.mailSendTherapistResume = (req, res) => {}
// * 3 - Sesion agendada
exports.mailScheduledSession = (req, res) => {}
