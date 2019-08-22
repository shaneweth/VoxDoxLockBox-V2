import React from 'react';
import "./Present.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Proj = props => (
  <tr>
    <td>{props.proj.proj_title}</td>
    <td>{props.proj.proj_description}</td>
    <td>{props.proj.proj_url}</td>
  </tr>
)

class Present extends React.Component {

  constructor(props) {
    super(props);
    this.state = {projs: []};

  }

  componentDidMount() {
    axios.get('http://localhost:2112/projs/')
        .then(response => {
          this.setState({projs: response.data});
        })
        .catch(function (err) {
          console.log(err);
        })
  }

  projList() {
    return this.state.projs.map(function(currentProj, i) {
      return <Proj proj={currentProj} key={i} />
    })
  }

  render() {
    return (
      <div className="projView">
        <h4>Projects</h4>
        <table>
          <thead>
            <tr>
              <th><h3>Title</h3></th>
              <th><h3>Notes</h3></th>
              <th><h3>Link</h3></th>
            </tr>
          </thead>
          <tbody>
            { this.projList() }
          </tbody>
        </table>
      </div>
    )
  }
}

  export default Present;
