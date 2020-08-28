const SET_ERROR = '@error/set';
const RESET_ERROR = '@error/reset';

const setError = (text) => ({
    type: SET_ERROR,
    payload: text,
});

const resetError = () => ({
    type: RESET_ERROR,
})

export { SET_ERROR, RESET_ERROR, setError, resetError }