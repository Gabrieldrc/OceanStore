import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <div className="footer">
      <div className="footer_content">
        <div className="footer_a footer_item">
          ©Copyright Gabriel Rodriguez
        </div>
        <a href="https://github.com/Gabrieldrc/OceanStore" target="blank" className="footer_a">
          <img src="/images/githubBlack.icon.png" alt="github" className="footer_icon"/>
          Github
        </a>
        <a href="/dev" className="footer_a">
         Developers
        </a>
      </div>
    </div>
  );
}

export default Footer;