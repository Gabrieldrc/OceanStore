import React, { useState } from 'react';
import UserService from '../../../services/user.service';

const styleForm = {
  display: "grid",
  gridTemplateColumns: "300px",
  gridTemplateRows: "auto",
  width: "fit-content",
  gridRowGap: "10px",
  color: "#b4b2b1",
};

const inputStyle = {
  marginBottom: "20px",
  height: "1.6rem",
};

const styleError = {
  color: "red",
};

const styleCheck = {
  color: "deepskyblue",
};

function SignUpUserForm() {
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

    const form = document.getElementById('sign_up_form');
    const formData = new FormData(form);

    UserService.signup(formData)
    .then(response => {
      setRes({
        message: response.data.message,
        type: 'check',
      });
    })
    .catch((error) => {
      console.log(error.response.data);
      setRes({
        message: error.response.data.message,
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
      <form style={styleForm} id="sign_up_form">
        <label> Username</label>
        <input style={inputStyle} type="text" name="user_name" required/>
        <label> Password</label>
        <input style={inputStyle} type="password" name="password" onChange={event => setpassword(event.target.value)} required/>
        <label> Confirm Password      {passwordsMatch}</label>
        <input style={inputStyle} type="password" name="password_confirm" onChange={event => setpasswordConfirm(event.target.value)} required/>  
        <button type="submit" onClick={event => handleClick(event)}>Submit</button>
        {labelResponse()}
      </form>
    </div>
  );
}


  
export default SignUpUserForm;