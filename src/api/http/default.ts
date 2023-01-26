import axios from 'axios';
import AuthService from '../services/auth';

export const baseUrl = 'https://api.photodrop.com';

export const headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
}

const defaultClient = axios.create({
    baseURL: baseUrl,
    headers,
});


defaultClient.interceptors.response.use(
    (response) => {
        return response;
    }, async (error) => {
        if (error.response.status === 401) {
            const authService = new AuthService();
            await authService.refreshToken();
            return defaultClient.request(error.config);
        }
    },
);

export default defaultClient;

