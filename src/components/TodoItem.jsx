import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({text}) => {
    return (
        <div className="todo">
            <p className='todo__text'>{text}</p>
            <button className='main-button todo__remove-button'>
                <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
            </button>
        </div>
    );
};

export default TodoItem;