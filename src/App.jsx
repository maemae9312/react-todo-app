import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState(['todo 1', 'todo 2'])
  const [completeTodos, setcompleteTodos] = useState(['todo 3'])

  const onChangeTodoText = (e) => setTodoText(e.target.value)

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }


  return (
    <>
    {/* 完了エリア */}
      <div className='input-area' >
        <input placeholder='Enter TODO' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd} >Add</button>
      </div>

      {/* 未完了エリア */}
      <div className='incomplete-area' >
        <p className='title' >Unfinished TODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className='list-row' >
                <li>{todo}</li>
                <button>Done</button>
                <button>Delete</button>
              </div>
            )
          })}
        </ul>
      </div>

      {/* 完了エリア */}
      <div className='complete-area'>
        <p className='title' >Completed TODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div  key={todo} className='list-row' >
                <li>{todo}</li>
                <button>Return</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}