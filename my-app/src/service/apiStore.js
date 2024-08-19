

import axios from 'axios';

const apiStore = axios.create({
    baseURL: 'http:// 192.168.5.241:8082', 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default apiStore;

