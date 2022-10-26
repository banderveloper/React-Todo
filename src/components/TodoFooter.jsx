import React from 'react';

const TodoFooter = () => {
    return (
        <div className="todo-footer-block">
            <p className='todo-pending'>You have 4 pending tasks</p>
            <button className='main-button todo-clear-button'>Clear all</button>
        </div>
    );
};

export default TodoFooter;