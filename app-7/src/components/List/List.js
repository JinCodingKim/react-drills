import React from "react";
import Todo from "./Todo/Todo";

const List = ({ props }) => {
  let list = props.updateList.map((e, i) => {
    return <Todo key={i} item={e} />;
  });

  return <div>{list}</div>;
};

export default List;
