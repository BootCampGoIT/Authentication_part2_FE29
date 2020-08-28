import axios from 'axios';
import { loaderOn, loaderOff } from '../actions/loaderActions';
import { setTasks, addNewTask, deleteTask, checkImportant } from '../actions/todoActions';
import { setError, resetError } from '../actions/errorActions';
import store from '../store';

const baseUrl = "https://authentication-a5128.firebaseio.com"


// const getToken = () => {
//     const token = store.getState().auth.token;
//     console.log('token=>', token);
//     return token

// }

export const getTasksOperation = () => async (dispatch) => {
    try {
        dispatch(loaderOn());
        const response = await axios.get(`${baseUrl}/todo.json`);
        dispatch(setTasks(response))
    } catch (error) {
        dispatch(setError("Something went wrong!!!"))
    }
    finally {
        dispatch(loaderOff())
    }
}

export const postTasksOperation = (task) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        dispatch(resetError());
        const response = await axios.post(`${baseUrl}/todo.json`, task);
        dispatch(addNewTask({ id: response.data.name, ...task }))
    } catch (error) {
        console.log('error', error)
        dispatch(setError("Something went wrong!!!"));
    }
    finally {
        dispatch(loaderOff())
    }
}
export const deleteTasksOperation = (id) => async (dispatch) => {
    try {
        // dispatch(loaderOn());
        dispatch(resetError());
        await axios.delete(`${baseUrl}/todo/${id}.json`);
        dispatch(deleteTask(id));
    } catch (error) {
        dispatch(setError("Something went wrong!!!"))
    }
    finally {
        dispatch(loaderOff())
    }
}

export const setImportantTasksOperation = (id, task) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        dispatch(resetError());
        await axios.patch(`${baseUrl}/todo/${id}.json`, { ...task, important: !task.important });
        dispatch(checkImportant(id));
    } catch (error) {
        dispatch(setError("Something went wrong!!!"))
    }
    finally {
        dispatch(loaderOff())
    }
}