import React, { Component } from "react";

class CharacterChoose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };

    this.inputId = this.inputId.bind(this);
  }

  inputId(val) {
    this.setState({
      id: val
    });
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="type an ID number here"
          onChange={e => this.inputId(e.target.value)}
        />
        <button onClick={() => this.props.characterUpdate(this.state.input)}>
          CLICK
        </button>
      </div>
    );
  }
}

export default CharacterChoose;
