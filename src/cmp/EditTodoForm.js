
import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [val, setVal] = useState("")


    const handleSubmit = e => {
        e.preventDefault();

        editTodo(val, task.id)
        setVal("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={val} placeholder='Update Task'
                onChange={(e) => setVal(e.target.value)} />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
