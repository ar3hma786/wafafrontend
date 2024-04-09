import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
});