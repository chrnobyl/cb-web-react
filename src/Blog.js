import React, { Component } from 'react'
import { Icon, Image, List } from 'semantic-ui-react'
// import { Route } from 'react-router-dom'
import './App.css'

const awsMediumAPI = `https://sl3awpekph.execute-api.us-east-2.amazonaws.com/mediumStage`
const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cjab`

// const Blog = (props) => {
//   return (
//     <Route path="/blog" render={() =>
//       <div class='block'>
//         <h1>Recent blog posts</h1>
//         <br/>
//
//         <p>
//           No blog posts yet. Check out my <a href="https://medium.com/@cjab" target="_blank">Medium</a> page for past blog posts.
//         </p>
//       </div>
//     }/>
//
//   )
// }
//
// export default Blog

export default class Blog extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

   componentDidMount() {
     this.getPosts()
   }


   // fetchPosts = () => fetch(`https://medium.com/@cjab/latest?format=json`)

   getPosts() {
     return fetch(rssToJsonUrl)
     .then(res => res.json())
     .then(data => {
       // debugger
         this.setState(prevState => ({
           posts: data.items
         })
       )}
     )
   }

   render() {
     return (
       <div className="block">
         <h1>I blog on Medium from time to time</h1>
         <br/>
         <List divided size="huge">
           {this.state.posts.map((post, i) => (
               <List.Item>
                 <img src={post.thumbnail} className="thumbnail" key={i}/>
                 <List.Content>
                   <List.Header as='a'>{post.title}</List.Header>
                 {/* <h2 key={i}><a href={post.link}>{post.title}</a></h2> */}
                 </List.Content>
               </List.Item>
             )
           )}
         </List>
       </div>
     )
   }
}
