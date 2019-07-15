import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
// import TapeDeck from './components/TapeDeck/TapeDeck';
import './App.css';
import Present from './components/Present';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="grid-container">
        <Header />
        {/* <TapeDeck /> */}
      </div>

        <Route path="/" exact component={Present}></Route>
        {/* <Route path="/edit/:id" exact component={EditProj} /> */}
      </Router>
    )
  }
}
export default App;
