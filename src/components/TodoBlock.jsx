import React from 'react';
import TodoItem from "./TodoItem";

const TodoBlock = () => {
    return (
        <div className="todo-block">

            <TodoItem text='Buy a new gaming laptop'/>
            <TodoItem text='Complete a previous task'/>
            <TodoItem text='Create a video for youtube'/>
            <TodoItem text='Create a new portfolio site'/>

        </div>
    );
};

export default TodoBlock;