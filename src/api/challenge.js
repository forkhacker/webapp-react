import axios from 'axios';
import { BASE_URL } from './constants';


export async function list() {
    const response = await axios.get('/challenges', {
        baseURL: BASE_URL,
    });
    return response.data.data.challenges;
}
