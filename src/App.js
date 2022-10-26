import './style/App.css';
import TodoAdd from "./components/TodoAdd";
import TodoBlock from "./components/TodoBlock";
import TodoFooter from "./components/TodoFooter";

function App() {
    return (
        <div className="container">

            <div className='main'>
                <h1 className='main__title'>Todo App</h1>

                <TodoAdd/>
                <TodoBlock/>
                <TodoFooter/>
            </div>

        </div>
    );
}

export default App;
