import React, { useState, useEffect } from 'react';
import { getTopicMessages, addOneTopicMessage, getProfile } from '../utilities/service';

const Onetopic = ({ match, history, user }) => {

    const [topicID] = useState(match.params.topic_id);
    const [topic, setTopic] = useState([]);
    const [field, setField] = useState('');
    

    useEffect(() => {
        getTopicMessages(topicID).then(data => {
            setTopic(data.messages);
        })
    }, [topicID]);

    const handleAdd = () => {
        let username = user.user.username;
        addOneTopicMessage( username , field, topicID ).then(data => {
            if (data.success) {
                history.push('/list');
            } else {
                console.log('nije dodata poruka');
            }
        })
    }

    // useEffect(()=>{
    //     getProfile(userID).then(data=>{
    //         console.log(data);
    //     })
    // },[userID])


    return (
        <>
            {topic.map(x => {
                return <ul>
                    <li className='username' key={Math.random()} onClick={()=>{
                        history.push(`/profile/`)
                    }}>{x.username}</li>
                    <li key={Math.random()}>{x.message}</li>
                    <li key={Math.random()}>{x.timestamp}</li>
                </ul>
            })}

            <input type='text' placeholder='Response' onInput={e => {
                setField(e.target.value);
            }} />
            <input type='submit' value='Add response' onClick={() => {
                handleAdd();
            }} />
        </>
    )
}
export default Onetopic;