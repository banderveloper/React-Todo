import React from 'react';
import classes from "./style/todoButtons.module.css";

const TodoClearButton = () => {

    const classesJoined = [classes.general, classes.clear].join(' ');

    return (
        <button className={classesJoined}>Clear all</button>
    );
};

export default TodoClearButton;