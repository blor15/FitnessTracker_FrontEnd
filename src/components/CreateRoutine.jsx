import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../api/constant';
import { createRoutines } from '../api/routines';

export const CreateRoutine = ({setMyRoutines, token, myRoutines}) => {
    const [routineName, setRoutineName] = useState('')
    const [routineGoal, setRoutineGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const username = localStorage.getItem('username')

    useEffect(async () => {
        const fetchedRoutines = await createRoutines(username, setMyRoutines, token)
        await setMyRoutines(fetchedRoutines)
    }, [])

    return (
        <div>
            <h2 style={{marginTop: 5 + "em"}}>Add New Routine</h2>
            <form
                className="newRoutineContainer"
                onSubmit={async (e) => {
                    e.preventDefault();
                    console.log("Form submitted")

                    try {
                        const response = await fetch(`${BASE_URL}/routines`,   
                        {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer ' + token
                            },
                            body: JSON.stringify({
                                name: routineName,
                                goal: routineGoal,
                                isPublic: isPublic
                            })
                        })
                        
                        const result = await response.json();
                        const newRoutineResult = await createRoutines(username, setMyRoutines, token)
                        
                        console.log("API call result is", newRoutineResult)
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >                
                   <input 
                        type='text'
                        value={routineName}
                        onChange={e => setRoutineName(e.target.value)}
                        id='routineName'
                        required
                        placeholder='Routine Name'
                        className='form-control mb-2 editInput'
                   />
                
                    <input 
                        type='text'
                        value={routineGoal}
                        onChange={e => setRoutineGoal(e.target.value)}
                        id='routineGoal'
                        required
                        placeholder='Routine Goal'
                        className='form-control mb-2 editInput'
                    />
                
                    <input 
                        type="checkbox"
                        value={isPublic}
                        onChange={e => setIsPublic(true)}
                        id="isPublic"
                    >
                    </input><p>Public</p>
                
                <button className="newRoutineBtn btn btn-lg btn-block mt-4">
                    Submit New Routine
                </button>
            </form>
        </div>
    )
}