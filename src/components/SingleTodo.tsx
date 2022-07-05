import React from 'react'
import {Todo} from "./model"
type Props = {
    todo : Todo,
    todos: Todo[],
    SetTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}) => {
  return (
    <form>
        
    </form>
  )
}

export default SingleTodo