import { Todo } from "../interfaces/interfaces";
// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";

type TodoItemProps = {
    todo: Todo
}
export function TodoItem({ todo }: TodoItemProps) {

   const { toggleTodo } = useTodos();

    return (
        <li 
        style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: 'blue'
        }}
        onDoubleClick={ () => toggleTodo( todo.id )}>
            {todo.descript}
        </li>
    )
}
