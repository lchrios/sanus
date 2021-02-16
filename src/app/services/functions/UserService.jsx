import api from 'app/services/api'

const getTherapist = (uid) => {
    return new Promise(async (resolve, reject) => {
        api.get('/u/'+uid+'/t')
            .then(res => {
                console.log(res.data);
                resolve(res.data);
            })
    })
}


export { getTherapist };