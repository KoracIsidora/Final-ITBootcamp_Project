import React from 'react';
import { useState } from 'react';
import { login } from '../utilities/service';

const Login = ({ setUser, history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    let poruka = 'Wrong username or password!';

    function handleLogin() {
        login({ username, password }).then(data => {
            if (data.success === true) {
                setUser(data);
                history.push('/list');
            } else {
                setMessage(poruka);
            }
        })
    }

    return (
        <div className='log'>
            <form className='loginform'>
                <label>Username: </label>
                <input className='login' type='text' placeholder='Username' required onInput={e => {
                    setUsername(e.target.value);
                }} />
                <label>Password: </label>
                <input className='login' type='password' placeholder='Password' required onInput={e => {
                    setPassword(e.target.value);
                }} />
                <p>{message}</p>
                <input className='regbutt' type='submit' value='Login' onClick={e => { e.preventDefault(); handleLogin() }} />
            </form>
            
        </div>
    )
}

export default Login;