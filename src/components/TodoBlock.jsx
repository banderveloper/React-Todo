import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const TodoBlock = () => {
    return (
        <div className="todo-block">

            <div className="todo">
                <p className='todo__text'>Buy a new gaming laptop</p>
                <button className='main-button todo__remove-button'>
                    <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                </button>
            </div>
            <div className="todo">
                <p className='todo__text'>Complete a previous task</p>
                <button className='main-button todo__remove-button'>
                    <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                </button>
            </div>
            <div className="todo">
                <p className='todo__text'>Create a video for youtube</p>
                <button className='main-button todo__remove-button'>
                    <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                </button>
            </div>
            <div className="todo">
                <p className='todo__text'>Create a new portfolio site</p>
                <button className='main-button todo__remove-button'>
                    <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                </button>
            </div>

        </div>
    );
};

export default TodoBlock;