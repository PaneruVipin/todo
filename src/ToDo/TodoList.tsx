import {FC} from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from '../modeles/ToDoListType'
import { TODO_STATUS_CHANGE } from '../TSFiles/ActionConst'
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