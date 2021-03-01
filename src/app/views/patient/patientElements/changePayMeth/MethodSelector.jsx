import React from 'react'
import { Button, Grid, Icon } from '@material-ui/core'
import { Card } from '@material-ui/core'
import CreditCard from '@material-ui/icons/CreditCard'
import Cash from '@material-ui/icons/Money'

// function CreditScore() {
//     return (
//         <Icon> credit_score </Icon>
//     )
// }

export default function MethodSelector() {
    return (
        <div>
            <Grid item lg={3}>
                <Card className='flex-column'>
                    <Button
                    startIcon={<CreditCard />} 
                    className='mb-4' 
                    variant='contained' 
                    color='primary'>
                        Tarjeta de crédito o débito
                    </Button>
                    <Button
                    startIcon={<Cash/>}
                    variant='contained' 
                    color='secondary'>
                        Depósito en oxxo
                    </Button>
                </Card>
            </Grid>
        </div>
        
    )
}