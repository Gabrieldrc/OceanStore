import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import Title from '../Title/Title';

const stylePage = {
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridColumnGap: "50px",
  color: "white",
};

const styleGrid = {
  justifyContent: "center",
};

function RegisterPage() {
  return (
    <div style={stylePage}>
      <div style={styleGrid}>
        <Title>Sign up here:</Title>
        <SignUpForm />
      </div>
      <div style={styleGrid}>
        <Title>Login here:</Title>
        <LoginForm />
      </div>
    </div>
  );
}


  
export default RegisterPage;