import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container env={this.props.env} />
        <Footer />
      </div>
    );
  }
}

export default App;
