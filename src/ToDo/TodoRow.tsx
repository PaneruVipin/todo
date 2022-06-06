import { ChangeEventHandler, FC } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Input from './Input';
import cn from 'classnames';
import { todo } from '../modeles/todos';
 

type ThingsRowProps = {
   todo:todo,
   onCheck: (id: number, done:boolean) => void,
   onDelete: (id:number) => void
  } 

const TodoRow:FC<ThingsRowProps> = ({todo, onDelete, onCheck}) => { 
  const { id, title, done } = todo;
  const onStatusChange = ()=>{
    onCheck(id, !done)
  }
  const onDeleteClick= () =>{
    onDelete(id)
  }
return (
    <div className='space-x-2 flex items-center'>
   <Input  type='checkbox' checked={done} onChange={onStatusChange} />
     <div className={cn('', {'line-through':done})}>{title}</div>
      <RiDeleteBin6Fill onClick={onDeleteClick}/>
    </div>
  );
}

export default TodoRow;