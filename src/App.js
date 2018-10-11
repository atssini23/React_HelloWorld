import React, { Component } from 'react';
import Atssini from './Atssini'; {/* without this app will break, react wont find the component */}

class App extends Component {
  constructor() {
     super(); {/* must call */}
     this.state = {
       greeting: "Hello World!",
       parentMessage: "Hello Atssini!"
     }
  }

  render() {
    return(
      <div className="greeting"> 
        <h1>{this.state.greeting}</h1> {/* the way of evaluating JS expressions within JSX */}
        <Atssini newMsg={this.state.parentMessage}/> {/* child component */}
      </div>
    );
  }
}

export default App;
