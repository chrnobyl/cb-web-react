import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import Bio from './Bio'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './App.css';

const Container = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path = '/' render= {() =><Bio />}/>
        <Route exact path = '/portfolio' render= {() =><Portfolio />}/>
        <Route exact path = '/contact' render= {() =><Contact />}/>
      </Switch>
    </div>
  )
}

export default Container
