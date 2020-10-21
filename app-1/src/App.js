import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      textInput: ""
    }

  }

  handleChange(value){
    this.setState({
      textInput: value
    })
  }

  render() {
    return(
      <div className="input">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <h1>{this.state.textInput}</h1>
      </div>
    )
  }
}

export default App;