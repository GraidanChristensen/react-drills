import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      planet: {}
    };
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/planets/5/").then(response => {
      this.setState({
        planet: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Planet: {this.state.planet.name}</h1>
        <h1>Terrain: {this.state.planet.terrain}</h1>
        <h1>Diameter: {this.state.planet.diameter}</h1>
      </div>
    );
  }
}

export default App;