import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@material-ui/core'
import { Calendar, Views, globalizeLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import CalendarHeader from './PatientCalendarHeader'
import * as ReactDOM from 'react-dom'
import { getAllEvents, updateEvent } from './CalendarService'
import EventEditorDialog from './EventEditorDialog'
import globalize from 'globalize'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'

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
}))

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const localizer = globalizeLocalizer(globalize)

const DragAndDropCalendar = withDragAndDrop(Calendar)

let viewList = Object.keys(Views).map((key) => Views[key])

const PatientCalendar = () => {
    const [events, setEvents] = useState([])
    const [newEvent, setNewEvent] = useState(null)
    const [shouldShowEventDialog, setShouldShowEventDialog] = useState(false)

    const headerComponentRef = useRef(null)
    const classes = useStyles()

    const { user } = useAuth()

    const updateCalendar = () => {
        getAllEvents(user.uid)
            .then( res => {
                var ev = []
                res.data.data.forEach((e) => (ev.push({
                    ...e,
                    title: e.note,
                    start: new Date(e.start),
                    end: new Date(e.end),
                })))
                setEvents(ev)
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
    }, [])

    return (
        <div className="m-sm-30">
            <Button
                className="mb-4"
                variant="contained"
                color="secondary"
                onClick={() => {
                    openNewEventDialog({
                        action: 'doubleClick',
                        start: new Date(),
                        end: new Date().addHours(1),
                    })
                }}
            >
                Agenda una sesión
            </Button>
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
                    onSelectSlot={(slotDetails) => {
                        slotDetails.end.addHours(1)
                        console.log(slotDetails)
                        openNewEventDialog(slotDetails)
                    }}
                />
            </div>
            {shouldShowEventDialog && (
                <EventEditorDialog
                    handleClose={handleDialogClose}
                    open={shouldShowEventDialog}
                    event={newEvent}
                />
            )}
        </div>
    )
}

export default PatientCalendar
