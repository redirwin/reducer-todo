import React from "react";
import "./App.css";

// custom imports
import Header from "./components/Header";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";
import { reducer, initialState } from "./reducers/reducer";

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
