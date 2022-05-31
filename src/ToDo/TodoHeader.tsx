import {FC} from 'react'
import H2 from '../Headings/H2';

type TodoHeaderProps={}

const TodoHeader:FC<TodoHeaderProps> = () =>{
    return(
        <div className='pl-6 py-3 border-b-2 border-gray-300'>
       <H2>xTodo</H2>
        </div>
    )
}

export default TodoHeader;