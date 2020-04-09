import {types} from "../actions/todoList";

const initialState = {
    loading: true,
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
        case types.SET_LOADING:
            return Object.assign({}, state, {
                loading: action.loading
            });
        case types.SET_TODOS:
            return Object.assign({}, state, {
                todos: action.todos
            });
        default:
            return state;
    }
};

export default todoList;
