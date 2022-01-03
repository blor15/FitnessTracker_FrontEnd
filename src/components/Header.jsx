import { Link } from 'react-router-dom';

export const Header = ({ token }) => {
    return (
        <header className='navbar navbar-expand-sm navbar-light bg-light fixed-top'>
            <div className='collapse navbar-collapse' id='navbarNav'>
            <button> <Link to='/' className='nav-link'>Home</Link> </button>
            <button> <Link to='/routines' className='nav-link'> Routines </Link> </button>
            <button> <Link to='/activities' className='nav-link'> Activities </Link> </button>
            {!token ? ( 
                <>
            <button> <Link to='/login' className='nav-link'> Login </Link> </button>
            </>
            ) : ( 
                <>
                <Link to='/myroutines' className='nav-link'> My Routines </Link>
                <Link to='/logout' className='nav-link'> Logout </Link>
             </> 
             )}
            </div>
        </header>
    )
}