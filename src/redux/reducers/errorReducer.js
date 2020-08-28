import { SET_ERROR, RESET_ERROR } from "../actions/errorActions";

const initialState = '';

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_ERROR:
            return actions.payload;
        case RESET_ERROR:
            return "";
        default:
            return state;
    }
};