import React, { Component } from 'react'
import styles from './About.module.css'
import { Route } from 'react-router-dom'
import { Grid, Transition } from 'semantic-ui-react'
// import { Parallax, Background } from 'react-parallax'
import '../../../App.css'

export default class About extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
  }

  render() {
    const { visible } = this.state

    return (
      <Route path="/" render={() =>
        <Transition visible={visible} animation='fade' duration={800}>
          {/* <Parallax bgImage='forest.jpg' strength={500}> */}
            <Grid centered stackable>
              <Grid.Column width={7}>
                <img src='github_profile.jpg' className='image' alt=''/>
              </Grid.Column>
              <Grid.Column width={9}>
                <div className='about'>
                  <h1 style={{fontFamily: 'Quattrocento Sans'}}>About me</h1>
                  <p>
                    Hi, I'm Chris! I'm a software engineer who used to be a TV production guy. I began my career in software engineering because I enjoy building things and learning things. These days, I'm a full stack engineer at Bauer Xcel Media, developing publishing tools with Ruby and React. I formerly worked at Say Yes to Education, where I helped build a student growth tracking app in the .NET stack.
                  </p>

                  <p>
                    I have built apps with React, JavaScript, jQuery, Ruby, Rails, Node, C#, and .NET. ReactJS is one of my favorite libraries to work with. I'm always excited to explore new technologies and I highly value learning from/collaborating with fellow engineers.
                  </p>

                  <p>
                    Outside of work, I enjoy playing music, out-of-date video games, and listening to podcasts like Stuff You Should Know and Hardcore History.
                  </p>

                  <p>
                    This website is a work in progress. It is built with React, Semantic UI React, and AWS.
                  </p>
                </div>
              </Grid.Column>
            </Grid>
        {/* </Parallax> */}
      </Transition>
        }/>
    )
  }
}
