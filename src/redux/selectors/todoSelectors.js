
export const getTodoItemsSelector = (state) => state.tasks;

export const getFilteredArr = (state) =>
    state.tasks.length

export const authSelector = (state) => state.auth.isAuth;

