import './style/App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faTrash} from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <div className="container">

            <div className='main'>
                <h1 className='title'>Todo App</h1>

                <div className="add-block flex-between">
                    <input className='add-input' type="text" placeholder='Add your new todo'/>
                    <button className='add-button'>
                        <FontAwesomeIcon icon={faAdd} className='white-icon fa-xl'/>
                    </button>
                </div>

                <div className="todo-block">
                    <div className="todo flex-between">
                        <p className='todo-text'>todo text</p>
                        <button className='remove-button'>
                            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                        </button>
                    </div>
                    <div className="todo flex-between">
                        <p className='todo-text'>todo text</p>
                        <button className='remove-button'>
                            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                        </button>
                    </div>
                </div>

                <div className="footer-block flex-between">
                    <p>You have 4 pending tasks</p>
                    <button>Clear all</button>
                </div>
            </div>

        </div>
    );
}

export default App;
