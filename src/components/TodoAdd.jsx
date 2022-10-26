import React from 'react';
import TodoAddButton from "./UI/buttons/TodoAddButton";
import TodoInput from "./UI/inputs/TodoInput";

const TodoAdd = () => {
    return (
        <div className="todo-add-block">
            <TodoInput placeholder={'Add your new todo'}/>
            <TodoAddButton/>
        </div>
    );
};

export default TodoAdd;