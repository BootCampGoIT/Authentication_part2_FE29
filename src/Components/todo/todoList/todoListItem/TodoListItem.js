import React from 'react';
import css from './TodoListItem.module.css';

const TodoListItem = ({ task, id, important, deleteTask, checkImportant }) => {
    return (
        <li className={css.listItem}>
            <h3>Task: {task}</h3>
            <h4>Status: {important ? "Important" : "Simple"}</h4>
            <button className="button" type="button" onClick={() => checkImportant(id, { task, id, important })}>Change status</button>
            <button className="button" type="button" onClick={() => deleteTask(id)}>Done</button>
        </li>

    );
}

export default TodoListItem;