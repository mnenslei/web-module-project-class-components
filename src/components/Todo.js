import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggleTask(props.todo);
    }

    return(
        <div onClick={handleClick} className={`task${props.todo.completed ? 'completed': ''}`}>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;