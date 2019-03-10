import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import styles from './Footer.module.css'
import '../../App.css';

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <Segment secondary textAlign="center" size="small">
        <Icon onClick={()=> window.open("https://www.linkedin.com/in/chrisbuggelli/", "_blank")} link name="linkedin" size="big" />
        <Icon onClick={()=> window.open("https://medium.com/@cjab", "_blank")} link name="medium" size="big" />
        <Icon onClick={()=> window.open("https://github.com/chrnobyl", "_blank")} link name="github" size="big" />
        <div>© Chris Buggelli 2019</div>
        <div>Like this website? <a href='/contact'>Contact me</a> and I can create one for you, too.</div>
      </Segment>
    </div>
  )
}

export default Footer
