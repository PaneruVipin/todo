import React, { ChangeEventHandler, FC } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Input from './Input';
import cn from 'classnames';
import { todoList } from '../modeles/ToDoListType';
 

type ThingsRowProps = {
   todo:todoList,
   onCheck: ((id: number) => void) 
   onDelete: () => void
  } 

const TodoRow:FC<ThingsRowProps> = ({todo, onDelete, onCheck}) => { 
  const { id, title, done } = todo;
  const onStatusChange = ()=>{
    onCheck(id)
  }
return (
    <div className='space-x-2 flex items-center'>
   <Input  type='checkbox' checked={done} onChange={onStatusChange} />
     <div className={cn('', {'line-through':done})}>{title}</div>
      <RiDeleteBin6Fill onClick={onDelete}/>
    </div>
  );
}

export default TodoRow;