import React, { useState } from 'react'
import {
    Card,
    Divider,
    Button,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const UserProfileForm = ({ handleChange }) => {
    const classes = useStyles()


    /*const userdata = {
        email: state.email,
        name: state.name,
        age: state.age,
        phone: state.phone,
        img: state.img,
        therapist: null,
        sessions: [],
        payment_met: [],
        location: ["Guadalajara", "Jalisco", "Mexico"],
        blogs: []
    }*/

    return (
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <h4>Selecciona una fotografía para tu perfil</h4>
                <Divider className="mb-8" />

                <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                className={classes.input}>
                </input>
                <label  htmlFor="contained-button-file">
                <Button className="x-center" variant="contained" color="primary" component="span">
                        Subir 
                </Button>
                </label>
                

                
              
                </div>
        </Card> 
    )
}

const stayDurationList = [
    'Hace menos de una semana',
    'Hace una semana',
    'Hace un mes',
    "Hace 6 meses",
    "hace un año",
    "Hace más de un año"
]




export default UserProfileForm