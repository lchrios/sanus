import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import { Calendar, Views, globalizeLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import CalendarHeader from './components/CalendarHeader'
import * as ReactDOM from 'react-dom'
import { Breadcrumb } from 'app/components'
import { getAllEvents, updateEvent } from './components/CalendarService'
import EventEditorDialog from './components/EventEditorDialog'
import globalize from 'globalize'
import Axios from 'axios'
import PatientCard from './components/PatientCard'
import PatientCardEmpty from './components/PatientCardEmpty'
import {
    Card,
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import axios from 'axios'
import firebase from 'firebase'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    calendar: {
        '& .rbc-event': {
            background: 'rgba(var(--primary),1) !important',
        },
        '& .rbc-selected': {
            background: 'rgba(var(--secondary),1) !important',
        },
        '& .rbc-calendar': {
            height: 'auto',
            flexGrow: 1,
        },
        '& .rbc-header': {
            padding: '12px 16px !important',
            '& a': {
                paddingBottom: '8px !important',
            },
            '& span': {
                fontSize: '15px !important',
                fontWeight: 500,
            },
        },
    },
    cart: {
        minWidth: 900,
    },
}))

const localizer = globalizeLocalizer(globalize)

const DragAndDropCalendar = withDragAndDrop(Calendar)

let viewList = Object.keys(Views).map((key) => Views[key])

