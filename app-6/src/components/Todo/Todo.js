import React from "react";

const Todo = ({ item, key }) => {
  return <h4 key={key}>{item}</h4>;
};

export default Todo;
