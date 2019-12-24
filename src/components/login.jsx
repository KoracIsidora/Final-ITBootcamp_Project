import React from 'react';
import { useState } from 'react';
import { login } from '../utilities/service';

const Login = ({setUser,history}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        login({username, password}).then(data=>{
            console.log(data);
            if(data.success===true){
                setUser(data);
                history.push('/list');
            } else{
                console.log('Nije ulogovan');   
            }
        })
    }

    return (
        <form className='loginform'>
            <label>Username: </label>
            <input className='login' type='text' placeholder='Username' required onInput={e=>{
                setUsername(e.target.value);
            }}/>
            <label>Password: </label>
            <input className='login' type='password' placeholder='Password' required onInput={e=>{
                setPassword(e.target.value);
            }}/>
            <input className='regbutt' type='submit' value='Login'  onClick={e=>{e.preventDefault(); handleLogin()}}/>
        </form>
    )
}

export default Login;