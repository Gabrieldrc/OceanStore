import React from 'react';
import style from './Footer.style';

function Footer() {
  return(
    <div style={style.footer}>
      <div style={style.footer_content}>
        Gabriel Rodriguez <a href="https://github.com/Gabrieldrc/OceanStore" target="blank"><img src="/images/githubBlack.icon.png" alt="github" style={style.icon}/></a>
      </div>
    </div>
  );
}

export default Footer;