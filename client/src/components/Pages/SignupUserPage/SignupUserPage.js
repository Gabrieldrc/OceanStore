import React from 'react';
import SignUpUserForm from '../../Forms/SignUpUserForm/SignUpUserForm';
import Title from '../../Title/Title';
import './SignupUserPage.css';

function SignupUserPage() {
  return(
    <div className="SignupUserPage">
      <div className="SignupContainer">
        <Title style={{fontWeight: "200"}}>CREATE YOUR ACCOUNT</Title>
        <SignUpUserForm />
        <span className="border border-top"></span>
        <span className="border border-right"></span>
        <span className="border border-bottom"></span>
        <span className="border border-left"></span>
      </div>
    </div>
  );
}

export default SignupUserPage;