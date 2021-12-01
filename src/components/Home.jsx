import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <h1>Fitness Tracker</h1>
      <h3>Welcome to your Fitness Tracker!</h3>
      <div>
        <BrowserRouter>
        <button className='activities'><Link to='Activities'></Link></button>
        <button className='login'><Link to='Login'></Link></button>
        </BrowserRouter>
      </div>
    </div>
  )
}

