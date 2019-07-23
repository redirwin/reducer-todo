import React, { useReducer } from "react";

import { reducer, initialState } from "../reducers/reducer";

export default function Incomplete(props) {
  const [{ list }, dispatch] = useReducer(reducer, initialState);
  const incomplete = list.filter(item => !item.completed);

  return (
    <section>
      <h2>Get These Done</h2>
      {incomplete.map(item => (
        <p>{item.description}</p>
      ))}
    </section>
  );
}
