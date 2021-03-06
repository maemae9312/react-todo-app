import React from 'react'
import './App.css'

export const App = () => {
  return (
    <>
    {/* 完了エリア */}
      <div className='input-area' >
        <input placeholder='Enter TODO' />
        <button>Add</button>
      </div>

      {/* 未完了エリア */}
      <div className='incomplete-area' >
        <p className='title' >Unfinished TODO</p>
        <ul>
          <div className='list-row' >
            <li>todo 1</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
          <div className='list-row' >
            <li>todo 2</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>

      {/* 完了エリア */}
      <div className='complete-area'>
        <p className='title' >Completed TODO</p>
        <ul>
          <div className='list-row' >
            <li>todo 3</li>
            <button>Return</button>
          </div>
        </ul>
      </div>
    </>
  )
}