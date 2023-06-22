import { TodoProvider } from './todo/context/TodoProvider'
import { Todo } from './todo/Todo'
import { Header } from './todo/layout/Header'
import './index.css'
import './App.css'
import { Footer } from './todo/layout/Footer'

const style = {
  bg: `h-auto w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
}


function App() {

  return (
    <TodoProvider>
      <Header/>
      <div className={style.bg}>
        <Todo />
      </div>
      <Footer />
    </TodoProvider>
  )
}
export default App
