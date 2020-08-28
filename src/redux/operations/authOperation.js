import axios from 'axios';
import { signUp, signIn, signOut } from '../actions/authActions';

const baseUrl = "https://authentication-a5128.firebaseio.com";
const API_KEY = "AIzaSyDpIW19KV6p7wEJ7KhhKcqbQ1FIATx9RLs";
const signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const signUpOperation = (credentials) => dispatch => {
    axios.post(signUpURL, credentials)
        .then(async response => {

            const databaseId = await axios.post(`${baseUrl}/users.json`, { email: response.data.email, localId: response.data.localId })
                .then(DBResponse => DBResponse.data.name);

            dispatch(signUp({
                email: response.data.email, token: response.data.idToken, databaseId
            }))
        })
        .catch(error => console.log(error))
}
export const signInOperation = (credentials) => dispatch => {
    axios.post(signInUrl, credentials)
        .then(response => dispatch(signIn({ email: response.data.email, token: response.data.idToken })))
        .catch(error => console.log(error))
}

export const signOutOperation = () => dispatch => {
    dispatch(signOut())
}

