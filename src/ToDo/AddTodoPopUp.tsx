import {ChangeEvent, FC} from 'react'
import H2 from '../Headings/H2';
import Button from './Button';
import Input from './Input';

type AddTodoPopUpProps={
    saveClick:()=>void,
    cancelClick:()=>void,
    inputValue:string,
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

const AddTodoPopUp:FC<AddTodoPopUpProps> = ({cancelClick,saveClick, inputValue,onChange}) =>{
    return(
        <div className='border border-gray-200 rounded-md shadow-md space-y-4 pl-6 py-4'>
            <H2>Create a todo</H2>
            <div className='w-2/5'>
            <Input  value={inputValue} onChange={onChange}/>
            </div>
            <div className='flex gap-x-4 '>
            <Button onClick={saveClick}>Save</Button>
            <Button onClick={cancelClick} theme='secondry'>Cancel</Button>
            </div>
        </div>
    )
}

export default AddTodoPopUp;