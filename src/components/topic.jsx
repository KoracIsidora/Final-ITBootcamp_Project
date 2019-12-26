import React, { useState, useEffect } from 'react';
import { getMessageInfo } from '../utilities/service';

const Topic = ({ history, topicID, topic }) => {

    const [topics, setTopics] = useState('')

    useEffect(() => {
        getMessageInfo(topicID)
            .then(data => {
                if (data.success === false) {
                    return;
                }
                setTopics(data.messages.topic_id);
            })
    }, [topicID]);


    return (
        <ul className='topiclist'>
            <li className='listitem' onClick={() => {
                history.push(`/onetopic/${topicID}`) ;
            }} key={Math.random()}>{topic}</li>
        </ul>
    )
}

export default Topic;