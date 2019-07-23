import React, { useReducer } from "react";
import "./App.css";

// custom imports
import Header from "./components/Header";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [{ list }, dispatch] = useReducer(reducer, initialState);
  console.log(list);

  return (
    <div className="App">
      <Header />
      <Incomplete list={list} dispatch={dispatch} />
      <Completed list={list} dispatch={dispatch} />
    </div>
  );
}

export default App;
