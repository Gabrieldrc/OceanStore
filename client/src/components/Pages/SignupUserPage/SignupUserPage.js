import React from 'react';
import SignUpUserForm from '../../Forms/SignUpUserForm/SignUpUserForm';

function SignupUserPage() {
  return(
    <div className="full_center_page">
      <div className="form_container box_shadow">
        <h1 className="title_1 center big_font">CREATE YOUR ACCOUNT</h1>
        <SignUpUserForm />
        <a className="primary_color" href="/signin">Log in</a>
      </div>
    </div>
  );
}

export default SignupUserPage;