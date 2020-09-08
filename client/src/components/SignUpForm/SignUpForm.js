import React, { useState } from 'react';
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

function SignUpForm() {
  const [user_name, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [password_compare, setpasswordCompare] = useState('');
  const [error, setError] = useState(' ');

  function handleClick(event) {

    event.preventDefault();
  
    const url = '/server/users/new_user';
    const data = {
      'user_name': user_name,
      'password': password,
    };

    axios.post(url, data)
    .then(response => {
      console.log(response.data);
    })
    .catch((error) => {
      setError(error.response.data);
    });

  }

  return (
    <div>
      <form style={styleForm} id="registerForm">
        <label> Enter your username: {user_name}</label>
        <input type="text" name="user_name" onChange={event => setUserName(event.target.value)} required/>
        <label> Enter your password: {password}</label>
        <input type="password" name="password" onChange={event => setpassword(event.target.value)} required/>
        <label> Enter the same password: {password_compare}</label>
        <input type="password" name="password_compare" onChange={event => setpasswordCompare(event.target.value)} required/>  
        <button type="submit" onClick={event => handleClick(event)}>Submit</button>
        <label style={styleError}>{error}</label>
      </form>
    </div>
  );
}


  
export default SignUpForm;