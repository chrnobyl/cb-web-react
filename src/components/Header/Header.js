import React from 'react';
import styles from './Header.module.css'
import { Icon } from 'semantic-ui-react'
import NavBar from '../NavBar/NavBar';

const Header = (props) => {

  return (
    <div>
      <div className={styles['icons']}>
        <Icon onClick={()=> window.open('https://www.linkedin.com/in/chrisbuggelli/', '_blank')} link name='linkedin' size='big' />
        <Icon onClick={()=> window.open('https://medium.com/@cjab', '_blank')} link name='medium' size='big' />
        <Icon onClick={()=> window.open('https://github.com/chrnobyl', '_blank')} link name='github' size='big' />
      </div>
      <div className={styles['header']}>
        <div>Chris Buggelli</div>
        <div className={styles['subtitle']}>Software Engineer</div>
      </div>
      <NavBar />
    </div>
  )
}

export default Header