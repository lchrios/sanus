import axios from 'axios'

export const getAllEvents = (uid) => {
    return axios.get('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/u/'+uid+'/s')
}

export const addNewEvent = (event) => {
    console.log('añadiendo nuevo evento')
    console.log(event)
    return axios.post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/new', {sessiondata: {...event}})
}

export const updateEvent = (event) => {
    return axios.post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/'+event.id, {sessiondata: {...event}})
}

export const deleteEvent = (id) => {
    return axios.delete('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/'+id)
}