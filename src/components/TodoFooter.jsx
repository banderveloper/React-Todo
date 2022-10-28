import React from 'react';
import TodoClearButton from "./UI/buttons/TodoClearButton";

const TodoFooter = ({pending, clearTodos}) => {

    document.title = 'Todo (' + pending + ')';

    return (
        <div className="todo-footer-block">
            <p className='todo-pending'>You have {pending} pending tasks</p>
            <TodoClearButton onClick={clearTodos}/>
        </div>
    );
};

export default TodoFooter;