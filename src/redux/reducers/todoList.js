import {types} from "../actions/todoList";

const initialState = {
    todos: []
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
