import React, { Component } from 'react';
import NavBar from './NavBar'
import Container from './Container'
import LowerThird from './LowerThird'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container />
        <LowerThird />
      </div>
    );
  }
}

export default App;
