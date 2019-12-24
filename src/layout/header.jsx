import React from 'react';
import Logo from '../components/logo';
import { Link } from 'react-router-dom';

const Header = ({ logedIn, setUser }) => {
    if (logedIn) {
        return (
            <nav className='sidenav'>
                <header>
                    <Logo></Logo>
                    <h1>Welcome to Pear forum, start chatting now!</h1>
                    <Link to='/'><button onClick={() => { setUser({}) }} className='regbutt'>Logout</button></Link>
                </header>
            </nav>
        )
    }

    return (
        <nav>
        <header className='sidenav'>
            <Logo></Logo>
            <h1>Please login or register to join Pear forum!</h1>
            <Link to='/login'><button className='regbutt'>Login</button></Link>
            <Link to='/register'> <button className='regbutt'>Register</button></Link>
        </header>
        </nav>
    )
}

export default Header;

