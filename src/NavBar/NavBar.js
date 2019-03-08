import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'about' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text stackable widths="9" size="massive">
        <Menu.Item name='chrisBuggelli'
          as={Link} to='/'
          active={activeItem === 'chris'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item name='about'
          as={Link} to='/'
          position='right'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          as={Link} to='/portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item
          name='blog'
          as={Link} to='/blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item
          name='respacer'
          as={Link} to='/respacer'
          active={activeItem === 'respacer'}
          onClick={this.handleItemClick}>
        </Menu.Item>
      </Menu>
    )
  }
}
