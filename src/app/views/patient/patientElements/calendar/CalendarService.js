import api from 'app/services/api'

export const getAllEvents = (uid) => {
    return api.get('/u/'+uid+'/s')
}

export const addNewEvent = (event) => {
    console.log('añadiendo nuewvo evento')
    return api.post('/s/new', { sessiondata: event })
}

export const updateEvent = (event) => {
    return api.post('/s/'+event.id, event)
}

export const deleteEvent = (id) => {
    return api.delete('/s/'+id)
}
