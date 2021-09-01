import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <u1 className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos} 
                        todo={todo}  
                        key={todo.id} 
                        text={todo.text} 
                    />
                ))}            
            </u1>
        </div>
    );
};

export default TodoList;                          