export const types = {
    ADD_TODO: "add-todo",
};

export const addTodo = title => ({
    type: types.ADD_TODO,
    title: title
});

