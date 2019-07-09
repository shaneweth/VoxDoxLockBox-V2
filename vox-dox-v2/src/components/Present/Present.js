import React from 'react';
import "./Present.css";

class Present extends React.Component {
  render() {
  return (
    <div className="projView">
        <ul>
          <li>{"project"}</li>
          <button className="btn-select" id="btnUrl" type="submit">Select</button>
        </ul>
    </div>
  )
}
}

  export default Present;
