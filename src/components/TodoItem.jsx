import React from 'react';
import TodoRemoveButton from "./UI/buttons/TodoRemoveButton";

const TodoItem = ({text}) => {
    return (
        <div className="todo">
            <p className='todo__text'>{text}</p>
            <TodoRemoveButton/>
        </div>
    );
};

export default TodoItem;