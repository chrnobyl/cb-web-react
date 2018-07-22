import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';

const Portfolio = (props) => {
  return (
    <Route path="/portfolio" render={() =>
      <div className='block'>
        <h1>Projects</h1>

        <h2><a href="https://wag-client.herokuapp.com/">Wag!</a></h2>
        <p>
          React on Rails app for finding pets. Allows users to browse the Petfinder API, Tinder-style.
        </p>
        <h3>Github: <a href="https://github.com/chrnobyl/petsy-front-end">Client</a> | <a href="https://github.com/chrnobyl/petsy-api">API</a></h3>

        <h2><a href="https://rcf-client.herokuapp.com/">Rats, Crime, Fire</a></h2>
        <p>
          JavaScript app for showing the location of 311 reports around NYC. Users can enter a zip code to populate 311 reports on a Google Map of that location.
        </p>
        <h3>Github: <a href="https://github.com/chrnobyl/Rats-Crime-Fire">Client | API</a></h3>

        <h2><a href="http://react-fridge-client.s3-website-us-east-1.amazonaws.com/">The Fridge</a></h2>
        <p>
          React on Rails app that simulates a refrigerator. Add food to the fridge and be sure to eat it before it expires.
        </p>
        <h3>Github: <a href="https://github.com/chrnobyl/react-fridge-frontend">Client</a> | <a href="https://github.com/chrnobyl/react-fridge-api">API</a></h3>
      </div>
    }/>

  )
}

export default Portfolio
