import React from 'react';
import style from './Footer.style';

function Footer() {
  return(
    <div style={style.footer}>
      <div style={style.footer_content}>
        <div style={{...style.a,...style.item}}>
          ©Copyright Gabriel Rodriguez
        </div>
        <a href="https://github.com/Gabrieldrc/OceanStore" target="blank" style={style.a}>
          <img src="/images/githubBlack.icon.png" alt="github" style={style.icon}/>
          Github
        </a>
        <a href="/dev" style={style.a}>
         Developers
        </a>
      </div>
    </div>
  );
}

export default Footer;