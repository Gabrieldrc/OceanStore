import React from 'react';
import SignInUserForm from '../../Forms/SignInUserForm/SignInUserForm';
import Title from '../../Title/Title';
import './SigninUserPage.css';

function SigninUserPage(props) {
  return(
    <div className="signin_user_page">
      <div className="signin_container">
        <Title style={{fontWeight: "200"}}>SIGN IN <span style={{fontSize: '1.5rem'}}>with your OS account</span></Title>
        <SignInUserForm />
        <span> If you dont have an account sign up <a href="/signup">here</a></span>
        <span className="border border-top"></span>
        <span className="border border-right"></span>
        <span className="border border-bottom"></span>
        <span className="border border-left"></span>
      </div>
    </div>
  );
}

export default SigninUserPage;