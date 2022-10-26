import React from 'react';
import classes from "./TodoInput.module.css";

const TodoInput = ({placeholder}) => {
    return (
        <input className={classes.addInput} type="text" placeholder={placeholder}/>
    );
};

export default TodoInput;