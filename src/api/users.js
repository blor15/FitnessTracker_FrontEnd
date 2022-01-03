import { BASE_URL } from './constant';

//user endpoints

export async function register(username, password) {
    try{
        const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        const result = await response.json();
        return result
    }   catch (error) {
        console.error(error)
    }
};


export async function login(username, password){
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export async function getUser(token){
    try{
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
    })
    const result = await response.json();
    return result;
    } catch (error) {
        console.error(error);
    }
};

export async function getUserRoutines(username, token) {
    try {
        const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        const result = await result.json();
        return result;
    } catch (error) {
        console.error(error)
    }
}