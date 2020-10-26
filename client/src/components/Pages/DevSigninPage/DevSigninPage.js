import React from 'react';
import DevSignInForm from '../../Forms/DevSignInForm/DevSignInForm';
import Title from '../../Title/Title';
import './DevSigninPage.css';

function DevSigninPage(props) {
  return(
    <div className="dev_signin_page">
      <div className="dev_signin_container">
        <Title style={{fontWeight: "200"}}>SIGN IN DEV<span style={{fontSize: '1.5rem'}}>with your OS account</span></Title>
        <DevSignInForm />
        <span> If you dont have an account sign up <a href="/dev/signup">here</a></span>
        <span className="border border-top"></span>
        <span className="border border-right"></span>
        <span className="border border-bottom"></span>
        <span className="border border-left"></span>
      </div>
    </div>
  );
}

export default DevSigninPage;