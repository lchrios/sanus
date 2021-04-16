import React from "react";
import { Badge, Fab, Grid } from "@material-ui/core"
import clsx from "clsx";


const PatientsList = ({ users }) => {
    return users.data.map((patient, index) =>
        <Grid item key={users.id[index]} className="flex items-center mb-4 ml-2 mt-3">
            {!patient.answered
            ?   <Badge badgeContent="Nuevo" color='secondary'>
                    <Fab className='primary'>
                        <h4 className='text-secondary m-0 font-normal'>
                            {patient.name.slice(0,2)}
                        </h4>
                    </Fab>
                </Badge>
            :   <Fab className='primary'>
                    <h4 className={clsx('m-0 font-normal', patient.gender === "Hombre" ? 'text-primary' : 'text-error')}>
                        {patient.name.slice(0,2)}
                    </h4>
                </Fab>
            }
            <div className="ml-4">
                <h5 className="m-0 mb-1 font-medium">
                    {patient.name}
                </h5>
                <h6 className={clsx('m-0 font-normal', 
                    patient.answered 
                    ?   (patient.gender === "Hombre" ? 'text-primary' : 'text-error') 
                    :   'text-secondary')}
                >
                    {patient.email}
                </h6>
                <p className="m-0 text-muted">{patient.age}</p>
            </div>
        </Grid>
)
}

export default PatientsList