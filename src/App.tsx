import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
import {Todo} from "./model";

function App() {
    const [todo, setTodo] = useState<string>("");
    // const [todos, setTodos] = useState<Todo>([]);

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        if (todo){
            // setTodos([...todos, {id:Data.now(),todo,isDone}])
            console.log(todo);

            setTodo("");
        }

    }
    return (
    <div className="App">
      <span className="heading">TODOLIST</span>
        <InputField todo ={todo} setTodo = {setTodo} handleSubmit = {handleSubmit} />
    </div>
  );
}

export default App;
