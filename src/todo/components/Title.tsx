import { useTodos } from "../hooks/useTodos";



const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  heading: `text-3xl text-center text-gray-800 p-2 font-bold`,
}

export const Title = () => {

    const { pendingTodos } = useTodos();
    
  return (
    <h1 className={style.heading}>
      Todos: {pendingTodos.length}
    </h1>
  )
}

