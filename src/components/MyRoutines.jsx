import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserRoutines, deleteRoutine } from '../api';

async function getMyRoutines(username, token, setMyRoutines) {
    const routines = await getUserRoutines(username, token)
    setMyRoutines(routines)
    return routines;
}


export const MyRoutines = ({token, user}) => {
    const [myRoutines, setMyRoutines] = useState([]);
    const history = useHistory();

    function backToAllRoutines() {
        history.push('/routines')
    };


    useEffect(() => {
        if(user) {
            getMyRoutines(user, token, setMyRoutines)
        }
    }, [user])




    return  (
            <div>

            <h2> Routines for {user} </h2>

            {myRoutines.map((routine, index) => {
                return (
                    <div key={index}>
                        <h4>Name: {routine.name}</h4>
                        <ul>
                            <li>Goal: {routine.goal}</li>
                            <li>Activities: {routine.activities}</li>
                            <li>Activities: </li>
                                {myRoutines.activities ? (myRoutines.activities.map((activity, actindex) => (
                                    <ul key={actindex}>
                                        <li>Activity Name: {activity.name}</li>
                                        <ul>
                                            <li>Description: {activity.description}</li>
                                            <li>Count: {activity.count}</li>
                                            <li>Duration: {activity.duration}</li>
                                        </ul> 
                                    </ul>
                                ))) : 
                                (<p>none</p>)}
                                <ul>
                                        <button
                                            onClick={async () => {
                                            const routineId = routine.id
                                            const result = await deleteRoutine(token, routineId);
                                            alert('Routine deleted!');
                                            backToAllRoutines();
                                            }}
                                            className="deleteButton">
                                            Delete Routine
                                        </button>
                                </ul>
                        </ul>
                    </div>
                )
            })}

            </div>
            )
        
}