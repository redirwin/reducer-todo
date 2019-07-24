import React from "react";

export default function Incomplete(props) {
  const incomplete = props.list.filter(item => !item.completed);

  return (
    <section>
      <h3>Get These Done</h3>
      {incomplete.map(item => (
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
