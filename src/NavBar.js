import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'about' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text stackable secondary widths="6" size="massive">
        <Menu.Item name='chris'
          as={Link} to='/'
          active={activeItem === 'chris'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Chris Buggelli</h2>
        </Menu.Item>
        <Menu.Item name='about'
          as={Link} to='/'
          position='right'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}>
          <h2 class="nav">About</h2>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          as={Link} to='/portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Portfolio</h2>
        </Menu.Item>
        <Menu.Item
          name='blog'
          as={Link} to='/blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}>
          <h2 class="nav">Blog</h2>
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
