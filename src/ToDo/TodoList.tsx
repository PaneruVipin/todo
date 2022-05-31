import {ChangeEventHandler, FC} from 'react'
import { connect } from 'react-redux'
import { todoList } from '../modeles/ToDoListType'
import { statusChangeActionCreator, TODO_STATUS_CHANGE } from '../TSFiles/Actions'
import { completeTodoSelector, incompleteTodoSelector } from '../TSFiles/Selector'
import { State } from '../TSFiles/Store' 
import TodoRow from './TodoRow'

type ThingListProps={
    todo:todoList[],
    onStatusChange:(id:number)=>void
}
const TodoList:FC<ThingListProps> = ({todo,onStatusChange}) =>{
   
    return(
        <div>
            {
               todo.map((e)=><TodoRow todo={e}  key={e.id} onDelete={()=>{}} onCheck={onStatusChange}/>) 
            }
        </div>
    )
}
const incompleteMapper= (s:State) => ({ todo: incompleteTodoSelector(s)})
const completeMapper= (s:State) => ({ todo: completeTodoSelector(s)})
const dispatchMapper = {
    onStatusChange:statusChangeActionCreator
}

export const IncompletedTodoList=connect(incompleteMapper,dispatchMapper)(TodoList)
export const CompletedTodoList=connect(completeMapper, dispatchMapper)(TodoList)