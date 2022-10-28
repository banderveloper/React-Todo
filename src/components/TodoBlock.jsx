import React from 'react';
import TodoItem from "./TodoItem";

const TodoBlock = ({todos, setTodos}) => {

    function removeTodo(removeTodo) {
        setTodos(todos.filter(todo => todo.id !== removeTodo.id));
    }

    return (
        <div className="todo-block">
            {
                todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo}/>
                ))
            }
        </div>
    );
};

export default TodoBlock;