import React from "react";
import Todo from "./Todo/Todo";

const List = props => {
  let list = props.newList.map((e, i) => {
    return <Todo item={e} index={i} />;
  });
  return <div>{list}</div>;
};
export default List;
