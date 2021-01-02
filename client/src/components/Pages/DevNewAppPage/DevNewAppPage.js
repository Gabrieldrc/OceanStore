import React from 'react';
import NewAppForm from '../../Forms/NewAppForm/NewAppForm';

function DevNewAppPage() {
  return (
    <div className="full_center_page">
      <div className="form_container box_shadow">
        <h1 className="title_1 center big_font">New App</h1>
        <NewAppForm />
        <a className="primary_color" href="/dev/dashboard">Dashboard</a>
        <a className="primary_color" href="/dev/apps">My Apps</a>
      </div>
    </div>
  );
}

export default DevNewAppPage;