import React, { Component } from 'react'
import { Segment, Icon } from 'semantic-ui-react'
// import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Footer = (props) => {
  return (
    <div class="footer">
      <Segment secondary textAlign="center" size="large">
        <Icon onClick={()=> window.open("https://www.linkedin.com/in/chrisbuggelli/", "_blank")} link name="linkedin" size="big" />
        <Icon onClick={()=> window.open("https://medium.com/@cjab", "_blank")} link name="medium" size="big" />
        <Icon onClick={()=> window.open("https://github.com/chrnobyl", "_blank")} link name="github" size="big" />
        <Icon onClick={()=> window.open("mailto:chris.buggelli@gmail.com", "_blank")} link name="mail" size="big" />
        chris [d o t] buggelli [a t] gmail [d o t] com
      </Segment>
    </div>
  )
}

export default Footer
