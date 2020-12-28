import React from 'react';
import SignInUserForm from '../../Forms/SignInUserForm/SignInUserForm';

function SigninUserPage(props) {
  return(
    <div className="full_page">
      <div className="form_container box_shadow">
        <h1 className="title center big_font">SIGN IN</h1>
        <SignInUserForm 
          setSignInStatus={props.setSignInStatus}/>
        <a className="primary_color" href="/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default SigninUserPage;