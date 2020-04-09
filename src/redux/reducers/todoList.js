import {types} from "../actions/todoList";

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
        }]
};

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    {
                        id: null,
                        completed: false,
                        title: action.title
                    },
                    ...state.todos
                ]
            });
        default:
            return state;
    }
};

export default todoList;
