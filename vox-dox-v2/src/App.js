import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
// import EditProj from './components/EditProj';
import TapeDeck from './components/TapeDeck/TapeDeck';
import './App.css';
import axios from 'axios';
import LoginForm from './components/auth/login-form';
import Signup from './components/auth/sign-up';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }


  render() {
    return (
 <div>     
      <Router>
        <div className="grid-container">  
          <Header />
          <TapeDeck />
        </div>
        {/* <Link to="/edit/:id">EDIT ROUTE</Link> */}
        {/* <Route path="/edit/:id" component={EditProj} /> */}

      <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}   
        />

      <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        
  </Router>
</div>
    )
  }
}
export default App;
