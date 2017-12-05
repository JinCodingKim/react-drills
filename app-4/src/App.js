import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.userPass = this.userPass.bind(this);
  }

  updateUsername(val) {
    this.setState({
      username: val
    });
  }

  updatePassword(val) {
    this.setState({
      password: val
    });
  }

  userPass() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.updateUsername(e.target.value)} />
        <input onChange={e => this.updatePassword(e.target.value)} />
        <button onClick={this.userPass}>Login</button>
      </div>
    );
  }
}

export default App;
