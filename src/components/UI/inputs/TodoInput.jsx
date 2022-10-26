import React from 'react';
import classes from "./TodoInput.module.css";

const TodoInput = (props) => {
    return (
        <input
            className={classes.addInput}
            type="text"
            {...props}
        />
    );
};

export default TodoInput;