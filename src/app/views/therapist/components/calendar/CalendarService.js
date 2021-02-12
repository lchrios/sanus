import api from 'app/services/api'
import axios from 'axios'

export const getAllEvents = (uid) => {
    return api.get('/u/'+uid+'/s')
}

export const addNewEvent = (event) => {
    console.log('añadiendo nuevo evento')
    console.log(event)
    return api.post('/s/new', {sessiondata: {...event}})
}

export const updateEvent = (event) => {
    return api.post('/s/'+event.id, {sessiondata: {...event}})
}

export const deleteEvent = (id) => {
    return api.delete('/s/'+id)
}
