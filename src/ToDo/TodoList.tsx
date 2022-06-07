import {ChangeEventHandler, FC} from 'react'
import { connect } from 'react-redux'
import { todo } from '../modeles/todos'
import { todoDeletedActionCreator, todoStatusChangeActionCreator, TODO_STATUS_CHANGE } from '../TSFiles/Actions/todos'
import { completeTodoSelector, incompleteTodoSelector } from '../TSFiles/Selectors/todos'
import { State } from '../TSFiles/Store' 
import TodoRow from './TodoRow'

type ThingListProps={
    todo:todo[],
    onStatusChange:(id:number, done:boolean)=>void,
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