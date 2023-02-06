import React from "react";
import { Todo } from "../model";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos, completed, setCompleted }: Props) => {

  const handleDone = (id: number, event: any) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
    if (event.target.checked) {
      setTodos(todos.filter((todo) => todo.id !== id));
      setCompleted([...completed, { id: id, todo: event.target.value, isDone: true }]);
    }
  };
  return (
    <form className="single-todo">
      <input className="single-checkbox" type={"checkbox"} value={todo.todo}
             onChange={(event) => handleDone(todo.id, event)} />
      {
        todo.isDone ? (
          <s className="text-todo">
            {todo.todo}
          </s>
        ) : (
          <span className="text-todo">
            {todo.todo}
          </span>
        )
      }
    </form>
  );
};
export default SingleTodo;