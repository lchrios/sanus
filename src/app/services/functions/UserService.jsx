import api from 'app/services/api'
import { reject } from 'lodash';

/*
 * Functions user to use:
    - 1. getTherapist(uid)
    - 2. getSessions(uid)
    - 3. assignTherapist(uid)
    - 4. getUserInfo(uid)

*/

const getUserInfo = (uid) => {
    return new Promise(async (resolve, reject) => {
        api.get(`/u/${uid}`)
        .then( res => {
            resolve(res.status == 204 ? undefined : res.data);
        })
        .catch( error => {
            console.error(error);
            reject(error);
        })
    })
}

const getTherapist = (uid) => {
    return new Promise(async (resolve, reject) => {
        api.get(`/u/${uid}/t`)
        .then( res => {
            resolve(res.status == 204 ? undefined : res.data);
        })
        .catch( error => {
            console.error(error);
            reject(error);
        })
    })
}

const getSessions = (uid) => {
    return new Promise(async (resolve, reject) => {
        api.get(`/u/${uid}/s`)
        .then( res => {
            resolve(res.status == 204 ? undefined : res.data);
        })
        .catch( error => {
            console.error(error);
            reject(error);
        })
    })
}

const assignTherapist = (uid, tid) => {
    return new Promise(async (resolve, reject) => {
        api.post(`/u/${uid}/t/${tid}`)
        .then( res => {
            resolve(res.status == 204 ? undefined : res.data);
        })
        .catch( error => {
            console.error(error);
            reject(error);
        })
    })
}


export { getTherapist, getSessions, assignTherapist };