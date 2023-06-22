// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liCompleted: `flex justify-between bg-slate-400 p-4 my-2 capitalize line-through`,
    row: `flex`,
    button: `cursor-pointer flex items-center`,
};
export function TodoList() {
  // const {todoState} = useContext(TodoContext);
  // const {todos} = todoState;

  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li className={style.li}>
          <div className={style.row} key={idx}>
            <input type="checkbox" />
            <TodoItem todo={todo} />
          </div>
          <button>{<FaRegTrashAlt />}</button>
        </li>
      ))}
    </ul>
  );
}
