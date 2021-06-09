import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from './components/LoginComponent';
import { Principal } from './dtos/principal';

function App() {

  // @ts-ignore
  const [currentUser, updateCurrentUser] = useState(null as Principal)

  return (
    <>
      <LoginComponent currentUser={currentUser} updateCurrentUser={updateCurrentUser} />
    </>
  );
}

export default App;
