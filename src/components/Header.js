import React from "react";

import checked from "../assets/checked.png";

export default function Header() {
  return (
    <header>
      <img src={checked} alt="Checked" />
      <h2>Get It Done</h2>
      <form>
        <input type="text" name="newItem" placeholder="Enter new task..." />
        <button>Add</button>
      </form>
    </header>
  );
}
