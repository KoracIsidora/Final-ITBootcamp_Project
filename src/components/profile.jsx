import React, { useState, useEffect } from 'react';
import { getProfile } from '../utilities/service';
import users from '../assets/users.png';

const Profile = ({ match }) => {
    const [userID] = useState(match.params.user_id);
    const [user, setUser] = useState({});

    useEffect(() => {
        getProfile(userID).then(data => {
            console.log(data);
            setUser(data.user);
        })
    }, [userID]);

    return (
        <div className='profil'>
            <img className='slika' src={users} alt='user'/>
            <label className='prof1'>Name: </label><p className='prof'>{user.name}</p>
            <label className='prof1'>Surname: </label><p className='prof'>{user.surname}</p>
            <label className='prof1' >Username: </label><p className='prof'>{user.username}</p>
            <label className='prof1'>Email: </label> <p className='prof'>{user.email}</p>
        </div>
    )
}

export default Profile;