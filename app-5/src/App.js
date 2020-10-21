import React, { Component } from 'react';
import './App.css';
import Image from "./Image"

class App extends Component{
  render(){
    return(
      <div>
        <Image url={"https://i.kym-cdn.com/entries/icons/original/000/003/047/omg.jpg"} />
      </div>
    )
  }
}

export default App;
