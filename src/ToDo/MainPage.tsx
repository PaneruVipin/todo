import {ChangeEvent, ChangeEventHandler, EventHandler, FC, useState} from 'react'
import { connect } from 'react-redux';
import H1 from '../Headings/H1';
import H3 from '../Headings/H3';
import { todoAddedActionCreator } from '../TSFiles/Actions/todos';
import AddTodoPopUp from './AddTodoPopUp';
import Button from './Button';
import TodoHeader from './TodoHeader';
import { CompletedTodoList, IncompletedTodoList } from './TodoList';

type MainPageProps={
    onSaveClick:(title:string)=>void
}

const MainPage:FC<MainPageProps> = ({onSaveClick}) =>{

    const [toggleAction,setToggleAction] = useState(false)
    const [inputValue, setInputValue]= useState('')
    const showPopUp=()=>{
        handelCancelClick()
    }
    const handelCancelClick=()=>{
        setToggleAction(!toggleAction)
        setInputValue('')
    }
    const handleSaveClick=()=>{
        if(!inputValue){
            return
        }else{
        onSaveClick(inputValue)
        setInputValue('')
        }
    }
    const HandleChange=(event:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value)
    }
    return(
        <div className='bg-white'>
           <TodoHeader/>
            <div className='pl-6 pr-10 pt-4 space-y-3'>
                <H1>Things to get done</H1>
               <H3>Thing to do</H3>
                <IncompletedTodoList/>
                {
                !toggleAction && <Button onClick={showPopUp} >+ Add ToDo</Button>
                }
                {
                   toggleAction && <AddTodoPopUp onChange={HandleChange} inputValue={inputValue} saveClick={handleSaveClick} cancelClick={handelCancelClick}/>
                }
              <H3>Thing done</H3>
                <CompletedTodoList/>
            </div>
        </div>
    )
}

export default MainPage;

const dispatchMapper={
    onSaveClick:todoAddedActionCreator
}

export const ReduxMainPage= connect(undefined,dispatchMapper)(MainPage)