import { Todo } from "../interfaces/interfaces";
// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";

type TodoItemProps = {
    todo: Todo
}

const style = {
    text: `ml-2 cursor-pointer`,
    textCompleted: `line-through text-gray-400 ml-2 cursor-pointer`,
};
export function TodoItem({ todo }: TodoItemProps) {

   const { toggleTodo } = useTodos();

    return (
        <li className={style.text}
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: 'blue'
        }}
        onDoubleClick={ () => toggleTodo( todo.id )}>
            {todo.descript}
        </li>
    )
}
