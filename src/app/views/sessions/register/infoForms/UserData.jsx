import React, { useState } from 'react'
// import Home from '@material-ui/icons/Home'
import { Mail } from '@material-ui/icons'
import { 
    Input, 
    InputLabel, 
    InputAdornment, 
    TextField, 
    Divider, 
    FormControl, 
    Card,
    Icon } 
from '@material-ui/core'




const UserData = ({ handleChange, state }) => {


    return (
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <TextField
                    id="input-with-icon-textfield"
                    label="Correo electrónico"
                    value={state.email || ''}
                    disabled={state.email ? true : false}
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Mail/>
                        </InputAdornment>
                    ),
                    }}
                />
                <Divider className="mb-6" />
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">Dirección</InputLabel>
                    <Input
                        onChange={handleChange}
                        fullWidth
                        id="input-with-icon-adornment"
                        name="address"
                        startAdornment={
                            <InputAdornment position="start">
                                <Icon>home</Icon>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Divider className="mb-8" />
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">Teléfono</InputLabel>
                    <Input
                    name="phone"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Icon>phone</Icon>
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <Divider className="mb-8" />
                
            </div>
        </Card> 
    )
}

export default UserData