const express = require('express')
const app = express()
/** Configurar la librería con el stripe secret key */
const stripe = require('stripe')('sk_test_51HwA9iItRYlC7M0MQNS8OacWDR17Hgnaf9yXvLOt9QCTfQCtvzD6JDaWnM0dJ9cDivQtGGj53a9keJpimeZps4r500rXFO4372')

/** api call para crear el checkout session object */
app.post('/create-checkout-session', async(req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: [ 'card' ],
        line_items: [ 
            {
                price_data: {
                    currency:'mxn',
                    /**
                     * TODO ASIGNAR UN ID NUMÉRICO
                     */
                    product:'simplesession-id',
                    product_data: {
                        name:'Sesión simple',
                        description:'Paga por una sesión con el terapeuta que seleccionaste'
                    },
                    unit_amount: 60000 /** 
                    *!!! lo puse abajo pa que se vea el color, la cantidad del unit_amount, está en centavos, por eso se usa ese numero */
                },
                adjustable_quantity:enabled,
            }
        ],
        mode:'payment',
        success_url:'http://localhost:4242/pago_exitoso?id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:4242/pago_cancelado?id={CHECKOUT_SESSION_ID}'
    })
    res.json({
        id: session.id
    })
})