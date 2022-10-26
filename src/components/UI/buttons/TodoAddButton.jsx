import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import classes from "./style/todoButtons.module.css";

const TodoAddButton = ({onClick}) => {

    const classesJoined = [classes.general, classes.add].join(' ');

    return (
        <button className={classesJoined} onClick={onClick}>
            <FontAwesomeIcon icon={faAdd} className='fa-xl'/>
        </button>
    );
};

export default TodoAddButton;