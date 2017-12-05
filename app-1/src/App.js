import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(val) {
    this.setState({
      input: val
    });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.inputUpdate(e.target.value)} />
        <div>
          <p>{this.state.input}</p>
        </div>
      </div>
    );
  }
}

export default App;
