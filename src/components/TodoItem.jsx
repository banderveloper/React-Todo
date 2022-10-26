import React, {useState} from 'react';
import TodoRemoveButton from "./UI/buttons/TodoRemoveButton";

const TodoItem = ({todo, removeTodo}) => {

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="todo"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
        >
            <p className='todo__text'>{todo.text}</p>

            {isHovering &&
                <TodoRemoveButton onClick={() => removeTodo(todo)}/>}

        </div>
    );
};

export default TodoItem;