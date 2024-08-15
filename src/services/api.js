import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3001',
});


api.interceptors.request.use( async config => {
    const userData = await localStorage.getItem('devburguer:userData')
    const token = JSON.parse(userData).data.token
    config.headers.authorization = `Bearer${token}`
    return config
}

)




