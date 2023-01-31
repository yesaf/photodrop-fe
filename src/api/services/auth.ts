import axios from 'axios';
import defaultClient from '../http/default';
import { baseUrl } from '../http/default';

class AuthService {
    async login(login: string, password: string) {
        const { data } = await axios.post(baseUrl + '/auth/login', {
            login,
            password,
        });

        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
            return true;
        }

        return false;
    }

    async refreshToken(): Promise<boolean> {
        const { data } = await axios.post(baseUrl + '/auth/refresh', {}, {
            withCredentials: true,
        });
        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
            return true;
        }
        return false;
    }

    checkToken() {
        return defaultClient.get('/auth/me').catch((error) => {
            return error.response;
        });
    }
}

export default new AuthService();
