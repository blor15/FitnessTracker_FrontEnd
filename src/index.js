import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import { BASE_URL } from './api/constant';

import { Activities } from './components/Activities';
import { Homepage } from './components/Homepage';
import { Logout } from './components/Logout';
import { Routines } from './components/Routines';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { MyRoutines } from './components/MyRoutines';

const Home = () => {
  
  const [token, setToken] = useState('');
  const [activities, setActivities] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState({})

  useEffect(() => {
      const storedToken = localStorage.getItem('token')
      if (storedToken) {
          setToken(storedToken);
      }
      if (!storedToken) setToken('');
      
}, [])


useEffect(() => {
  async function getActivities(){
    const res =  await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
      .then(result => {
        return result;
      })
      .catch(console.error);
    console.log(res);
    setActivities(res);
}
getActivities();
}, [])

  return (
      <BrowserRouter>
          <Navbar />
          <Route path='/login' exact render={(routeProps) => <Login {...routeProps} setToken={setToken} token={token}/> } />
          <Route path='/register' exact render={(routeProps) => <Login {...routeProps} setToken={setToken} /> } />
          <Route path='/activities' exact render={() => <Activities token={token} activities={activities} setActivities={setActivities}/> } />
          <Route path='/routines' exact render={(routeProps) => <Routines setRoutines={setRoutines} routines={routines} {...routeProps} /> } />
          { !!token === true &&
              <Route path='/myroutines' exact render={(routeProps) => <MyRoutines {...routeProps} activities={activities} isLoggedIn={!!token} myRoutines={myRoutines} setMyRoutines={setMyRoutines} token={token} /> } />
          }
          <Route path='/logout' exact render={(routeProps) => <Logout {...routeProps} setToken={setToken} /> } />
          <Route path='/' exact render={() => <Homepage token={token} />}/>
      </BrowserRouter>
  )
}


ReactDOM.render(
  <Home />,
  document.getElementById('app'),
);