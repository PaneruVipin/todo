import React, { FC } from 'react';
import Button from './Button';
import Input from './Input';

type CreateToDoProps={
onSave:(inputValue:string) => void,
changeToDoForm:() => void,
}

const CreateToDo:FC<CreateToDoProps> = ({onSave,changeToDoForm}) => {
   const [inputValue, updateInputValue]=React.useState('');
  const inputChange= (event:any) => {
    updateInputValue(event.target.value);
   }
  const saveToDo=()=>{
    if(!inputValue){
      return;
    }
    onSave(inputValue);
    updateInputValue('');
  }
  return(
<div className='p-4 rounded-lg shadow-md border border-gray-300 space-y-3 '>
     <div className='font-bold text-xl'>Create a todo</div>
       <Input value={inputValue} onChange={inputChange}  placeholder=' Write an article about XState ' className='border border-gray-300 block w-full shadow-md rounded-md py-1 font-bold text-black pl-3'/>
       <div className='flex space-x-3'>
       <Button  onClick={saveToDo}>Save</Button>
        <Button onClick={changeToDoForm} theme='secondry' >Cancel</Button>
       </div>
     </div>
    );
}
export default CreateToDo;