import React from 'react'

export const CompletedTodos = (props) => {
  const { completeTodos, onClickBack } = props
  return(
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
  )
}