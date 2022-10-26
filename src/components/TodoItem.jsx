import React, {useState} from 'react';
import TodoRemoveButton from "./UI/buttons/TodoRemoveButton";

const TodoItem = ({text}) => {

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className="todo"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
        >
            <p className='todo__text'>{text}</p>

            {isHovering && <TodoRemoveButton/>}

        </div>
    );
};

export default TodoItem;