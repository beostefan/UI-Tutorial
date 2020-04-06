const initialState = {
  todos: [
    {
      id: 1,
      completed: false,
      title: "Buy Easter Eggs"
    },
    {
      id: 2,
      completed: false,
      title: "Make Toilet Paper Inventory"
    },
    {
      id: 3,
      completed: true,
      title: "Work"
    }
  ]
};
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case "add-todo":
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: null,
            completed: false,
            title: action.title
          }
        ]
      });
    default:
      return state;
  }
};

export default todoList;
