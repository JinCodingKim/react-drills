import React from "react";

const CharacterInfo = props => {
  let list = props.characterDisplay.map(e => {
    return (
      <div key={e.id}>
        <p>{e.name}</p>
        <p>{e.height}</p>
        <p>{e.mass}</p>
      </div>
    );
  });
  return <div>{list}</div>;
};
export default CharacterInfo;
