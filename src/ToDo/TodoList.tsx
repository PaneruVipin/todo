import {FC} from 'react'
import { connect, useDispatch } from 'react-redux'
import { todoList } from '../modeles/ToDoListType'
import { TODO_STATUS_CHANGE } from '../TSFiles/ActionConst'
import { completeTodoSelector, incompleteTodoSelector } from '../TSFiles/Selector'
import { State } from '../TSFiles/Store'
import TodoRow from './TodoRow'

type ThingListProps={
    todo:todoList[]
}

const TodoList:FC<ThingListProps> = ({todo}) =>{
    const dispatch=useDispatch()
    const onCheck=()=>{
       dispatch({type:TODO_STATUS_CHANGE});
    }
    return(
        <div>
            {
               todo.map((e)=><TodoRow id={e.id} name={e.title} key={e.id} done={e.done} onCheck={onCheck}/>) 
            }
        </div>
    )
}

export default TodoList;

const incompleteMapper= (s:State) => {
    return { todo: incompleteTodoSelector(s)}
}

const completeMapper= (s:State) => {
    return { todo: completeTodoSelector(s)}
}

export const IncompletedTodoList=connect(incompleteMapper)(TodoList)
export const CompletedTodoList=connect(completeMapper)(TodoList)