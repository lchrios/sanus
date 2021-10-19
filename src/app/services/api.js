import axios from 'axios';

const hosts = [
  'http://localhost:9999/sanus-5ce83/us-central1/api', // * local emulator dev host
  'https://us-central1-sanus-5ce83.cloudfunctions.net/api' // * cloud api host
]

export default axios.create({
  baseURL: hosts[0],
  headers: {
    "Content-type": "application/json"
  }
});