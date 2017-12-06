import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CharacterInfo from "./components/CharacterInfo/CharacterInfo";
import CharacterChoose from "./components/CharacterChoose/CharacterChoose";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterToDisplay: [],
      baseUrl: "https://swapi.co"
    };

    this.characterUpdate = this.characterUpdate.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${this.state.baseUrl}/api/people/${this.state.id}/`)
      .then(response => {
        this.setState({
          characterToDisplay: response.data
        });
      })
      .catch(console.log);
  }

  characterUpdate(task) {
    let characterList = this.state.characterToDisplay;
    characterList.push(task);
    this.setState({
      characterToDisplay: characterList
    });
  }

  render() {
    return (
      <div className="App">
        <CharacterChoose characterUpdate={this.characterUpdate} />
        <CharacterInfo characterDisplay={this.state.characterToDisplay} />
      </div>
    );
  }
}

export default App;
