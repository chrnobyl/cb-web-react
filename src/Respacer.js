import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import './App.css';

export default class Respacer extends Component {
  constructor(){
    super()
    this.state = {
      string: "",
      replaceWith: "_",
      newString: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeSpace = this.removeSpace.bind(this)
  }

  removeSpace(str, char) {
    let arr = []
    let special = "./()?,"
      for (var i = 0; i < str.length; i++) {
          if (str[i] === " ") {
              arr.push(char)
          } else if (special.includes(str[i])) {
        arr.push("")
          } else {
        arr.push(str[i])
          }
      }
    return arr.join("")
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e){
    e.preventDefault()
    this.setState({
      newString: this.removeSpace(this.state.string, this.state.replaceWith)
    })
  }

  render(){
    return (
      <Route path="/respacer" render={() =>
        <div class="block">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>String to alter:</label>
            <input type="text" name="string" value={this.state.string} onChange={this.handleChange} /><br/>
          </Form.Field>
          <Form.Field>
            <label>Remove all spaces and replace with: {this.state.replaceWith}</label>
            <input type="text" name="replaceWith" value={this.state.replaceWith} onChange={this.handleChange} />
          </Form.Field>
        </Form>
        <br/>
        <Button onClick={this.handleClick}>
          Go!
        </Button>
        <h1>{this.state.newString}</h1>
      </div>
      }/>

    )
  }
}
