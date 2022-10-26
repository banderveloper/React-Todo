import './style/App.css';
import TodoAdd from "./components/TodoAdd";
import TodoBlock from "./components/TodoBlock";
import TodoFooter from "./components/TodoFooter";
import {useState} from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }
    function clearTodos(){
        setTodos([]);
    }

    useLocalStorage(todos, setTodos);

    return (

        <div className='main'>
            <h1 className='main__title'>Todo App</h1>

            <TodoAdd addTodo={addTodo} />
            <TodoBlock todos={todos} setTodos={setTodos}/>
            <TodoFooter clearTodos={clearTodos} pending={todos.length}/>
        </div>

    );
}

export default App;
