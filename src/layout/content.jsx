import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../components/login';
import Register from '../components/register';
import List from '../components/listoftopics';
import Profile from '../components/profile';
import Newtopic from '../components/newtopic';
import Onetopic from '../components/onetopic';
import Home from '../components/home';

const Content = ({setUser, user}) =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={(props)=><Login setUser={setUser} {...props}/>} ></Route>
                <Route path='/register' component={(props) => <Register setUser={setUser} {...props}/>}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/onetopic/:topic_id' component={(props) => <Onetopic setUser={setUser} user={user} {...props}/>}></Route>
                <Route path='/profile/:user_id' component={Profile}></Route>
                <Route path='/newtopic' component={(props)=> <Newtopic setUser={setUser} user={user} {...props}/>}></Route>
            </Switch>
        </div>
    )
}


export default Content;
