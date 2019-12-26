import React from 'react';
import Topic from './topic';
import { Link } from 'react-router-dom';
import { getTopics } from '../utilities/service';
import { useState } from 'react';
import { useEffect } from 'react';

const List = ({ history }) => {

    const [topic, setTopic] = useState([]);

    useEffect(() => {
        getTopics().then(data => {
            setTopic(data.topics);
        })
    }, []);

    return (
        <div className='lista'>
            
            <div className='radili'>
                <h2>List of popular topics</h2>
                {topic.map(x => {
                    return <Topic key={Math.random()} topic={x.title.toString()} topicID={x.topic_id} history={history} />
                })}
                <Link to='/newtopic'><button className='ntbtn'>Click here to start new topic</button></Link>
            </div>
            
        </div>
    )
}

export default List;