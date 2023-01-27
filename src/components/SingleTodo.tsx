import React from 'react'
import {Todo} from "../model";
import "./styles.css"


type Props = {
  todo:Todo;
  todos:Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
    const handleDone = (id:number) => {
      setTodos(todos.map((todo) =>
          todo.id === id ? {...todo, isDone: !todo.isDone}: todo
      ));
    }
  return (
    <form className="single-todo">
        <input type={"checkbox"} onChange={() => handleDone(todo.id)}/>
        <span className="text-todo">
            {todo.todo}
        </span>
    </form>
  )
}

export default SingleTodo