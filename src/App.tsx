import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { todoList } from './modeles/ToDoListType'
import { completeTodoSelector, incompleteTodoSelector } from './TSFiles/Selector'
import TodoList from './ToDo/TodoList'

const App:FC = () => {
const todos:todoList[]=[
  
]
const incompletedTodo= useSelector(incompleteTodoSelector)
const completedTodo=useSelector(completeTodoSelector)
//console.log('incompletedTodo', incompletedTodo)
//console.log('completedTodo', completedTodo)
  return (
  <div>
 <TodoList todo={incompletedTodo}/>
 <div>hello bhai log</div>
 <TodoList todo={completedTodo}/>
  </div>
  )
}

export default App
