import React, { useState } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { BrowserRouter } from 'react-router-dom';
import Content from './layout/content';
import Profile from './components/profile';

function App() {

  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <div className="App">
      <Header logedIn={user} setUser={setUser}></Header>
      <Profile></Profile>
      <Content setUser={setUser} user={user}></Content>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
