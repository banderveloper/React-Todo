import {useEffect} from 'react';

const useLocalStorage = (todos, setTodos) => {

    useEffect(()=>{
        const items = localStorage.todos;

        if(items !== '[]'){
            setTodos(JSON.parse(items));
        }

    }, [setTodos]);

    useEffect(()=>{
        localStorage.todos = JSON.stringify(todos);
    }, [todos]);

};

export default useLocalStorage;