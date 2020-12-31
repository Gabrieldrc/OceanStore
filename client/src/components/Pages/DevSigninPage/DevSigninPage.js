import React from 'react';
import DevSignInForm from '../../Forms/DevSignInForm/DevSignInForm';

function DevSigninPage(props) {
  return(
    <div className="full_center_page">
      <div className="form_container box_shadow">
        <h1 className="title_1 center big_font">SIGN IN DEV</h1>
        <DevSignInForm 
          setSignInStatus={props.setSignInStatus}/>
        <a className="primary_color" href="/dev/signup">Sign Up</a>
      </div>
    </div>
  );
}

export default DevSigninPage;