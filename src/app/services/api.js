import useAuth from 'app/hooks/useAuth';
import axios from 'axios';

const hosts = [
  'http://localhost:9999/iknelia-3cd8e/us-central1/api', // * local emulator dev host
  'https://us-central1-iknelia-3cd8e.cloudfunctions.net/api' // * cloud api host
]

export default axios.create({
  baseURL: hosts[1],
  headers: {
    "Content-type": "application/json"
  }
});