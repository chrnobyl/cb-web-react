import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Contact = (props) => {
  return (
    <Route path="/contact" render={() =>
      <div class='block'>
        <h1>Contact me</h1>
        <br/>

        <p>
          chris [dot] buggelli [at] gmail [dot] com
        </p>

        <p>
          Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus. Etiam gravida tellus consectetur tellus feugiat, sit amet pretium ligula suscipit. Aenean accumsan sapien nec libero ornare placerat. Aenean leo sapien, auctor a tempus volutpat, gravida ut enim. Fusce sagittis rhoncus turpis sed aliquet. Integer scelerisque, risus quis vulputate fermentum, tellus ex pharetra lectus, sit amet bibendum risus enim id urna. Praesent feugiat, libero ac porttitor consectetur, dolor tortor tincidunt augue, nec pellentesque eros ligula nec tortor. Duis in ipsum fringilla, posuere nunc sit amet, rutrum nibh.
        </p>
      </div>
    }/>

  )
}

export default Contact
