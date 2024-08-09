import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('devburger:userData');

    if (userData) {
        try {
            const parsedData = JSON.parse(userData);
            if (parsedData && parsedData.data && parsedData.data.token) {
                const token = parsedData.data.token;
                config.headers.authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Erro ao parsear userData:', error);
        }
    } else {
        console.warn('Nenhum dado de usuário encontrado no localStorage');
    }

    return config;
}, error => {
    return Promise.reject(error);
});

