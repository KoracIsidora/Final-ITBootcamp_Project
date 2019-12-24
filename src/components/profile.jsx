import React, { useState, useEffect } from 'react';
import { getProfile } from '../utilities/service';

const Profile = ({match}) => {
    
    const [userID] = useState();
    const [user, setUser] = useState('')

    useEffect(()=>{
        getProfile(userID).then(data=>{
            setUser(data);
        })
    },[userID])

    return (
        <div>
            {console.log(user)}
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default Profile;