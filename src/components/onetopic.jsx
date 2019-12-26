import React, { useState, useEffect } from 'react';
import { getTopicMessages, addOneTopicMessage, getTopics, getAllUsers } from '../utilities/service';
import uuid from 'react-uuid';


const Onetopic = ({ match, history, user }) => {

    const [topicID] = useState(match.params.topic_id);
    const [topic, setTopic] = useState([]);
    const [field, setField] = useState('');
    const [theme, setTheme] = useState([]);
    const [juzers, setUser] = useState([]);

    useEffect(() => {
        getTopicMessages(topicID).then(data => {
            setTopic(data.messages);
        })
    }, [topicID]);

    const handleAdd = () => {
        let username = user.user.username;
        addOneTopicMessage(username, field, topicID).then(data => {
            if (data.success) {
                console.log(data);
                history.push(`/list`);
            }
        })
    };

    useEffect(() => {
        getTopics().then(data => {
            setTheme(data.topics);
        })
    }, []);

    useEffect(()=>{
        getAllUsers().then(data => {
            setUser(data.users);
        })
    }, []);


    return (
        <form className='oneform'>
            {theme.map(x => {
                if (topicID === x.topic_id) {
                    return <p className='tema' key={uuid()}>{x.title}</p>
                }
            })}
            {topic.map(x => {
                return <ul className='otlist' key={uuid()}>
                    <li className='username' key={uuid()} onClick={() => {
                        history.push(`/profile/${juzers.find(juzer => juzer.username === x.username).user_id}`);
                    }}>{x.username}</li>
                    <li className='message' key={uuid()}>{x.message.toString()}</li>
                    <li className='message' key={uuid()}>{new Date(x.timestamp).toLocaleTimeString()}</li>
                </ul>
            })}

            <input className='responsevalue' type='text' placeholder='Response' onInput={e => {
                setField(e.target.value);
            }} />
            <input className='responsebtn' type='submit' value='Add response' onClick={e => {
                e.preventDefault(); handleAdd();
            }} />
        </form>
    )
}

export default Onetopic;