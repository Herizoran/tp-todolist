import React from 'react'

const InputField = ({todo,setTodo,handleSubmit}) => {
  return (
      <form className="input" onSubmit={handleSubmit}>
        <input type = "input"
               value = {todo}
               onChange={
                   (event)=>setTodo(event.target.value)
               }
               placeholder="Enter Task" className="inputBox"/>
      </form>
  );
}

export default InputField