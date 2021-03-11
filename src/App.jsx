import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setcompleteTodos] = useState([])

  const onChangeTodoText = (e) => setTodoText(e.target.value)

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setcompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index) => {
    const newCompleteTodos= [...completeTodos]
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setcompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
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
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}  >Done</button>
                <button onClick={() => onClickDelete(index)} >Delete</button>
              </div>
            )
          })}
        </ul>
      </div>

      {/* 完了エリア */}
      <div className='complete-area'>
        <p className='title' >Completed TODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div  key={todo} className='list-row' >
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)} >Return</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}