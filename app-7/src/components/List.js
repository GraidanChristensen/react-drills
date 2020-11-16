import React, {Component} from 'react';
import Todo from "./ToDo";

export default class List extends Component {
  render() {
    const list = this.props.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    
    return <div>{list}</div>;
  }
}