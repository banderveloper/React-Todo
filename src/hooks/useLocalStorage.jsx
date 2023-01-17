import {useEffect} from 'react';

const useLocalStorage = (todos, setTodos) => {

    const items = localStorage.todos;

    if (items !== '[]') {
        setTodos(JSON.parse(items));
    }

    useEffect(() => {
        localStorage.todos = JSON.stringify(todos);
    }, [todos]);

};

export default useLocalStorage;