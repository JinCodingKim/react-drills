import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.taskValue = this.taskValue.bind(this);
    this.handleVal = this.handleVal.bind(this);
  }

  taskValue(val) {
    this.setState({
      input: val
    });
  }

  handleVal() {
    this.props.updateTask(this.state.input);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={e => this.taskValue(e.target.value)}
        />
        <button onClick={this.handleVal}>Add</button>
      </div>
    );
  }
}

export default NewTask;
