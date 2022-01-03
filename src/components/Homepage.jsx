import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

export const Homepage = (token) => {
  return (
  <div>
    <h1>Your Fitness Tracker</h1>
    <div className='homepageBtn-container'>
        <button className='homepageBtn'><Link to='/activities'>View Activities</Link></button>
        <button className='homepageBtn'><Link to='/routines'>View Routines</Link></button>
        {token 
        ? <>
            <button className='homepageBtn'><Link to='/myRoutines'>View My Routines</Link></button>
            <button className='homepageBtn'><Link to='/logout'>Logout</Link></button>
        </>
        :   <button className='homepageBtn'><Link to='/login'>Login</Link></button>
        }
    </div>
  </div>
)
}

