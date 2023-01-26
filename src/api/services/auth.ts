import axios, { AxiosInstance } from 'axios';
import { baseUrl } from '../http/default';

class AuthService {
    client: AxiosInstance = axios.create({
        baseURL: baseUrl,
    });

    async login(username: string, password: string) {
        const { data } = await axios.post(baseUrl + '/auth/login', {
            username,
            password,
        });
        return data;
    }

    async refreshToken() {
        const { data } = await axios.post(baseUrl + '/auth/refresh');
        const token = data.token;

        localStorage.setItem('token', token);

        return data;
    }
}

export default AuthService;
