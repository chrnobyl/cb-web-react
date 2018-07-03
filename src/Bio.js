import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Bio = (props) => {
  return (
    <Route path="/" render={() =>
      <div class='block'>
        <h1>About me</h1>
        <br/>

        <p>
          Software engineer with a passion for object-oriented and functional programming. Currently in a full stack role at Say Yes to Education, developing a student growth tracking app with the .NET stack. Experienced in JavaScript, Ruby, and .NET web app development with a keen interest in React.js. Avid learner of new technologies and committed to a professional future in software development.
        </p>
      </div>
      }/>

  )
}

export default Bio
