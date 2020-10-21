import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterInput: "",
      data: ["graidan", "grace", "gabe", "alex", "adam"]
    };
  }

  handleChange(value) {
    this.setState({
       filterInput: value
      });
  }

  render() {
    let displayData = this.state.data.filter((element) => {
        return element.includes(this.state.filterInput);
      }).map((element, index) => {
        return <h2>{element}</h2>;
      });

    return (
      <div className="list">
        <input onChange={e => this.handleChange(e.target.value)}/>
        {displayData}
      </div>
    );
  }
}

export default App;