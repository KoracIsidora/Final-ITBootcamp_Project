import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ logedIn, setUser }) => {

    if (logedIn) {
        return (
            <header>
                <Link to='/'><button onClick={() => { setUser() }} className='regbutth'>Logout</button></Link>
            </header>
        )
    }

    return (
        <header >
            <Link to='/login'><button className='regbutth'>Login</button></Link>
            <Link to='/register'> <button className='regbutth'>Register</button></Link>
        </header>
    )
}

export default Header;

