import {ChangeEvent, FC} from 'react'
import H2 from '../Components/Headings/H2';
import Button from '../Components/Button';
import Form from '../Components/Form';
import Input from '../Components/Input';
import Label from '../Components/Label';

type AddTodoPopUpProps={
    saveClick:()=>void,
    cancelClick:()=>void,
    inputValue:string,
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

const AddTodoPopUp:FC<AddTodoPopUpProps> = ({cancelClick,saveClick, inputValue,onChange}) =>{
    return(
             <Form submit={saveClick} className='border border-gray-200 rounded-md shadow-md space-y-4 pl-6 py-4'>
            <Label htmlFor='todo_Input'>Create a todo</Label>
            <div className='w-2/5'>
            <Input id='todo_Input' value={inputValue} onChange={onChange}/>
            </div>
            <div className='flex gap-x-4 '>
            <Button type='submit'>Save</Button>
            <Button type='button' onClick={cancelClick} theme='secondry'>Cancel</Button>
            </div>
            </Form>
    )
}

export default AddTodoPopUp;