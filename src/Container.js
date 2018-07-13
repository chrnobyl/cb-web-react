import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import About from './About'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Respacer from './Respacer'
import './App.css';

const Container = (props) => {
  return (
    <div class="container">
      <Switch>
        <Route exact path = '/' render= {() =><About />}/>
        <Route exact path = '/portfolio' render= {() =><Portfolio />}/>
        <Route exact path = '/blog' render= {() =><Blog />}/>
        <Route exact path = '/contact' render= {() =><Contact />}/>
        <Route exact path = '/respacer' render= {() =><Respacer />}/>
      </Switch>
    </div>
  )
}

export default Container
