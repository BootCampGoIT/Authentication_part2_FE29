import React from 'react';
import TodoListItem from './todoListItem/TodoListItem';

const TodoLIst = ({ todoItems, deleteTask, checkImportant }) => {
    return (
        <ul >
            {todoItems.map(task => <TodoListItem key={task.id} {...task} deleteTask={deleteTask} checkImportant={checkImportant} />)}
        </ul>
    );
}

export default TodoLIst;