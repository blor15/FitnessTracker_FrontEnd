import { BASE_URL } from "./constant";

export async function getAllActivities() {
    try {
        const response = await fetch(`${BASE_URL}/activities`)
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err)
    } throw err;
};

export async function createActivities (name, description, token) {
    try {
        const response = await fetch(`${BASE_URL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(err)
    } throw error;
};

