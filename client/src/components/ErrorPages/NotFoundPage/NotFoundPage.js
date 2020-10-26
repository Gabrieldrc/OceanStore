import React from 'react';
import './NotFoundPage.css';

function NotFountPage(props) {
  const {setError} = props;
  setError(true);
  return(
    <div className="app_body_error_content">
      <div className="not_found_page_container">
        <div>
          <h1 className="not_found_page_title">Lost your way?</h1>
          <p className="not_found_page_p">
            Sorry, we can't find that page. 
            You'll find lots to explore on the home page.
          </p>
          <a className="not_found_page_a" href="/">Ocean Store Home</a>
        </div>
        <div className="not_found_page_error_container">
          <h1 className="not_found_page_error">Error Code <b>404</b></h1>
        </div>
      </div>
    </div>
  );
}

export default NotFountPage;