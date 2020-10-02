import React from 'react';
import SignUpForm from '../Forms/SignUpForm/SignUpForm';
import Title from '../Title/Title';
import './SignupPage.css';

function SignupPage() {
  return(
    <div className="SignupPage">
      <div className="SignupContainer">
        <Title style={{fontWeight: "200"}}>CREATE YOUR ACCOUNT</Title>
        <SignUpForm />
        <span class="border border-top"></span>
        <span class="border border-right"></span>
        <span class="border border-bottom"></span>
        <span class="border border-left"></span>
      </div>
    </div>
  );
}

export default SignupPage;