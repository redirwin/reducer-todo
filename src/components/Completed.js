import React, { useReducer } from "react";

export default function Completed(props) {
  const completed = props.list.filter(item => item.completed);

  return (
    <section>
      <h2>
        Completed<button onClick={props.clearCompleted}>Clear Completed</button>
      </h2>
      {completed.map(item => (
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
