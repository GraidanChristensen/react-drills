import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state ={
      list: ["hello", "it's", "graidan", "haha"]
    }
    
  }


  render(){
    let displayList = this.state.list.map((value, index) => {
      return <h4>{value}</h4>;
    })

    return(
      <div className="list">
        {displayList}
      </div>
    )
  }
}

export default App;
