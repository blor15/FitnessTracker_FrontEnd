import { BASE_URL } from './constant';

//user endpoints

export async function register(username, password, setToken, setUsername, setPassword) {
    try {
       if(password.length > 8) {
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
        if (result.token) {
            const token = result.token;
            const username = result.user.username
            setToken(token);
            localStorage.setItem('token', token);
            setUsername(username)
            localStorage.setItem('username', username)
            return result
        } else {
            alert(result.error)
            setUsername('');
            setPassword('');
        }
       }
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
        if (result.token) {
            const token = result.token;
            const username = result.user.username
            setToken(token);
            localStorage.setItem('token', token);
            setUsername(username)
            localStorage.setItem('username', username)
            return result
        } else {
            alert(result.error)
            setUsername('');
            setPassword('');
        }
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