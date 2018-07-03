import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing stackable secondary widths="5" size="massive">
        <Menu.Item name='chris'
          as={Link} to='/'
          active={activeItem === 'chris'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Chris Buggelli</h2>
        </Menu.Item>
        <Menu.Item name='bio'
          as={Link} to='/'
          position='right'
          active={activeItem === 'bio'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Bio</h2>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          as={Link} to='/portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Portfolio</h2>
        </Menu.Item>
        <Menu.Item
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Contact</h2>
        </Menu.Item>
      </Menu>
    )
  }
}
