import Todo from "./Todo";
const TodoLIst = ({ todos, setTodos, filterTodos }) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filterTodos.map((todo) => (
                        <Todo
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id}
                            text={todo.text}
                            todo={todo}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoLIst;