const url = 'https://coetus.herokuapp.com';
const api = '/api/forum';
const messages = '/message';
const user = '/users';
const topic = '/topics';

export function getMessageInfo(id){
    return fetch(`${url}${api}${messages}/${id}`)
    .then(res=>res.json())
}

export function login(useri){
    let res = fetch(`${url}${api}${user}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'POST',
        body:JSON.stringify(useri)
    }).then(res => res.json())
    return res;
}


export function register(register){
    let res = fetch(`${url}${api}${user}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify(register)
    }).then(res => res.json())
    return res;
}

export function getTopics(){
    return fetch(`${url}${api}${topic}`)
    .then(res=>res.json());
}

export function addNewTopic(user_id, title){
    let res = fetch(`${url}${api}${topic}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify({user_id, title})
    }).then(res => res.json())
    return res;
}


export function getTopicMessages(id){
    return fetch(`${url}${api}${messages}/${id}`)
    .then(res=>res.json());
}


export function addOneTopicMessage(username, message, topic_id){
    let res = fetch(`${url}${api}${messages}`,{
        headers:{
            'Content-Type':'application/json; charset=utf-8' 
        },
        method:'PUT',
        body:JSON.stringify({username,message, topic_id})
    }).then(res => res.json())
    return res;
}


export function getProfile(userID){
    return fetch(`${url}${api}${user}/${userID}`)
    .then(res=>res.json());
}



export function getAllUsers(){
    return fetch(`${url}${api}${user}`)
    .then(res=>res.json())
}
