import React, { useState } from "react";

export default function AddItem(props) {
  const [input, changeInput] = useState("");

  const handleChange = e => {
    changeInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeInput("");
    props.addItem(e, input);
  };

  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="Enter new task..."
        value={input}
        onChange={e => {
          handleChange(e);
        }}
      />
      <button>Add</button>
    </form>
  );
}
