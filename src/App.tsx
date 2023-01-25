import React, {useState} from 'react';
import './App.css';
import InputField from "./components/InputField";
import {Todo} from "./model";
import TodoList from "./components/TodoList";

function App() {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        if (todo){
            setTodos([...todos, {id:Date.now(),todo,isDone:false}])
            setTodo("");
        }
    }
    return (
    <div className="App">
      <span className="heading">TODOLIST</span>
        <InputField todo ={todo} setTodo = {setTodo} handleSubmit = {handleSubmit} />
        <TodoList todos ={todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
