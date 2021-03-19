import 'date-fns';
import { Card, Grid, Icon, Button } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { useEffect, useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import ScheduleSelector from 'react-schedule-selector'
import DateFnsUtils from '@date-io/date-fns';
import NumericInput from 'react-numeric-input';
import SaveIcon from '@material-ui/icons/Save';



const TherapistSchedule = () => {
    const selectionSchemes = ['linear', 'square']
    const [state, setState] = useState({ schedule: [] })
    const [options, setOptions] = useState({
        selectionScheme: 'linear',
        startDate: new Date(),
        numDays: 5,
        hourlyChunks: 1,
        minTime: 5, // ? Preguntar a Esquivias minimo
        maxTime: 23, // ? Preguntar a Esquivias maximo
    })
    
    const handleChange = newSchedule => {
        setState({ schedule: newSchedule })
    }

    const handleDays = numDays => {
        setOptions({
            ...options,
            numDays: numDays,
        })
    }

    const handleMaxTime = maxTime => {
        setOptions({
            ...options,
            maxTime: maxTime,
        })
    }

    const handleMinTime = minTime => {
        setOptions({
            ...options,
            minTime: minTime,
        })
    }
 
    const handleOptions = event => {
        setOptions({
            ...options,
            [event.target.name]: event.target.value,
        })    
    } 


    useEffect(() => {
        console.log(options)
    }, [options])
    useEffect(() => {
        console.log(state)
    }, [state])
    
    const handleDate = date => {
        setOptions({
            ...options,
            startDate: date,
        })
    }
    

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            spacing={3}
        >
            <Grid 
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >            
                <Card elevation={6} className=" mx-5 mt-5 p-4 h-full">
                    <ValidatorForm onSubmit={handleChange}>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="stretch"
                        >
                            <Grid 
                                item
                                lg={1}
                                md={1}
                                sm={6}
                                xs={12}
                            > 
                                <TextValidator
                                    className="w-full mt-4"
                                    label="Tipo de seleccion"
                                    onChange={handleOptions}
                                    variant="outlined"
                                    name="selectionScheme"
                                    select
                                    value={options?.selectionScheme || ""}
                                    validators={['required']}
                                    errorMessages={['este campo es obligatorio']}
                                    SelectProps= {
                                        {native:true}
                                    }
                                >
                                    {selectionSchemes.map((scheme) => (
                                        <option key={scheme} value={scheme}>
                                            {scheme}
                                        </option>
                                    ))}
                                </TextValidator>
                            </Grid>
                            <Grid 
                                item
                                lg={2}
                                md={2}
                                sm={6}
                                xs={12}
                            >
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                    className="ml-4 mb-4"
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Escpge la fecha"
                                        name="startDate"
                                        value={options.startDate}
                                        onChange={handleDate}
                                        KeyboardButtonProps={{
                                          'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid 
                                item
                                lg={true}
                                md={true}
                                sm={6}
                                xs={12}
                            >
                                <Grid 
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="stretch"
                                    spacing={3}
                                >
                                    <Grid 
                                        item
                                        lg={4}
                                        md={4}
                                        sm={12}
                                        xs={12}
                                    > 
                                            <p className="h5 text-primary">Días</p>
                                            <NumericInput
                                                label="Dias"
                                                onChange={handleDays}
                                                name="numDays"
                                                min={0}
                                                max={9}
                                                value={options.numDays || 5}
                                            />
                                    </Grid>
                                    <Grid 
                                        item
                                        lg={4}
                                        md={4}
                                        sm={12}
                                        xd={12}
                                    > 
                                        <p className="h5 text-primary">Min</p>
                                        <NumericInput
                                            label="Dias"
                                            onChange={handleMinTime}
                                            name="minTime"
                                            min={0}
                                            max={23}
                                            value={options.minTime}
                                        />
                                    </Grid>
                                    <Grid 
                                        item
                                        lg={1}
                                        md={1}
                                        sm={12}
                                        xd={12}
                                    > 
                                        <p className="h5 text-primary">Max</p>
                                        <NumericInput
                                            title="Dias"
                                            onChange={handleMaxTime}
                                            name="maxTime"
                                            min={0}
                                            max={23}
                                            value={options.maxTime}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid 
                                item
                                lg={12}
                                md={12}
                                sm={12}
                                xd={12}
                            >
                                <Button
                                    className="mt-10"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={() => {
                                        console.log(state)
                                    }}
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                        
                    </ValidatorForm>
                    
                </Card>
                
            </Grid>
            <Grid 
                item
                lg={8}
                md={8}
                sm={12}
                xd={12}
            >            
                <Card className="p-4 h-full">
                    <ScheduleSelector
                        selection={state.schedule}
                        numDays={options.numDays}
                        minTime={options.minTime}
                        maxTime={options.maxTime}
                        hourlyChunks={options.hourlyChunks}
                        startDate={options.startDate}
                        selectionScheme={options.selectionScheme}
                        onChange={handleChange}
                    />
                </Card>
            </Grid>  
        </Grid>
    )
}

export default TherapistSchedule;