import { LOADER_ON, LOADER_OFF } from "../actions/loaderActions";

const initialState = false;

export default (state = initialState, actions) => {
    switch (actions.type) {
        case LOADER_ON:
            return true;
        case LOADER_OFF:
            return false;
        default:
            return state;
    }
};