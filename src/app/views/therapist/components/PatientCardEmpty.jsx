import React from 'react'
import {
    Card,
    Avatar,
    Grid,
    Button,
    Table,
    TableBody,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MatxMenu } from 'app/components'
import history from 'history.js'
import useAuth from 'app/hooks/useAuth'

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

const useStyles = makeStyles(({ palette, ...theme }) => ({
    google: {
        color: '#ec412c',
    },
    twitter: {
        color: '#039ff5',
    },
}))

const PatientCardEmpty = () => {
    const classes = useStyles()
    const {user} = useAuth()

    return (
        <Grid item lg={12} md={12} sm={12} xs={12} style={{width: 'full' }}>
            <Card className="bg-secondary mb-2 pb-2">
                <div className="p-3">
                    <div className="items-center m-2">
                        <div className="m-2">
                            <div className="flex-column items-center pb-2">
                                <Avatar className="h-56 w-56"  />
                                <div className="ml-4">
                                    <h4 className="mb-0 mt-2 font-normal capitalize">
                                        No tienes ningún paciente
                                    </h4>
                                </div>
                            </div>
                            <Table className="mb-4">
                                <TableBody>
                                    <Button
                                    onClick={() => history.push('/'+ user.uid+'/browse') }
                                    variant="contained"
                                    color="primary"
                                    className="x-center"
                                    >

                                        Promocionar perfil
                                    </Button>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>

                {/*<Divider className="mb-4" />

                <div className="flex flex-wrap justify-between items-center px-5 m--2">
                    <p className="text-muted m-0 m-2"></p>
                    <div className="flex flex-wrap m-2">
                        <Button
                            size="small"
                            className="bg-light-primary hover-bg-primary text-primary px-5 mr-1"
                            startIcon={<Edit />}
                        >
                            EDITAR
                        </Button>
                        <Button
                            size="small"
                            className="bg-light-primary hover-bg-primary text-primary px-5"
                        >
                            PERFIL
                        </Button>
                    </div>
                </div>*/}
            </Card>
        </Grid>
    )
}

export default PatientCardEmpty
