import React, { Component } from 'react'
import { Message, Transition } from 'semantic-ui-react'

export default class Success extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Transition visible={this.props.visible} animation='fade down' duration={500}>
        <Message success>Your message was sent successfully!</Message>
      </Transition>
    )
  }
}