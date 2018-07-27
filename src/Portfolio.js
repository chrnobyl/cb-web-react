import React from 'react'
import { Route } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import './App.css';

const Portfolio = (props) => {
  return (
    <Route path="/portfolio" render={() =>
      <div className='block'>
        <h1>Projects</h1>
        When I'm not coding at work, I'm coding at home. Here are some projects I've worked on in my spare time.

        <h2><a href="https://wag-client.herokuapp.com/">Wag!</a></h2>
        <p>
          React on Rails app for finding pets. Allows users to browse the Petfinder API, Tinder-style.
        </p>
        <List bulleted>
          <List.Item>
            React front-end shows one pet at a time, and a user can add the pet to their list or skip to the next pet
          </List.Item>
          <List.Item>
            Custom Rails API allows users to add pets from Petfinder to personal list; all pets are real and adoptable
          </List.Item>
          <List.Item>
            Pets can be sorted by any combination of species, sex, location, size, or age
          </List.Item>
          <List.Item>
            Pet detail provides contact info for shelter so user can set up a time to meet or adopt the pet
          </List.Item>
          <List.Item>
            User pets stored in PostgreSQL database
          </List.Item>
          <List.Item>
            Designed with Semantic UI React and custom CSS
          </List.Item>
        </List>
        <h3>Github: <a href="https://github.com/chrnobyl/petsy-front-end">Client</a> | <a href="https://github.com/chrnobyl/petsy-api">API</a></h3>

        <h2><a href="https://rcf-client.herokuapp.com/">Rats, Crime, Fire</a></h2>
        <p>
          JavaScript app for showing the location of 311 reports around NYC. Users can enter a zip code to populate 311 reports on a Google Map of that location.
        </p>
        <List bulleted>
          <List.Item>
            Custom Rails API is seeded with data from NYC Department of Health and Mental Hygiene
          </List.Item>
          <List.Item>
            Users select a complaint from a dropdown and type in a zip code, and an AJAX request is made to the API to show the data
          </List.Item>
          <List.Item>
            The location of each complaint is displayed on a map of the neighborhood using Google Maps API
          </List.Item>
          <List.Item>
            jQuery and Fusion Charts used to build an interactive trivia page about New York’s most interesting complaints
          </List.Item>
          <List.Item>
            Designed with Materialize and custom CSS
          </List.Item>
        </List>
        <h3>Github: <a href="https://github.com/chrnobyl/Rats-Crime-Fire">Client | API</a></h3>

        <h2><a href="http://react-fridge-client.s3-website-us-east-1.amazonaws.com/">The Fridge</a></h2>
        <p>
          React on Rails app that simulates a refrigerator. Add food to the fridge and be sure to eat it before it expires.
        </p>
        <List bulleted>
          <List.Item>
            React front-end allows users to create, edit, update, and delete items from Rails API
          </List.Item>
          <List.Item>
            Timer built with React displays a countdown on each item with days, hours, minutes, and seconds until expiration
          </List.Item>
          <List.Item>
            When a food reaches it's expiration date, the user is notified that it is expired. Should you eat it or not? Choose wisely.
          </List.Item>
          <List.Item>
            React Router provides URL for each item’s detail page
          </List.Item>
          <List.Item>
            Fridge data stored in PostgreSQL database
          </List.Item>
          <List.Item>
            Designed with Bootstrap and custom CSS
          </List.Item>
        </List>
        <h3>Github: <a href="https://github.com/chrnobyl/react-fridge-frontend">Client</a> | <a href="https://github.com/chrnobyl/react-fridge-api">API</a></h3>

        <h2><a href="http://insta-production.us-east-1.elasticbeanstalk.com/login">Insta</a></h2>
        <p>
          Imgur/Instagram clone with a super creative title. Post pictures and leave comments.
        </p>
        <List bulleted>
          <List.Item>
            Custom API allows users to create, edit, update, and delete posts and comments
          </List.Item>
          <List.Item>
            Users can create an account and log in/log out with encrypted sessions
          </List.Item>
          <List.Item>
            Each user has a profile from which they can make posts, view their own posts, and update their user information
          </List.Item>
          <List.Item>
            Homepage shows a feed of all posts
          </List.Item>
          <List.Item>
            A user can click on a post and make a comment, and see all comments for that post
          </List.Item>
          <List.Item>
            Users, posts, and comments stored in PostgreSQL database
          </List.Item>
          <List.Item>
            Designed with Bootstrap and SASS
          </List.Item>
        </List>
        <h3>Github: <a href="https://github.com/chrnobyl/insta">Client | API</a></h3>
      </div>
    }/>
  )
}

export default Portfolio
