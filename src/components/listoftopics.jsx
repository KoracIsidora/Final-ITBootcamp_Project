import React from 'react';
import Topic from './topic';
import { Link } from 'react-router-dom';
import { getTopics } from '../utilities/service';
import { useState } from 'react';
import { useEffect } from 'react';

const List = ({history}) => {

    const [topic, setTopic] = useState([]);

    useEffect(() => {
        getTopics().then(data => {  
            setTopic(data.topics);
        })
    },[]);

    return (
        <>
            {topic.map(x=>{
                return <Topic key={Math.random()} topic={x.title} topicID={x.topic_id} history={history}/> 
            })}

            <Link to='/newtopic'><button>Start new topic</button></Link>
        </>
    )
}

export default List;