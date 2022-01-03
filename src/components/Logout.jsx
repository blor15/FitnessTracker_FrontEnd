import React from 'react'

const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
};

export const Logout = ({ setToken, history }) => {
    
    return  ( 
        <main className='logoutFormContainer mt-5'>
            <h1>Logging out?</h1>
            <button className='btn btn-lg btn-primary btn-block mt-4' 
                onClick={() => {
                handleLogout();
                setToken('');
                history.push('/login')
            }}>Log Me Out</button> 
        </main>
    )
        
    
}
