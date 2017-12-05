import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      list: []
    };

    this.taskValue = this.taskValue.bind(this);
    this.buttonTask = this.buttonTask.bind(this);
  }

  taskValue(val) {
    this.setState({
      input: val
    });
  }

  buttonTask() {
    let listItem = this.state.list;
    listItem.push(this.state.input);
    this.setState({
      list: listItem
    });
  }

  render() {
    let listTasks = this.state.list.map((e, i) => {
      return <Todo item={e} key={i} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={e => this.taskValue(e.target.value)} />
        <button onClick={this.buttonTask}>Add</button>
        {listTasks}
      </div>
    );
  }
}

export default App;
