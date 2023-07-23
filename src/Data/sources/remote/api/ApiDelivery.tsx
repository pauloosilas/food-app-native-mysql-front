import axios from 'axios';

const ApiDelivery = axios.create({
    baseURL: 'http://172.18.128.1:3000/api',
    headers: {
        'content-type':'application/json'
    }
})

export { ApiDelivery } 