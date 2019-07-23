import React from "react";

export default function Completed(props) {
  const completed = props.list.filter(item => item.completed);

  return (
    <section>
      <h2>Completed</h2>
      {completed.map(item => (
        <p>{item.description}</p>
      ))}
    </section>
  );
}
