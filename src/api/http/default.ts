import axios from 'axios';
import authService from '../services/auth';

export const baseUrl = 'https://photodrop-photographer.onrender.com';

const defaultClient = axios.create({
    baseURL: baseUrl,
    // withCredentials: true,
});

defaultClient.interceptors.request.use((config) => {
    if (config.headers)
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config
});

defaultClient.interceptors.response.use(
    (response) => {
        return response;
    }, async function (error) {
        const originalRequest = error.config;
        if (!originalRequest._retry && error.response.status === 401) {
            originalRequest._retry = true;
            const success = await authService.refreshToken();
            if (success) {
                defaultClient.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
                return defaultClient(originalRequest);
            }
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export default defaultClient;

