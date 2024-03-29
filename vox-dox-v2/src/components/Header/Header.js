import React from 'react';
import Form from '../Form';
import "./Header.css";
import Present from '../Present';

class Header extends React.Component {
  render() {
  return (
    <div className="header">
    <div className="logoWrapper">
      <div>
        <h1>VOX DOX</h1>
      </div>
      <div className="content">
        <Form />
        <Present /> 
      </div>
    </div>
    </div>
  )
}
}
export default Header;
