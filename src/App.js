import React, { useReducer } from "react";
import "./App.css";
import styled from "styled-components";

// custom imports
import Header from "./components/Header";
import Incomplete from "./components/Incomplete";
import Completed from "./components/Completed";
import {
  reducer,
  initialState,
  ADD_ITEM,
  TOGGLE_DONE,
  CLEAR_COMPLETED
} from "./reducers/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (e, item) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const toggleDone = id => {
    dispatch({ type: TOGGLE_DONE, payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <AppWrapper className="App">
      <Header addItem={addItem} />
      <div>
        <Incomplete list={state.list} toggleDone={toggleDone} />
        <Completed
          list={state.list}
          toggleDone={toggleDone}
          clearCompleted={clearCompleted}
        />
      </div>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;

  flex-direction: column;

  button {
    background-color: #0aa06e;
    color: white;
    padding: 0.5rem;
  }

  input {
    padding: 0.5rem;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  section {
    width: 33%;
  }
`;
