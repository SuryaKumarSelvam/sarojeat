import axios from 'axios';

const api = axios.create({
    baseUrl:"",
    headers:{
        'Content-type': 'application/json',
    }
});