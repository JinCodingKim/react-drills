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

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let taskList = this.state.list;
    taskList.push(task);
    this.setState({
      list: taskList
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask addTask={this.addTask} />
        <List newList={this.state.list} />
      </div>
    );
  }
}

export default App;
