import React from 'react'; import './App.css';

import Squares from './components/Squares';
import SignUp from './components/SignUp';
import Button from './components/Button';
import Form from './components/Form';
import FormSeparate from './components/FormSeparate';

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

      <h1>Form - Separate components - Not done yet</h1>
      <FormSeparate
        handleSubmit={console.log}
        fields={[
          { label: "Name", name: "name", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Telephone Number", name: "telephone", type: "tel" },
          { label: "Date of Birth", name: "dob", type: "date" },
        ]}

      />

    </>


  );
}

export default App;
