import React from "react";
import "./App.css";

// component imports
import Header from "./components/Header";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";

function App() {
  return (
    <div className="App">
      <Header />
      <Incomplete />
      <Completed />
    </div>
  );
}

export default App;
