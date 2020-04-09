export const types = {
    ADD_TODO: "add-todo",
    SET_LOADING: "set-loading",
    SET_TODOS: "set-todos"
};

export const addTodo = title => ({
    type: types.ADD_TODO,
    title: title
});

export const setLoading = loading => ({
    type: types.SET_LOADING,
    loading: loading
});

export const setTodos = todos => ({
    type: types.SET_TODOS,
    todos: todos
});
