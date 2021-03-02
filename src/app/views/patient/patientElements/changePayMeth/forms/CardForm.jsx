import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'
import { Card, Grid } from '@material-ui/core'

export default function CardForm() {
    return(
        <div>
            <Grid item>
                <Card className="text-center mb-4">
                    <div className='mb-4'>
                        <h4>Costo por sesión: 600.00 MXN</h4>
                    </div>
                <CardElement
                option={{
                    style: {
                        base: {
                            fontSize:'16px',
                            color:'#424770',
                            '::placeholder' : {
                                color: '#aab7c4'
                            },
                        },
                        invalid: {
                            color: '#9e2156'
                        }
                    }
                }}
                />
                </Card>
            </Grid>
                
            
        </div>
    )
}