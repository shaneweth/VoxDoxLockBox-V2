import React from 'react';
import Form from '../Form';
import "./Header.css";
import Present from '../Present';

class Header extends React.Component {
  render() {
  return (
    <div className="logoWrapper">
       <img 
            src={"/assets/logo.svg"}
            alt={"VOXDOXLogo"}
        /> 
        <Form />
        <Present /> 
    </div>
  )
}
}
export default Header;
