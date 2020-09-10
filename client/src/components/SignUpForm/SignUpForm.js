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

const styleCheck = {
  color: "lawngreen",
};

function SignUpForm() {
  const [user_name, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [password_confirm, setpasswordConfirm] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState('');
  const [res, setRes] = useState({});

  function handleClick(event) {

    event.preventDefault();
    
    if (password !== password_confirm) {
      setPasswordsMatch('dont match');
      return;
    }

    setPasswordsMatch('');

    const url = '/server/users/new_user';
    const data = {
      'user_name': user_name,
      'password': password,
    };

    axios.post(url, data)
    .then(response => {
      setRes({
        message: response.data,
        type: 'check',
      });
    })
    .catch((error) => {
      setRes({
        message: error.response.data,
        type: 'error',
      });
    });
  }

  function labelResponse() {
    if (!res) {
      return <label>  </label>;
    }
    if (res.type === 'error') {
      return <label style={styleError}>{res.message}</label>;
    }
    return <label style={styleCheck}>{res.message}</label>;
  }

  return(
    <div>
      <form style={styleForm} id="signupForm">
        <label> Username:</label>
        <input type="text" name="user_name" onChange={event => setUserName(event.target.value)} required/>
        <label> Password:</label>
        <input type="password" name="password" onChange={event => setpassword(event.target.value)} required/>
        <label> Confirm Password: {passwordsMatch}</label>
        <input type="password" name="password_confirm" onChange={event => setpasswordConfirm(event.target.value)} required/>  
        <button type="submit" onClick={event => handleClick(event)}>Submit</button>
        {labelResponse()}
      </form>
    </div>
  );
}


  
export default SignUpForm;