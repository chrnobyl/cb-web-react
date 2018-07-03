import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Portfolio = (props) => {
  return (
    <Route path="/portfolio" render={() =>
      <div class='block'>
        <h1>Projects go here</h1>
        <br/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur at nibh nec placerat. In pharetra est nec quam cursus, nec malesuada turpis pulvinar. Aliquam mattis, ipsum quis fringilla ornare, orci ante accumsan neque, vel tempus mauris urna vitae ipsum. Suspendisse et fringilla velit, eu aliquet nibh. Suspendisse luctus turpis vitae nisi aliquet, quis dictum sem molestie. Sed eu enim ut urna finibus convallis in at enim. Aliquam eu nunc porttitor, pretium purus quis, congue lorem. Donec elementum ut risus a venenatis. Sed molestie facilisis nulla, quis fermentum dolor tempor et. Integer quis scelerisque leo, vitae luctus enim. Phasellus euismod suscipit fringilla. Suspendisse sed porttitor quam.
        </p>

        <p>
          Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus. Etiam gravida tellus consectetur tellus feugiat, sit amet pretium ligula suscipit. Aenean accumsan sapien nec libero ornare placerat. Aenean leo sapien, auctor a tempus volutpat, gravida ut enim. Fusce sagittis rhoncus turpis sed aliquet. Integer scelerisque, risus quis vulputate fermentum, tellus ex pharetra lectus, sit amet bibendum risus enim id urna. Praesent feugiat, libero ac porttitor consectetur, dolor tortor tincidunt augue, nec pellentesque eros ligula nec tortor. Duis in ipsum fringilla, posuere nunc sit amet, rutrum nibh.
        </p>
      </div>
    }/>

  )
}

export default Portfolio
