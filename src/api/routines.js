import { BASE_URL } from "./constant";

export async function fetchAllRoutines() {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error)
    }
};

export async function createRoutines (name, goal, isPublic, token) {
   try{ 
       const response = await fetch(`${BASE_URL}/routines`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    })
    const result = await response.json();
    return result
    } catch (error) {
        console.error(error);
    }
};    

export async function editRoutines( name, goal, isPublic, token) {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    })
    const result = await response.json();
    return result
    } catch (error) {
        console.error(error);
    }
};

export async function deleteRoutine(token) {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            },
        })
        const result = await response.json();
        return result
    }   catch (error) {
        console.error(error);
    }

};