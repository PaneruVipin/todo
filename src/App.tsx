import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { todoList } from './modeles/ToDoListType'
import { completeTodoSelector, incompleteTodoSelector } from './TSFiles/Selector'
import { CompletedTodoList, IncompletedTodoList } from './ToDo/TodoList'

const App:FC = () => {
const todos:todoList[]=[
  
]
  return (
  <div className='gap-x-4'>
    <h3>ting to do </h3>
    <IncompletedTodoList/>
    <h3>tings done</h3>
    <CompletedTodoList/>
  </div>
  )
}

export default App
