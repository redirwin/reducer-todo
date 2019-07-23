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
    // case "ADD_ITEM":
    //   {
    //   }
    //   return {
    //     ...state,
    //     items: [...state.items, newItem]
    //   };
    default:
      return state;
  }
};
