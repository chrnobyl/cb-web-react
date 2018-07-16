import React from 'react'
import { Icon } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import './App.css'

const Contact = (props) => {
  return (
    <Route path="/contact" render={() =>
      <div className='block'>
        <h1>Contact me</h1>
        <br/>

        <p>
          chris [d o t] buggelli [a t] gmail [d o t] com
        </p>

        <p>
          <Icon onClick={()=> window.open("https://www.linkedin.com/in/chrisbuggelli/", "_blank")} link name="linkedin" size="big" />
          <Icon onClick={()=> window.open("https://medium.com/@cjab", "_blank")} link name="medium" size="big" />
          <Icon onClick={()=> window.open("https://github.com/chrnobyl", "_blank")} link name="github" size="big" />

        </p>
      </div>
    }/>

  )
}

export default Contact
