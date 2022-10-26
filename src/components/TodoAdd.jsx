import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";

const TodoAdd = () => {
    return (
        <div className="todo-add-block">
            <input className='todo-add-input' type="text" placeholder='Add your new todo'/>
            <button className='main-button todo-add-button'>
                <FontAwesomeIcon icon={faAdd} className='white-icon fa-xl'/>
            </button>
        </div>
    );
};

export default TodoAdd;