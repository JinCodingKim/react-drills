import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import List from "./components/List/List";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.listChange = this.listChange.bind(this);
  }

  listChange(task) {
    this.setState({
      list: [this.state.list, task]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask updateTask={this.listChange} />
        <List updateList={this.state.list} />
      </div>
    );
  }
}

export default App;
