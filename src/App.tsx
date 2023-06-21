import { TodoProvider } from './todo/context/TodoProvider'
import { Todo } from './todo/Todo'
import './index.css'

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
}


function App() {

  return (
    <TodoProvider>
      <div className={style.bg}>
        <Todo />
      </div>
    </TodoProvider>
  )
}
export default App
