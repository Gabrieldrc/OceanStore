import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';

const stylePage = {
  width: "1600px",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridColumnGap: "50px",
};

function RegisterPage() {
  return (
    <div style={stylePage}>
      <div>
        <h1>Sign up here:</h1>
        <SignUpForm />
      </div>
      <div>
        <h1>Login here:</h1>
        <LoginForm />
      </div>
    </div>
  );
}


  
export default RegisterPage;