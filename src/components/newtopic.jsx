import React from 'react';
import { addNewTopic, addOneTopicMessage } from '../utilities/service';
import { useState } from 'react';

const Newtopic = ({setUser, history, user}) =>{

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    function addTopic(){
        let userid = user.user.user_id;
        let username = user.user.username;
        addNewTopic(userid, title).then(data=>{
            console.log(data);
            console.log(title);
            if(data.success===true){
                addOneTopicMessage(username, message, data.topic.topic_id ).then(data=>{
                    history.push('/list');
                    console.log(data);
                })
            } else{
                console.log('Nije dodata poruka');
            }
        })
    }

    return(
        <form className='ntform'>
            <label className='labelnt'><strong>Enter the title of your topic:</strong></label>
            <input className='title' type='text' placeholder='Title' onInput={e=>{
                setTitle(e.target.value);
            }}/>
            <label className='labelnt'><strong>Add first message of your topic:</strong></label>
            <textarea rows="4" cols="50" form="usrform" placeholder='Enter text here...' onInput={e=>{
                setMessage(e.target.value);
            }}/>
            <input className='btnnt' type='submit' value='Add' onClick={e=>{e.preventDefault();addTopic()}}/>
        </form>
    )
}

export default Newtopic;