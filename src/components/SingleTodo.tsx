import React from 'react'
import {Todo} from "../model";

type Props = {
  todo:Todo;
  todos:Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
  return (
    <form className="single-todo">
        <input type={"checkbox"}/>
        <span className="text-todo">
            {todo.todo}
        </span>
    </form>
  )
}

export default SingleTodo