import React, { Component } from 'react';
import NavBar from './NavBar'
import Container from './Container'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
