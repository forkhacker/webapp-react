import axios from 'axios';
import { BASE_URL } from './constants';


export default function login(code) {
    console.log(5,code);
    return axios.get('/auth/github/callback', {
        baseURL: BASE_URL,
        params: { code },
    }).then((result) => result.data);
}
