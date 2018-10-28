import React, { Component } from 'react'
import { Icon, Transition } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
// import { Parallax, Background } from 'react-parallax'
import './App.css'

// const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

export default class Contact extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {

    const { visible } = this.state

    return (
      <Route path="/contact" render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          <div className='block'>
            <h1>Contact me</h1>

            <p>
              chris [d o t] buggelli [a t] gmail [d o t] com
            </p>

            <p>
              <Icon onClick={()=> window.open("https://www.linkedin.com/in/chrisbuggelli/", "_blank")} link name="linkedin" size="big" />
              <Icon onClick={()=> window.open("https://medium.com/@cjab", "_blank")} link name="medium" size="big" />
              <Icon onClick={()=> window.open("https://github.com/chrnobyl", "_blank")} link name="github" size="big" />
            </p>
          </div>
        </Transition>
      }/>
    )
  }
}
