import { BASE_URL } from "./constant";

export async function fetchRoutines() {
    return await fetch(`${BASE_URL}/routines`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
};

export async function createRoutines (name, goal, isPublic, token) {
    return await fetch(`${BASE_URL}/routines`, {
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
    }).then(response => response.json())
      .then(result => {
          console.log(result);
      })
      .catch(console.error);
};    

export async function editRoutines(routineId, name, goal, isPublic, token) {
    return await fetch(`${BASE_URL}/routines/${routineId}`, {
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
    }).then(response => response.json())
      .then(result => {
          console.log(result);
      })
      .catch(console.error);
};

export async function delteRoutine(routineId, token) {
    return await fetch(`${BASE_URL}/routines/${routineId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + token
        },
    }).then(response => response.json())
      .then(result => {
        console.log(result);
    })
      .catch(console.error);
};