import { BASE_URL } from "./constant";


export async function userlogin(username, password) {
    return await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }) .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}  

export async function userProfile(token) {
    return await fetch(`${BASE_URL}/users/me`), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    } .then(response => response.json())
      .then(result => {
        console.log(result);
    })
    .catch(console.error);
}

