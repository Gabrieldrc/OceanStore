import React from 'react';
import './NotFoundPage.css';

function NotFountPage(props) {
  return(
    <div className="full_center_page">
      <img className="full_page dark_background" src="/images/error_background.jpg" alt="error"></img>
      <div className="full_center_page error_message">
          <h1 className="not_found_page_title">Lost your way?</h1>
          <p className="not_found_page_p">
            Sorry, we can't find that page. 
            You'll find lots to explore on the home page.
          </p>
        <div className="not_found_page_error_container">
          <h1 className="not_found_page_error">Error Code <b>404</b></h1>
        </div>
        <a className="buttom not_found_page_a" href="/">Ocean Store Home</a>
      </div>
    </div>
  );
}

export default NotFountPage;