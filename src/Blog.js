import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Blog = (props) => {
  return (
    <Route path="/blog" render={() =>
      <div class='block'>
        <h1>Recent blog posts</h1>
        <br/>

        <p>
          Blog posts go here
        </p>
      </div>
    }/>

  )
}

export default Blog
