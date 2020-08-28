import { SIGNUP, SIGNIN, SIGNOUT } from '../constants/authConstants';

const signUp = (credentials) => {
    return {
        type: SIGNUP,
        payload: credentials //{email, token}
    }
}


const signIn = (credentials) => {
    return {
        type: SIGNIN,
        payload: credentials //{email, token}
    }
}
const signOut = () => {
    return {
        type: SIGNOUT,
        payload: ""
    }
}

export { signUp, signIn, signOut }