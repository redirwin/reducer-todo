import { isTemplateElement } from "@babel/types";

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_DONE = "TOGGLE_DONE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
  list: [
    {
      description: "learn about reducers",
      completed: false,
      id: 1
    },
    {
      description: "start project",
      completed: false,
      id: 2
    }
  ]
};

export const reducer = (state, action) => {
  // set up switch statement here
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = {
        description: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        list: [...state.list, newItem]
      };
    }
    case "TOGGLE_DONE": {
      return {
        ...state,
        list: state.list.map(item => {
          if (action.payload === item.id) {
            return {
              ...item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    }
    case "CLEAR_COMPLETED": {
      return {
        ...state,
        list: state.list.filter(item => item.completed !== true)
      };
    }
    default:
      return state;
  }
};
