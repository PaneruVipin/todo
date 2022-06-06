
import { createStore, Reducer } from "redux";
import { todo } from "../modeles/todos";
import { TODO_ADDED, TODO_DELETED, TODO_STATUS_CHANGE } from "./Actions/todos";
import { storeData, useStoreData } from "./Storage";
 
export type State={
    todos:{
      [id:number]:todo
    }
}
const useTodo = useStoreData('todos')
const initialState:State= useTodo || {
  todos: {
   1: {title:'example tings todo', id:1 , done:false},
   2: {title:'example tings done', id:2 , done:true}
  }
}
const storeTodo=(data:State)=>{
  return storeData('todos', data)
}
export const reducer: Reducer<State> = (state=initialState,action) => {
   switch(action.type){
     
     case  TODO_STATUS_CHANGE:{
           const {id, done}=action.payload
            const todos={
              ...state,
              todos:{
                ...state.todos, 
                [id]:{...state.todos[id],
                  done
                }
              }
            }
            storeTodo(todos)
            return todos
     }
     case TODO_ADDED:{
       const newTodo:todo=action.payload
       const todo:todo={id:newTodo.id, title:newTodo.title, done:newTodo.done}
       const todos={...state, todos:{
         ...state.todos, [newTodo.id]:todo
       }}                          
       storeTodo(todos)
       return todos
     }
     case TODO_DELETED:{
         const id = action.payload
        delete state.todos[id]   
        const todos={...state}                                 
       storeTodo(todos)
       return todos
     }
     default:{
         return state;
     }
   }
    
}

export const store=createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )