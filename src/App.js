import React, { Component } from 'react';

import img from './logo.png';
import Container from './container.js';
import N from './navbar.js';
import Logo from './logo.js';
import E from './event';
import T from './timeline.js';



import M from './mainevent.js';
class App extends Component {
  render() {
    return (
        <Container>
      <Logo > "logo.png" </Logo>
       
        <N></N>
        <M>"main.jpg"</M>
        <E> "event.jpg"</E>
        <T>"timeline.jpg"</T>
        
        
</Container>
    );
  }
}

export default App;
