import axios from 'axios';

export async function fetchToken(username, password) {
    const response = await axios.post('http://localhost:3001/login', {
        username,
        password
    });
    return response.data;
}

export async function fetchCurrentUserData(token) {
    const response = await axios.get('http://localhost:3001/users/me', {
        headers: {
            'authorization': token,
        }
    });
    return response.data;
}