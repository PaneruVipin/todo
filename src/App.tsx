import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { todoList } from './modeles/ToDoListType'
import { ReduxMainPage } from './ToDo/MainPage'

const App:FC = () => {
const todos:todoList[]=[
  
]
  return (
    <ReduxMainPage/>
  )
}

export default App
