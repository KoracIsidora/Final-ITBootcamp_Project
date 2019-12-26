import React, { useState } from 'react';
import './App.css';
import Header from './layout/header';
import Footer from './layout/footer';
import { BrowserRouter } from 'react-router-dom';
import Content from './layout/content';

function App() {

  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <div className="App">
      <Header logedIn={user} setUser={setUser}></Header>
      
      <Content setUser={setUser} user={user} logedIn={user}></Content>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
