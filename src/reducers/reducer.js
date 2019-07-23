export const ADD_ITEM = "ADD_ITEM";

export const initialState = {
  list: [
    {
      description: "learn about reducers",
      completed: false,
      id: 1
    },
    {
      description: "start project",
      completed: true,
      id: 1
    }
  ]
};

export const reducer = (state, action) => {
  // set up switch statement here
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(action.payload);
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
    default:
      return state;
  }
};
