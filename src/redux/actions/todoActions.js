import { ADDNEWTASK, DELETETASK, CHECKIMPORTANT, SET_TASK, FILTERTASK } from '../constants/todoConstants';


export const addNewTask = (task) => {
    console.log('task', task)
    return {
        type: ADDNEWTASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    console.log('idActions', id)
    return {
        type: DELETETASK,
        payload: id
    }
}

export const checkImportant = (id) => {
    return {
        type: CHECKIMPORTANT,
        payload: id
    }
}

export const setTasks = (response) => {
    const tasks = [];
    const keys = Object.keys(response.data);
    for (const key of keys) {
        tasks.push({ id: key, ...response.data[key] })
    }

    return {
        type: SET_TASK,
        payload: tasks
    }
}


export const filterTasks = (e) => {
    const value = e.target.value
    return {
        type: FILTERTASK,
        payload: value
    }
}





