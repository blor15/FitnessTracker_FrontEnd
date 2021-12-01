import { BASE_URL } from "./constant";

export async function activities() {
    try {
        const response = await fetch(`${BASE_URL}/activities`)
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err)
    } throw err;
};

export async function createActivities ({id, name, description}, token) {
    return await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            id,
            name,
            description
        }) 
           .then(response => response.json())
           .then(result => {
               console.log(result);
           }) 
    }      
)}

export async function updateActivities ()