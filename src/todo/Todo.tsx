import { TodoProvider } from "./context/TodoProvider";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";
import '../index.css'

export const Todo = () => {

  return (
    <TodoProvider>
        <Title />
        <TodoList />
    </TodoProvider>
  )
}


