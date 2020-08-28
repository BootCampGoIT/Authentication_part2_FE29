import { SIGNUP, SIGNIN, SIGNOUT } from '../constants/authConstants';

const initialState = {
    email: "",
    token: "",
    databaseId: "",
    isAuth: false,
}

export default (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case SIGNUP:
            return {
                email: payload.email,
                token: payload.token,
                databaseId: payload.databaseId,
                isAuth: true
            };
        case SIGNIN:
            return {
                email: payload.email,
                token: payload.token,
                databaseId: payload.databaseId,
                isAuth: true
            };
        case SIGNOUT:
            return {
                email: "",
                token: "",
                databaseId: "",
                isAuth: false
            };
        default:
            return state
    }
};