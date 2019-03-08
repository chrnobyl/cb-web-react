import React, { Component } from 'react';
import NavBar from './NavBar/NavBar'
import Container from './Container/Container'
import Footer from './Footer/Footer'
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
