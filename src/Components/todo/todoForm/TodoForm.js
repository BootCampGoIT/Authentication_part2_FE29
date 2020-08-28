import React, { Component } from 'react'

class TodoForm extends Component {
    state = {
        task: "",
        important: false,
    }

    onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        // this.props.addNewTask({ ...this.state});
        this.props.postTasksOperation({ ...this.state})
        this.setState({ task: "" })
    }
    
    onHandleClick = (e) => {
        this.setState(prevState=> ({important: !prevState.important}))
    }

    render() {
        const { task, important } = this.state
        return (
            <form onSubmit={this.onHandleSubmit}>
                <input className="input"  type="text" name="task" onChange={this.onHandleChange} value={task} />
                <button type="button" className="button" onClick={this.onHandleClick}>{important ? "Important" : "Simple"}</button>
                <button type="submit" className="button">Add new task</button>
            </form>
        );
    }
}

export default TodoForm;