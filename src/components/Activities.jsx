import React from 'react';
import { getAllActivities } from '../api'
import { CreateActivity } from './CreateActivity';

export const Activities = ({ token, activities, setActivities }) => {
    return (
        <main style={{margin: 4 +'em'}} className="border mb-4 rounded overflow-hidden">
        { token ? <CreateActivity setActivities={setActivities} token={token} activities={activities}/> : null }

        <h1>Activities</h1> 
        {activities &&
           activities.map(activity => (
               <article key={activity.id}>
                   <div className='activityContainer'>
                       <h3>Activity:</h3>
                       <p>{activity.name}</p>
                       <p>Description: {activity.description}</p>
                   </div>
               </article>
           ))
           }
        </main>
    )}
