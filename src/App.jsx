import React from 'react'
import './App.css'

export const App = () => {
  return (
    <>
    {/* 完了エリア */}
      <div>
        <input placeholder='Enter TODO' />
        <button>Add</button>
      </div>

      {/* 未完了エリア */}
      <div>
        <p>Unfinished TODO</p>
        <ul>
          <div>
            <li>todo 1</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
          <div>
            <li>todo 2</li>
            <button>Done</button>
            <button>Delete</button>
          </div>
        </ul>
      </div>

      {/* 完了エリア */}
      <div>
      <div>
        <p>Completed TODO</p>
        <ul>
          <div>
            <li>todo 3</li>
            <button>Return</button>
          </div>
          <div>
            <li>todo 4</li>
            <button>Return</button>
          </div>
        </ul>
      </div>
      </div>
    </>
  )
}