import React from 'react';
import TodoClearButton from "./UI/buttons/TodoClearButton";

const TodoFooter = () => {
    return (
        <div className="todo-footer-block">
            <p className='todo-pending'>You have 4 pending tasks</p>
            <TodoClearButton/>
        </div>
    );
};

export default TodoFooter;