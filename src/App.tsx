import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from "./components/InputField";
function App() {
    const [todo, setTodo] = useState("");
    console.log(todo)
    return (
    <div className="App">
      <span className="heading">TODOLIST</span>
        <InputField todo ={todo} setTodo = {setTodo}/>
    </div>
  );
}

export default App;
