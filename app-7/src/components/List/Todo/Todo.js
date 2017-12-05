import React from "react";

const Todo = props => {
  return <p key={props.index}>{props.item}</p>;
};

export default Todo;
