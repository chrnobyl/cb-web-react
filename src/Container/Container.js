import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Respacer from './Respacer/Respacer'
import '../App.css'

const Container = (props) => {
  
  return (
    <div className="container">
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
