import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import classes from "./style/todoButtons.module.css";

const TodoRemoveButton = () => {

    const classesJoined = [classes.general, classes.remove].join(' ');

    return (
        <button className={classesJoined}>
            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
        </button>
    );
};

export default TodoRemoveButton;