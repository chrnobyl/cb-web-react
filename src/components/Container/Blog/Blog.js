import React, { Component } from 'react'
import { List, Transition } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import '../../../App.css'

// const awsMediumAPI = `https://sl3awpekph.execute-api.us-east-2.amazonaws.com/mediumStage`
const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cjab`

export default class Blog extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      visible: false
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount() {
    this.toggleVisibility()
    this.getPosts()
   }

   getPosts() {
     return fetch(rssToJsonUrl)
     .then(res => res.json())
     .then(data => {
         this.setState(prevState => ({
           posts: data.items
         })
       )}
     )
   }

   render() {

     return (
       <Route path='/blog' render={() =>
         <Transition visible={this.state.visible} animation='fade' duration={800}>
           <div className='block'>
             <h1>I blog on Medium from time to time</h1>
             Check out some of my recent articles below:
             <List divided relaxed size='medium'>
               {this.state.posts.map((post, i) => (
                   <List.Item>
                     {/* <img src={post.thumbnail} alt="" className="thumbnail" key={i}/> */}
                     <List.Content verticalAlign='middle'>
                       {/* {post.title} */}
                     <a href={post.link}>{post.title}</a>
                     </List.Content>
                   </List.Item>
                 )
               )}
             </List>
           </div>
         </Transition>
       }/>
     )
   }
}
