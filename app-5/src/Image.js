import React, { Component } from 'react';
import './App.css';

class Image extends Component{
  render(){
    return(
      <div>
        <img src={this.props.url}/>
      </div>
    )
  }
}

export default Image;
