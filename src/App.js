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

  const toggleDone = id => {
    dispatch({ type: TOGGLE_DONE, payload: id });
  };

  return (
    <div className="App">
      <Header addItem={addItem} />
      <Incomplete list={state.list} toggleDone={toggleDone} />
      <Completed list={state.list} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
