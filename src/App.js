import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NavBar from './components/NavBar/NavBar'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container env={this.props.env} />
        <Footer />
      </div>
    );
  }
}

export default App;
