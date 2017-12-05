import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  render() {
    let foodItems = this.state.list.map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });
    return <div className="App">{foodItems}</div>;
  }
}

export default App;
