import React from 'react'

const InputField = ({todo,setTodo}) => {
  return (
      <form className="input">
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