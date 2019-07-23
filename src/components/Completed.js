import React, { useReducer } from "react";

import { reducer, initialState } from "../reducers/reducer";

export default function Completed(props) {
  const [{ list }, dispatch] = useReducer(reducer, initialState);
  const completed = list.filter(item => item.completed);

  return (
    <section>
      <h2>Completed</h2>
      {completed.map(item => (
        <p>{item.description}</p>
      ))}
    </section>
  );
}
