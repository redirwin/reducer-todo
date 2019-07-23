import React from "react";

import checked from "../assets/checked.png";
import AddItem from "../components/AddItem";

export default function Header(props) {
  return (
    <header>
      <img src={checked} alt="Checked" />
      <h2>Get It Done</h2>
      <AddItem addItem={props.addItem} />
    </header>
  );
}
