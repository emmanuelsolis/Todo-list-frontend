import { Todo } from './todo/Todo'

import './App.css'
import { TodoProvider } from './todo/context/TodoProvider'

function App() {

  return (
    <TodoProvider>
      <div>
        <Todo />
      </div>
    </TodoProvider>
  )
}
export default App
