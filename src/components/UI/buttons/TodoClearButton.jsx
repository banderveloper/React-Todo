import React from 'react';
import classes from "./style/todoButtons.module.css";

const TodoClearButton = ({onClick}) => {

    const classesJoined = [classes.general, classes.clear].join(' ');

    return (
        <button className={classesJoined} onClick={onClick}>Clear all</button>
    );
};

export default TodoClearButton;