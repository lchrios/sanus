import axios from 'axios'

export const getAllEvents = () => {
    return axios.get('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/p/:pid/s')
}

export const addNewEvent = (event) => {
    return axios.post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/new', event)
}

export const updateEvent = (event) => {
    return axios.post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/:sid', event)
}

export const deleteEvent = (event) => {
    return axios.post('https://us-central1-iknelia-3cd8e.cloudfunctions.net/api/s/:sid')
}
