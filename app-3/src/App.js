import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      item: ""
    };

    this.listItem = this.listItem.bind(this);
  }

  listItem(val) {
    this.setState({
      item: val
    });
  }

  render() {
    let foodList = this.state.list
      .filter((e, i) => e.includes(this.state.item))
      .map((e, i) => {
        return <h2 key={i}>{e}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.listItem(e.target.value)} />
        <div>{foodList}</div>
      </div>
    );
  }
}

export default App;
