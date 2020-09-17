import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';

const stylePage = {
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridColumnGap: "50px",
};

const styleGrid = {
  justifyContent: "center",
};

function RegisterPage() {
  return (
    <div style={stylePage}>
      <div style={styleGrid}>
        <h1>Sign up here:</h1>
        <SignUpForm />
      </div>
      <div style={styleGrid}>
        <h1>Login here:</h1>
        <LoginForm />
      </div>
    </div>
  );
}


  
export default RegisterPage;