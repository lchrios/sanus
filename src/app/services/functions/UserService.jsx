import api from 'app/services/api'

const getTherapist = (uid) => {
    return new Promise(async (resolve, reject) => {
        api.get('/u/'+uid+'/t')
            .then(res => {
                resolve(res.status == 204 ? undefined : res.data);
            })
            .catch( error => {
                console.error(error);
                reject(error);
            })
    })
}


export { getTherapist };