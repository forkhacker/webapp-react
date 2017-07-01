import axios from 'axios';
import { BASE_URL } from './constants';


export default async function login(code) {
    const response = await axios.get('/auth/github/callback', {
        baseURL: BASE_URL,
        params: { code },
    });
    return response.data.data;
}
