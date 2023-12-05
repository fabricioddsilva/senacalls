const axios = require('axios');

const api = axios.create({
    baseURL: 'http://198.168.0.108:3000/'
})

export default api;


