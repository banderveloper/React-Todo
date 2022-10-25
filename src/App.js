import './style/App.css';

function App() {
    return (
        <div className="container">

            <div className='main'>
                <h1 className='title'>Todo App</h1>

                <div className="add-block flex-between">
                    <input className='add-input' type="text" />
                    <button className='add-button'>+</button>
                </div>

                <div className="todo-block">
                    <div className="todo flex-between">
                        <p>todo text</p>
                        <button>delete</button>
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
