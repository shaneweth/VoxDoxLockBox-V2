import React from 'react';
import Header from './components/Header';
import TapeDeck from './components/TapeDeck/TapeDeck';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="grid-container">
      <Header />
      {/* <TapeDeck /> */}
    </div>
  )
}
}
export default App;
