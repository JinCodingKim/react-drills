import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      characterDisplay: {},
      baseUrl: "https://swapi.co"
    };

    this.changeInput = this.changeInput.bind(this);
    this.showCharacter = this.showCharacter.bind(this);
  }

  changeInput(val) {
    this.setState({
      input: val
    });
  }

  showCharacter() {
    axios
      .get(`${this.state.baseUrl}/api/people/${this.state.input}/`)
      .then(response => {
        this.setState({
          characterDisplay: response.data
        });
      })
      .catch(console.log);
  }

  render() {
    const showCM = () => {
      if (this.state.characterDisplay.height) {
        return <span>cm</span>;
      }
    };
    const showKG = () => {
      if (this.state.characterDisplay.mass) {
        return <span>kg</span>;
      }
    };
    return (
      <div className="App">
        <h2>STAR WARS CHARACTERS</h2>
        <input
          placeholder="Input a number"
          onChange={e => this.changeInput(e.target.value)}
        />
        <button onClick={this.showCharacter}>GRAB CHARACTER</button>
        <p>
          <b>Character Name:</b> {this.state.characterDisplay.name}
        </p>
        <p>
          <b>Character Height:</b> {this.state.characterDisplay.height}{" "}
          {showCM()}
        </p>
        <p>
          <b>Character Mass:</b> {this.state.characterDisplay.mass} {showKG()}
        </p>
      </div>
    );
  }
}

export default App;
