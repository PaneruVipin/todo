import React, { FC } from 'react';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import Input from './Input';
import cn from 'classnames'

type ThingsRowProps = {
  id:number
   name:string,
   done:boolean,
   onCheck?:()=>void,
   onDelete?:()=>void,
} 
const TodoRow:FC<ThingsRowProps> = ({id,done,name,onDelete,onCheck}) => { 

return (
    <div className='space-x-2 flex items-center'>
   <Input id={'hello'+id} type='checkbox' checked={done} onChange={onCheck} />
     <div className={cn('', {'line-through':done})}>{name}</div>
      <RiDeleteBin6Fill onClick={onDelete}/>
    </div>
  );
}
export default TodoRow;