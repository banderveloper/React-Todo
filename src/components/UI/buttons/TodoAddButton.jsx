import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import classes from "./style/todoButtons.module.css";

const TodoAddButton = () => {

    const classesJoined = [classes.general, classes.add].join(' ');

    return (
        <button className={classesJoined}>
            <FontAwesomeIcon icon={faAdd} className='white-icon fa-xl'/>
        </button>
    );
};

export default TodoAddButton;