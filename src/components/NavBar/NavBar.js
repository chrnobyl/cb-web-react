import React, { Component } from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'about' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable widths="5" size="massive">
        <Menu.Item className={styles['nav']} name='about'
          as={Link} to='/'
          position='right'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item className={styles['nav']}
          name='portfolio'
          as={Link} to='/portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item className={styles['nav']}
          name='blog'
          as={Link} to='/blog'
          active={activeItem === 'blog'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item className={styles['nav']}
          name='contact'
          as={Link} to='/contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}>
        </Menu.Item>
        <Menu.Item className={styles['nav']}
          name='respacer'
          as={Link} to='/respacer'
          active={activeItem === 'respacer'}
          onClick={this.handleItemClick}>
        </Menu.Item>
      </Menu>
    )
  }
}
