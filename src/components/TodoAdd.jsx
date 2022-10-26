import React, {useState} from 'react';
import TodoAddButton from "./UI/buttons/TodoAddButton";
import TodoInput from "./UI/inputs/TodoInput";
import {makeId} from "../utils/random";

const TodoAdd = ({addTodo}) => {

    const [todo, setTodo] = useState({
        id: '',
        text: ''
    });

    function newTodo(){
        if(todo.text) {
            todo.id = makeId();
            addTodo(todo);
            setTodo({id:'', text: ''});
        }
    }

    return (
        <div className="todo-add-block">
            <TodoInput
                placeholder='Add your new todo'
                onChange={e => setTodo({...todo, text: e.target.value})}
                value={todo.text}
            />
            <TodoAddButton onClick={newTodo}/>
        </div>
    );
};

export default TodoAdd;