import './style/App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faTrash} from '@fortawesome/free-solid-svg-icons'

function App() {
    return (
        <div className="container">

            <div className='main'>

                <h1 className='main__title'>Todo App</h1>

                <div className="todo-add-block">
                    <input className='todo-add-input' type="text" placeholder='Add your new todo'/>
                    <button className='main-button todo-add-button'>
                        <FontAwesomeIcon icon={faAdd} className='white-icon fa-xl'/>
                    </button>
                </div>

                <div className="todo-block">

                    <div className="todo">
                        <p className='todo__text'>Buy a new gaming laptop</p>
                        <button className='main-button todo__remove-button'>
                            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                        </button>
                    </div>
                    <div className="todo">
                        <p className='todo__text'>Complete a previous task</p>
                        <button className='main-button todo__remove-button'>
                            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                        </button>
                    </div>
                    <div className="todo">
                        <p className='todo__text'>Create a video for youtube</p>
                        <button className='main-button todo__remove-button'>
                            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                        </button>
                    </div>
                    <div className="todo">
                        <p className='todo__text'>Create a new portfolio site</p>
                        <button className='main-button todo__remove-button'>
                            <FontAwesomeIcon icon={faTrash} className='white-icon fa-xl'/>
                        </button>
                    </div>

                </div>

                <div className="todo-footer-block">
                    <p className='todo-pending'>You have 4 pending tasks</p>
                    <button className='main-button todo-clear-button'>Clear all</button>
                </div>
            </div>

        </div>
    );
}

export default App;
