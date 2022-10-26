import React from 'react';
import TodoItem from "./TodoItem";

const TodoBlock = ({todos}) => {

    return (
        <div className="todo-block">

            {
                todos.map(todo=> (
                    <TodoItem text={todo.text} key={todo.id}/>
                ))
            }

        </div>
    );
};

export default TodoBlock;