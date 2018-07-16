import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

const About = (props) => {
  return (
    <Route path="/" render={() =>
      <div>
        <img src="github_profile.jpg" class="image"/>
        <div class="block">
          <h1>About me</h1>
          <br/>

          <p>
            Hi, I'm Chris! I'm a software engineer who used to be a TV production guy. I began my career in software engineering because I enjoy building things and learning things.

            These days, I'm a full stack engineer at Say Yes to Education, where I develop a student growth tracking app in the .NET stack. It feels great to use my software engineering skills to help students get the assistance they need to be successful in school.

            I have built apps with React, JavaScript, jQuery, Ruby, Rails, Node, C#, and .NET - ReactJS being one of my favorite libraries to work with. I'm always excited to explore new technologies and I highly value learning from/collaborating with fellow engineers.

            Outside of work, I enjoy playing music, out-of-date video games, and geeking out over podcasts like Stuff You Should Know and Hardcore History.
          </p>
        </div>
      </div>
      }/>

  )
}

export default About
