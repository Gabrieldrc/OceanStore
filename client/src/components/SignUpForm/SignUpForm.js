import React, { useState } from 'react';
import {
  Redirect
} from "react-router-dom";
const axios = require('axios');

const styleForm = {
  display: "grid",
  gridTemplateColumns: "300px",
  gridTemplateRows: "auto",
  width: "fit-content",
  gridRowGap: "10px",
};

const styleError = {
  color: "red",
};

const styleCheck = {
  color: "lawngreen",
};

function SignUpForm() {
  const [user_name, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [password_compare, setpasswordCompare] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  function handleClick(event) {

    event.preventDefault();
  
    const url = '/server/users/new_user';
    const data = {
      'user_name': user_name,
      'password': password,
    };

    axios.post(url, data)
    .then(response => {
      setCheck(response.data);
    })
    .catch((error) => {
      setError(error.response.data);
    });

  }

  function response() {
    if (error === '' && check === '') {
      return <label> </label>;
    }
    if (error != '') {
      const label = <label style={styleError}>{error}</label>;
      setError('');
    }
    if (check != '') {
      const label = <label style={styleCheck}>{check}</label>;
      setCheck('');
      return label;
    }
    
  }

  return(
    <div>
      <form style={styleForm} id="registerForm">
        <label> Enter your username: {user_name}</label>
        <input type="text" name="user_name" onChange={event => setUserName(event.target.value)} required/>
        <label> Enter your password: {password}</label>
        <input type="password" name="password" onChange={event => setpassword(event.target.value)} required/>
        <label> Enter the same password: {password_compare}</label>
        <input type="password" name="password_compare" onChange={event => setpasswordCompare(event.target.value)} required/>  
        <button type="submit" onClick={event => handleClick(event)}>Submit</button>
        {response()}
      </form>
    </div>
  );
}


  
export default SignUpForm;