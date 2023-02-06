import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completed: Todo[];
  setCompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos, completed, setCompleted }: Props) => {
  return (
    <div className={"todos-layout"}>
      <div className={"todos-active"}>
        <h2>ACTIVE LIST</h2>
        <div className="todos">
          {todos.map((task) => (
            <SingleTodo
              todo={task}
              todos={todos}
              setTodos={setTodos}
              completed={completed}
              setCompleted={setCompleted}
              key={task.id}
            />
          ))}
        </div>
      </div>
      <div className={"todos-done"}>
        <h2>DONE</h2>
        <div className="todos">
          {completed.map((task) => (
            <SingleTodo
              todo={task}
              todos={completed}
              setTodos={setCompleted}
              completed={completed.sort((a, b) => b.id - a.id)}
              setCompleted={setCompleted}
              key={task.id}

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
