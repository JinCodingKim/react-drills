import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(val) {
    this.setState({
      input: val
    });
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder="Enter new task"
          onChange={e => this.inputChange(e.target.value)}
        />
        <button onClick={() => this.props.addTask(this.state.input)}>
          Add
        </button>
      </div>
    );
  }
}
export default NewTask;
