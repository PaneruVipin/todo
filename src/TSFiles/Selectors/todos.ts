
import { State } from "../Store";
import {createSelector} from "reselect"

export const todoStateSelector =(s:State)=>s.todos
export const todoListSelector=createSelector(todoStateSelector, (todoState)=>
Object.keys(todoState)
.map(todoId=>todoState[todoId as any])
)
export const completeTodoSelector =createSelector( todoListSelector, (todoList)=>
todoList.filter(t=>t.done)
)

export const incompleteTodoSelector =createSelector(todoListSelector, (todoList)=>
todoList.filter(t=>!t.done)
)
