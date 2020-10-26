import React from 'react';
import DevSignUpForm from '../../Forms/DevSignUpForm/DevSignUpForm';
import Title from '../../Title/Title';
import './DevSignupPage.css';

function DevSignupPage() {
  return(
    <div className="dev_signup_page">
      <div className="dev_signup_container">
        <Title style={{fontWeight: "200"}}>CREATE YOUR DEV ACCOUNT</Title>
        <DevSignUpForm />
        <span> If you have already an account sign in <a href="/dev/signin">here</a></span>
        <span className="border border-top"></span>
        <span className="border border-right"></span>
        <span className="border border-bottom"></span>
        <span className="border border-left"></span>
      </div>
    </div>
  );
}

export default DevSignupPage;