import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleSubmit}: Props) => {
    return (
        <form className="input" onSubmit={handleSubmit}>
            <input type="input"
                   value={todo}
                   onChange={
                       (event) => setTodo(event.target.value)
                   }
                   placeholder="Enter Task" className="inputBox"/>
        </form>
    );
}

export default InputField