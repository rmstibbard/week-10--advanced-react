import React, { Component } from 'react'; import './App.css';
import Squares from './components/Squares';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <h1>Squares</h1>
      <Squares colour="hotpink" />

      <h1>Password</h1>
      <SignUp minimumLength={4} />
    </>
  );
}

export default App;
