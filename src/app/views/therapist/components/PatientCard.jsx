import React from 'react'
import {
    Card,
    Button,
    Avatar,
    Grid,
    LinearProgress,
    Divider,
    Icon,
    MenuItem
} from '@material-ui/core'
import { GoogleIcon } from 'app/components'
import { Link } from 'react-router-dom'
import { Twitter, Edit } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { MatxMenu } from 'app/components'

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

const PatientCard = ({ user }) => {
    const classes = useStyles()

    return (
        <Grid item lg={12} md={12} sm={12} xs={12} style={{maxWidth: 250}}>
            <Card className="bg-secondary mb-2 pb-2">
                <div className="p-3">
                    <div className="flex justify-between items-center m-2">
                        <div className="flex items-center m-2">
                            <Avatar className="h-56 w-56" src={user.imgUrl} />
                            <div className="ml-4">
                                <h5 className="m-0">{user.name}</h5>
                                <p className="mb-0 mt-2 text-muted font-normal capitalize">
                                    {user.company?.toLowerCase()}
                                </p>
                            </div>
                        </div>
                        <div>
                          <MatxMenu
                              menuButton={
                                  <Icon className="cursor-pointer">more_horiz</Icon>
                              }
                          >
                                <MenuItem>
                                        <Icon fontSize="small"> done </Icon>
                                        <span className="pl-4"> Marcar como completada </span>
                                </MenuItem>
                              <MenuItem>
                                  <Icon fontSize="small"> account_circle </Icon>
                                  <span className="pl-4"> Ver perfil </span>
                              </MenuItem>
                              <MenuItem>
                                  <Icon fontSize="small"> edit </Icon>
                                  <span className="pl-4"> Editar sesion </span>
                              </MenuItem>
                          </MatxMenu>
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

export default PatientCard
