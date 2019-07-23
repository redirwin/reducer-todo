import React, { useReducer } from "react";
import "./App.css";

// custom imports
import Header from "./components/Header";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";
import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_DONE,
  CLEAR_DONE
} from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  return (
    <div className="App">
      <Header addItem={addItem} />
      <Incomplete list={state.list} />
      <Completed list={state.list} />
    </div>
  );
}

export default App;
