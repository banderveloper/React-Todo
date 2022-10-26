import './style/App.css';
import TodoAdd from "./components/TodoAdd";
import TodoBlock from "./components/TodoBlock";
import TodoFooter from "./components/TodoFooter";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([
        {id: 'aaaaa', text: 'Buy a new gaming laptop'},
        {id: 'aaaab', text: 'Complete a previous task'},
        {id: 'aaaac', text: 'Create a video for youtube'},
        {id: 'aaaad', text: 'Create a new portfolio site'}
    ]);

    function addTodo(todo) {
        setTodos([...todos, todo]);
    }
    function clearTodos(){
        setTodos([]);
    }

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