const TherapistCalendar = () => {
    const [events, setEvents] = useState([])
    const [newEvent, setNewEvent] = useState(null)
    const [shouldShowEventDialog, setShouldShowEventDialog] = useState(false)
    const [isAlive, setIsAlive] = useState(true)
    const [userList, setUserList] = useState([])

    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0)

    const headerComponentRef = useRef(null)
    const classes = useStyles()

    const updateCalendar = () => {
        getAllEvents()
            .then((res) => res.data)
            .then((events) => {
                events = events?.map((e) => ({
                    ...e,
                    start: new Date(e.start),
                    end: new Date(e.end),
                }))
                setEvents(events)
            })
    }

    const handleDialogClose = () => {
        setShouldShowEventDialog(false)
        updateCalendar()
    }

    const handleEventMove = (event) => {
        handleEventResize(event)
    }

    const handleEventResize = (event) => {
        updateEvent(event).then(() => {
            updateCalendar()
        })
    }

    const openNewEventDialog = ({ action, ...event }) => {
        if (action === 'doubleClick') {
            setNewEvent(event)
            setShouldShowEventDialog(true)
        }
    }

    const openExistingEventDialog = (event) => {
        setNewEvent(event)
        setShouldShowEventDialog(true)
    }



    useEffect(() => {
        updateCalendar()
        axios.get('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/u').then(res => {
            console.log(res.data)
            setUserList(res.data)
        })
    }, [])


    {/**Añadir validación de paciente con base de datos */}
    if ( userList.length == 0 ) {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb routeSegments={[{ name: 'Mis citas' }]} />
                </div>
                <Card elevation={3} className={clsx('m-sm-45', classes.cart)}>
                    <Grid container spacing={2} style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', marginBottom: '10px'}}>
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <Card className="bg-ligh bg-default flex items-center justify-between p-4">
                                <Button
                                    className="mb-4"
                                    variant="contained"
                                    color="secondary"
                                    onClick={() =>
                                        openNewEventDialog({
                                            action: 'doubleClick',
                                            start: new Date(),
                                            end: new Date(),
                                        })  
                                    }
                                >
                                    Añadir evento
                                </Button>
                            </Card>
                            <div
                                className={clsx('h-full-screen flex-column', classes.calendar)}
                            >
                                <div ref={headerComponentRef} />
                                <DragAndDropCalendar
                                    selectable
                                    localizer={localizer}
                                    events={events}
                                    onEventDrop={handleEventMove}
                                    resizable
                                    onEventResize={handleEventResize}
                                    defaultView={Views.MONTH}
                                    defaultDate={new Date()}
                                    startAccessor="start"
                                    endAccessor="end"
                                    views={viewList}
                                    step={60}
                                    showMultiDayTimes
                                    components={{
                                        toolbar: (props) => {
                                            return headerComponentRef.current ? (
                                                ReactDOM.createPortal(
                                                    <CalendarHeader {...props} />,
                                                    headerComponentRef.current
                                                )
                                            ) : (
                                                <div>Header component not found</div>
                                            )
                                        },
                                    }}
                                    // onNavigate={handleNavigate}
                                    onSelectEvent={(event) => {
                                        openExistingEventDialog(event)
                                    }}
                                    onSelectSlot={(slotDetails) =>
                                        openNewEventDialog(slotDetails)
                                    }
                                />
                            </div>
                            {shouldShowEventDialog && (
                                <EventEditorDialog
                                    handleClose={handleDialogClose}
                                    open={shouldShowEventDialog}
                                    event={newEvent}
                                />
                            )}     
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}
                            direction="column"
                            justify="center"
                            alignItems=""
                        >
                            <Card style={{maxWidth: 'full'}}>
                                <div className="bg-light bg-default p-6 flex flex-wrap mx-0">
                                    <h1>Próximos pacientes</h1>
                                    <div className="py-1"></div>
                                </div>
                                <Grid container spacing={1}
                                justify="space-evenly"
                                alignItems="stretch"
                                direction="column"
                                className="bg-default flex items-center justify-between p-4"
                                >
                                    {userList
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((user) => (
                                            <PatientCard user={user} />
                                    ))}
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }

    else

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: 'Mis citas' }]} />
            </div>
            <Card elevation={3} className={clsx('m-sm-45', classes.cart)}>
                <Grid container spacing={2} style={{marginLeft: '10px', marginRight: '10px', marginTop: '10px', marginBottom: '10px'}}>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Card className="bg-ligh bg-default flex items-center justify-between p-4">
                            <Button
                                className="mb-4"
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                    openNewEventDialog({
                                        action: 'doubleClick',
                                        start: new Date(),
                                        end: new Date(),
                                    })  
                                }
                            >
                                Añadir evento
                            </Button>
                        </Card>
                        <div
                            className={clsx('h-full-screen flex-column', classes.calendar)}
                        >
                            <div ref={headerComponentRef} />
                            <DragAndDropCalendar
                                selectable
                                localizer={localizer}
                                events={events}
                                onEventDrop={handleEventMove}
                                resizable
                                onEventResize={handleEventResize}
                                defaultView={Views.MONTH}
                                defaultDate={new Date()}
                                startAccessor="start"
                                endAccessor="end"
                                views={viewList}
                                step={60}
                                showMultiDayTimes
                                components={{
                                    toolbar: (props) => {
                                        return headerComponentRef.current ? (
                                            ReactDOM.createPortal(
                                                <CalendarHeader {...props} />,
                                                headerComponentRef.current
                                            )
                                        ) : (
                                            <div>Header component not found</div>
                                        )
                                    },
                                }}
                                // onNavigate={handleNavigate}
                                onSelectEvent={(event) => {
                                    openExistingEventDialog(event)
                                }}
                                onSelectSlot={(slotDetails) =>
                                    openNewEventDialog(slotDetails)
                                }
                            />
                        </div>
                        {shouldShowEventDialog && (
                            <EventEditorDialog
                                handleClose={handleDialogClose}
                                open={shouldShowEventDialog}
                                event={newEvent}
                            />
                        )}     
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}
                        direction="column"
                        justify="center"
                        alignItems=""
                    >
                        <Card style={{maxWidth: 'full'}}>
                            <div className="bg-light bg-default p-6 flex flex-wrap mx-0">
                                <h1>Próximos pacientes</h1>
                                <div className="py-1"></div>
                            </div>
                            <Grid container spacing={1}
                            justify="space-evenly"
                            alignItems="stretch"
                            direction="column"
                            className="bg-default flex items-center justify-between p-4"
                            >
                               
                                        <PatientCardEmpty  />
                                
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
    
}

export default TherapistCalendar
