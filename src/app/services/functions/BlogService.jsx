import api from "app/services/api";
import firebase from "firebase/app"

const getAllBlogs = () => {
    return new Promise(async (resolve, reject) => {
        api.get("/b")
            .then( res => {
                var dates = [];
                res.data.data.forEach(doc => {
                    dates.push(doc.date);
                })
                console.log(dates);
                resolve(res.data);
            })
            .catch( error => {
                console.error(error);
                reject(error);
            })
    })
}

export { getAllBlogs };