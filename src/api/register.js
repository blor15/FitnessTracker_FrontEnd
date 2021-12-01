import { BASE_URL } from './constant';

export async function register(username, password) {
    return await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}