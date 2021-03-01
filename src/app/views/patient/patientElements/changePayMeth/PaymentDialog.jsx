import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import history from '../../../../../history'
import { Dialog, Grid, Button } from '@material-ui/core'

const PaymentDialog = ({ open, toggleDialog }) => {
    const [state, setState] = useState({})

    const handleChange = (event) => {
        event.persist()
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const handleSubmit = () => {}

    let { cardHolderName, cardNumber, expiryDate, cvc } = state

    return (
        <Dialog open={open} onClose={toggleDialog} scroll="body">
            <div className="p-sm-24 text-center relative">
                <img
                    className="h-160 mb-4"
                    src="/assets/images/videosession.png"
                    alt="debit-card"
                />
                 <h2>Puedes iniciar la sesión terapeutica desde aquí, o ir a tu perfil, sólo deberás colocar la información siguiente</h2>
                <ValidatorForm onSubmit={handleSubmit}>
                    <TextValidator
                        className="mb-4"
                        variant="outlined"
                        label="Califica tu experiencia hasta ahora (1-10)"
                        onChange={handleChange}
                        type="number"
                        name="cardNumber"
                        value={cardNumber || ''}
                        errorMessages={[
                            'Este campo es requerido',
                            'El campo debe ser un numero',
                            'El texto debe ser un número',
                        ]}
                        fullWidth
                    />

                  {/*  <Grid container spacing={3} className="mb-8">
                      <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                label="Expiry Date"
                                onChange={handleChange}
                                type="text"
                                placeholder="12/19"
                                name="expiryDate"
                                value={expiryDate || ''}
                                validators={[
                                    'required',
                                    'minStringLength: 5',
                                    'maxStringLength: 5',
                                ]}
                                errorMessages={[
                                    'this field is required',
                                    'invalid expiry date',
                                    'invalid expiry date',
                                ]}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                label="CVC"
                                onChange={handleChange}
                                type="text"
                                name="cvc"
                                value={cvc || ''}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                fullWidth
                            />
                            </Grid>
                            </Grid> */}

                    {/**<TextValidator
                        className="mb-6"
                        variant="outlined"
                        label=""
                        onChange={handleChange}
                        type="text"
                        name="cardHolderName"
                        value={cardHolderName || ''}
                        errorMessages={['this field is required']}
                        fullWidth
                    /> */}
                    <div className="flex justify-center">
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => window.location.href = "https://zoom.us/j/95739401999?pwd=dkh2NGQxcXBTYWJWRHlRM3U4UnVPQT09"}
                            className="mr-3"
                            type="button"
                        >
                            Iniciar sesión ahora
                        </Button>
                        <Button
                            onClick={() => history.push("/:pid/home")}
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Visitar perfil
                        </Button>
                    </div>
                </ValidatorForm>
            </div>
        </Dialog>
    )
}

export default PaymentDialog
