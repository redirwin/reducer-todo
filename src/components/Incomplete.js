import React, { useReducer } from "react";

export default function Incomplete(props) {
  const incomplete = props.list.filter(item => !item.completed);

  return (
    <section>
      <h2>Get These Done</h2>
      {incomplete.map(item => (
        <p
          onClick={e => {
            props.toggleDone(item.id);
          }}
        >
          {item.description}
        </p>
      ))}
    </section>
  );
}
