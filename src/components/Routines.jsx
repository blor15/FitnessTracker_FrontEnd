import React, { useEffect, useState } from 'react';
import { fetchAllRoutines } from '../api/routines';

export const Routines = () => {

    const [loading, setLoading] = useState(false);
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        const getRoutines = async () => {
            setLoading(true);

            const data = await fetchAllRoutines();
            
            setLoading(false);

            setRoutines(data)
            console.log(data)
        };
        getRoutines();
    }, []);

    return (
        <div className="border mb-4 rounded overflow-hidden">
            <h1>Routines</h1>
            {routines.map((routine) =>{
                return(
                    <div key={routine.id}>
                    <h2 className="p-3">Routine: {routine.name}</h2>
                    <p className="font-bold mb-3">Creator: {routine.creatorName}</p>
                    <p className="font-bold mb-3">Goal: {routine.goal}</p>
                </div>    )
            })}  
        </div>
    )
}