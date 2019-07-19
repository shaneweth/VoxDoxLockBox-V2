import React from 'react';
import Form from '../Form';
import "./Header.css";
import Present from '../Present';

class Header extends React.Component {
  render() {
  return (
    <div className="header">
    <div className="logoWrapper">
       <img 
            src={"/assets/logo.svg"}
            alt={"VOXDOXLogo"}
        /> 
    </div>

       {/* Here's my Sign UP button */}
        {/* <div className="signUp">
          <button>Sign Up!</button>
        </div> */}

    </div>
    
  )
}
}
export default Header;
