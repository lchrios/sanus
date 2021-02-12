import React from 'react'
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




const UserData = () => {
    return (
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <Divider className="mb-8" />
                <FormControl>
                    <InputLabel htmlFor="input-with-icon-adornment">Dirección</InputLabel>
                    <Input
                    fullWidth
                    id="input-with-icon-adornment"
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
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <Icon>phone</Icon>
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <Divider className="mb-8" />
                <TextField
                        id="input-with-icon-textfield"
                        label="Correo electrónico"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Mail/>
                            </InputAdornment>
                        ),
                        }}
                    />
            </div>
        </Card> 
    )
}

export default UserData