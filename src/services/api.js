import axios from 'axios';

const api = axios.create({
    baseURL: 'https://buscadev-api.herokuapp.com'
});

export default api;