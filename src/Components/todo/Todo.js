import React, { Component } from 'react'
import TodoForm from './todoForm/TodoForm';
import { connect } from 'react-redux';
import TodoLIst from './todoList/TodoLIst';
import {
    getTasksOperation,
    postTasksOperation,
    deleteTasksOperation,
    setImportantTasksOperation
} from '../../redux/operations/todoOperations';
import { getTodoItemsSelector } from '../../redux/selectors/todoSelectors';




class Todo extends Component {
    state = {}

    componentDidMount() {
        this.props.getTasksOperation();
    }

    render() {
        const { todoItems, postTasksOperation, deleteTasksOperation, setImportantTasksOperation } = this.props;
        return (
            <>
                <img src='./images/left.png' alt="back" width="20" height="20"/>
                <TodoForm postTasksOperation={postTasksOperation} />
                {this.props.error && <h2>{this.props.error}</h2>}
                <TodoLIst todoItems={todoItems} deleteTask={deleteTasksOperation} checkImportant={setImportantTasksOperation} />
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    todoItems: getTodoItemsSelector(state), 
})

const mapDispatchToProps = {
    getTasksOperation, postTasksOperation, deleteTasksOperation, setImportantTasksOperation
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

