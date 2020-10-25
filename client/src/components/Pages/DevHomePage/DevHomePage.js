import React from 'react';
import Title from '../../Title/Title';
import style from './DevHomePage.style';

function DevHomePage() {
  return(
    <div style={style.constainer}>
      <Title styleProps={style.title}>WELCOME DEVELOPER!</Title>
      <div style={style.buttom}>
        <a href="/dev/signup" style={style.a}>Get start it</a>
      </div>
      <p style={style.title}>If you already have an account. Signin <a href="/dev/signin">here</a></p>
      <Title styleProps={style.leftSubtitle}>Let people to know your work.</Title>
      <Title styleProps={style.rightSubtitle}>Register, upload your apps, and start have profit.</Title>
    </div>
  );
}

export default DevHomePage;