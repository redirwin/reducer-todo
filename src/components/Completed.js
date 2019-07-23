import React from "react";

export default function Completed(props) {
  const completed = props.list.filter(item => item.completed);

  return (
    <section>
      <h2>
        Completed<button onClick={props.clearCompleted}>Clear Completed</button>
      </h2>
      {completed.map(item => (
        <p
          key={item.id}
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
