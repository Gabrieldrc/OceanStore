import React from 'react';
import Title from '../../Title/Title';
import style from './DevHomePage.style';
import './DevHomePage.css';

function DevHomePage() {
  return(
    <div className="dev_homepage">
      <div className="dev_homepage_constainer">
        <Title styleProps={style.title}>WELCOME DEVELOPER!</Title>
        <div className="dev_homepage_buttom">
          <a href="/dev/signup" className="dev_homepage_a">Get start it</a>
        </div>
        <p style={style.title}>If you already have an account. Signin <a href="/dev/signin">here</a></p>
        <Title styleProps={style.leftSubtitle}>Let people to know your work.</Title>
        <Title styleProps={style.rightSubtitle}>Register, upload your apps, and start have profit.</Title>
      </div>
    </div>
  );
}

export default DevHomePage;