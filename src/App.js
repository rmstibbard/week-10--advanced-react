import React, { Component } from 'react'; import './App.css';
import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';
import Form from './components/Form';


function App() {
  return (
    <>
      <h1>Squares</h1>
      <Squares colour="hotpink" />

      <h1>Password</h1>
      <SignUp minimumLength={4} />

      <h1>Button</h1>
      <Button handleUpdate={console.log} />

      <h1>Form</h1>
      <Form handleSubmit={console.log} />


    </>
  );
}

export default App;
