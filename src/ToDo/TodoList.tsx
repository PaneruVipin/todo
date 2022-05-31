import {ChangeEventHandler, FC} from 'react'
import { connect } from 'react-redux'
import { todoList } from '../modeles/ToDoListType'
import { todoDeletedActionCreator, todoStatusChangeActionCreator, TODO_STATUS_CHANGE } from '../TSFiles/Actions'
import { completeTodoSelector, incompleteTodoSelector } from '../TSFiles/Selector'
import { State } from '../TSFiles/Store' 
import TodoRow from './TodoRow'

type ThingListProps={
    todo:todoList[],
    onStatusChange:(id:number)=>void,
    onDelete:(id:number)=>void
}
const TodoList:FC<ThingListProps> = ({todo,onStatusChange,onDelete}) =>{
   
    return(
        <div>
            {
               todo.map((e)=><TodoRow todo={e}  key={e.id} onDelete={onDelete} onCheck={onStatusChange}/>) 
            }
        </div>
    )
}
const incompleteMapper= (s:State) => ({ todo: incompleteTodoSelector(s)})
 const completeMapper= (s:State) => ({ todo: completeTodoSelector(s)})
const dispatchMapper = {
    onStatusChange:todoStatusChangeActionCreator,
    onDelete:todoDeletedActionCreator
}

export const IncompletedTodoList=connect(incompleteMapper,dispatchMapper)(TodoList)
export const CompletedTodoList=connect(completeMapper, dispatchMapper)(TodoList)