import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { useReducer } from 'react';
import { todoReducer } from './TodoReducer';


const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            descript: 'Realizar todos los ejercicios de la tarea',
            completed: false
        }, 
        {
            id: '2',
            descript: 'Realizar el test de cada ejercicio',
            completed: false
        },
        
    ],
    completed: 0,
    pending: 2
}



interface props {
    children: JSX.Element | JSX.Element[]
}

export function TodoProvider({children}: props) {
    
   const [todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE)
   const toggleTodo = ( id: string )=> {
        dispatch ({ type: 'toggleTodo', payload: { id }})
   }

   return (

        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
   )
}
