import React, { Component } from 'react'
// import { Grid, Menu, Segment, Button, Modal } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

const Bio = (props) => {
  return (
    <Route path="/" render={() =>
      <div class='block'>
        <h1>Bio goes here</h1>
        <br/>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur at nibh nec placerat. In pharetra est nec quam cursus, nec malesuada turpis pulvinar. Aliquam mattis, ipsum quis fringilla ornare, orci ante accumsan neque, vel tempus mauris urna vitae ipsum. Suspendisse et fringilla velit, eu aliquet nibh. Suspendisse luctus turpis vitae nisi aliquet, quis dictum sem molestie. Sed eu enim ut urna finibus convallis in at enim. Aliquam eu nunc porttitor, pretium purus quis, congue lorem. Donec elementum ut risus a venenatis. Sed molestie facilisis nulla, quis fermentum dolor tempor et. Integer quis scelerisque leo, vitae luctus enim. Phasellus euismod suscipit fringilla. Suspendisse sed porttitor quam.
        </p>

        <p>
          Pellentesque pulvinar id orci eu accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean pellentesque convallis nulla, ac mattis nisl malesuada et. Donec ut nulla nibh. Quisque eget mi lorem. Aliquam tortor odio, pulvinar eget pretium sit amet, semper nec lorem. Vestibulum volutpat tempor cursus. Etiam gravida tellus consectetur tellus feugiat, sit amet pretium ligula suscipit. Aenean accumsan sapien nec libero ornare placerat. Aenean leo sapien, auctor a tempus volutpat, gravida ut enim. Fusce sagittis rhoncus turpis sed aliquet. Integer scelerisque, risus quis vulputate fermentum, tellus ex pharetra lectus, sit amet bibendum risus enim id urna. Praesent feugiat, libero ac porttitor consectetur, dolor tortor tincidunt augue, nec pellentesque eros ligula nec tortor. Duis in ipsum fringilla, posuere nunc sit amet, rutrum nibh.
        </p>

        <p>
          Vivamus neque nulla, posuere sed tincidunt in, pellentesque ac mi. Sed a tincidunt nulla. Nunc justo dui, scelerisque sed nibh et, hendrerit ullamcorper leo. Nulla ornare, nunc quis posuere ornare, libero eros ornare nunc, ac tristique purus dui ut metus. Etiam venenatis tellus at sem fermentum, sit amet molestie risus rhoncus. Proin nisi odio, laoreet ut erat ac, mattis euismod eros. Donec vel mauris nibh. In eu tellus aliquet, commodo tortor at, consectetur felis. In turpis justo, laoreet in condimentum vel, luctus at nibh. Donec a justo vestibulum, lacinia ipsum et, lacinia urna. Mauris lacinia ipsum libero, ac consectetur risus bibendum sit amet. Nam quis lacus ultrices, elementum magna rhoncus, luctus dui.
        </p>

        <p>
          Donec varius, ex eget placerat luctus, nunc ex dapibus est, a tempor ante augue ac dolor. Morbi placerat diam eget aliquet tempor. Duis faucibus eros eu purus maximus pellentesque. Vivamus vel eleifend enim. Quisque nec ligula dictum urna laoreet efficitur eget aliquam felis. Sed at nunc felis. Nulla sit amet sem in tortor commodo iaculis ut ac ligula. Etiam urna erat, sollicitudin ut enim sed, scelerisque dignissim nunc. Curabitur porttitor semper mauris at finibus. Donec eget urna at felis vulputate gravida ac quis quam. Aenean non augue mi. Vestibulum at ex porttitor, vestibulum dui a, maximus elit. Nam interdum iaculis mauris a consectetur. Maecenas aliquet, ex vitae iaculis condimentum, diam mi aliquet dolor, in posuere velit est id tortor. Etiam vitae fermentum risus.
        </p>

        <p>
          Phasellus convallis tincidunt augue. Etiam eget massa ut velit tristique tempus. Mauris viverra lectus magna. Suspendisse a euismod arcu. Duis dignissim augue non mauris aliquet, et fringilla nisi molestie. Proin ornare tortor nisi, eu sodales nibh euismod ut. Suspendisse potenti. Sed id consequat magna, sed commodo elit. Fusce id auctor nulla. Nunc ullamcorper tincidunt enim non vehicula.
        </p>

        <p>
          Aenean non sem eget metus pretium placerat sed sed enim. Nunc nisi nisl, molestie sed tempus non, pharetra sed velit. Integer dignissim lacus tellus, ac finibus nulla ultricies eu. Curabitur felis tellus, blandit sit amet velit quis, semper pretium odio. Pellentesque purus sem, varius sed ex et, aliquet scelerisque turpis. Nunc a diam quis nibh malesuada accumsan eu id enim. Nulla pulvinar orci vel gravida mollis. Sed eu varius sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur consectetur viverra magna sit amet gravida. Vivamus ac mauris tempus, sollicitudin tellus a, vestibulum velit. Vestibulum vel egestas diam. Fusce vehicula lobortis mauris a pellentesque. Quisque id sapien metus.
        </p>

        <p>
          Maecenas nibh dolor, mattis et tincidunt quis, rutrum lacinia mi. Phasellus condimentum velit id dignissim commodo. Donec enim risus, tempus sed mattis eu, commodo vitae justo. Pellentesque tincidunt diam et leo posuere sollicitudin. Phasellus viverra ligula a orci accumsan tempus. Sed nec tempor purus, vitae iaculis magna. Sed blandit suscipit massa vel ultricies.
        </p>

        <p>
          Nullam dolor libero, vestibulum vitae ante vitae, rutrum mollis ipsum. Aliquam placerat in dui ac sodales. Integer commodo ex maximus finibus ultricies. Donec at blandit leo. In hac habitasse platea dictumst. Vestibulum commodo, metus non maximus sodales, est odio mattis magna, maximus faucibus sapien turpis non lorem. Nullam sit amet ipsum dui. Nulla fringilla mauris non tellus vestibulum, nec lacinia est auctor. Proin eu tellus mattis, cursus metus non, ullamcorper ante.
        </p>
      </div>
      }/>

  )
}

export default Bio
