import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Grid, Transition } from 'semantic-ui-react'
// import { Parallax, Background } from 'react-parallax'
import './App.css'

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
            <Grid centered>
              <Grid.Column width={6}>
                <img src='github_profile.jpg' className='image' alt=''/>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className='about'>
                  <h1>About me</h1>
                  {/* <br/> */}

                  <p>
                    Hi, I'm Chris! I'm a software engineer who used to be a TV production guy. I began my career in software engineering because I enjoy building things and learning things. These days, I'm a full stack engineer at Say Yes to Education, where I develop a student growth tracking app in the .NET stack. It feels great to use my software engineering skills to help students get the assistance they need to be successful in school.
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
