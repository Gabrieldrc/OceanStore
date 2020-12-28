import React, { useState } from 'react';
import UserService from '../../../services/user.service';
import '../SignForm.css';


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
      return <label className="styleError">{res.message}</label>;
    }
    return <label className="styleCheck">{res.message}</label>;
  }

  return(
    <>
      <form className="form" id="sign_up_form">
        <label>Username
          <input className="inputStyle" type="text" name="user_name" required/>
        </label>
        <label>Password
          <input className="inputStyle" type="password" name="password" onChange={event => setpassword(event.target.value)} required/>
        </label>
        <label>Confirm Password {passwordsMatch}
          <input className="inputStyle" type="password" name="password_confirm" onChange={event => setpasswordConfirm(event.target.value)} required/>  
        </label>
        <button className="primary_color_bg" type="submit" onClick={event => handleClick(event)}>Submit</button>
        {labelResponse()}
      </form>
    </>
  );
}


  
export default SignUpUserForm;