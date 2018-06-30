import React, { Component } from 'react';
import NavBar from './NavBar'
import Container from './Container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container />
      </div>
    );
  }
}

export default App;
