import { TodoProvider } from "./context/TodoProvider";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import { AiOutlinePlus } from "react-icons/ai";
import "../index.css";

const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
    container: `bg-slate-100 h-auto max-w-[400px] w-full m-auto mt-3 mb-3 rounded-md shadow-xl py-2 px-4`,
    form: `flex justify-between`,
    input:  `bg-withe-100 w-full h-10  text-md`,
    button:   `border p-1 ml-2 bg-purple-500 text-white `,
    
  }
export const Todo = () => {
  return (
    <TodoProvider>
      <div className={style.container}>
        <Title /> 
        <form className={style.form}>
            <input type="text" className={style.input} placeholder=" Añade una nueva tarea" />
            <button type="submit" className={style.button}><AiOutlinePlus size={30}/></button>
        </form>

        <TodoList />
      </div>
    </TodoProvider>
  );
};
