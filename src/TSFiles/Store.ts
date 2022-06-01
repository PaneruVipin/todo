
import { createStore, Reducer } from "redux";
import { todoList } from "../modeles/ToDoListType";
import { TODO_ADDED, TODO_DELETED, TODO_STATUS_CHANGE } from "./Actions";
import { storeData, useStoreData } from "./Storage";
 
export type State={
    todos:todoList[]
}
const useTodo = useStoreData('todos')
const initialState:State= useTodo || {
  todos: [
    {title:'example things todo', id:'example things todo', done:false},
    {title:'example things done', id:'example things done', done:true}
  ]
}
const storeTodo=(data:State)=>{
  return storeData('todos', data)
}
export const reducer: Reducer<State> = (state=initialState,action) => {
   switch(action.type){
     
     case  TODO_STATUS_CHANGE:{
         const newTodos=state.todos.map(t=>
           {
             if(t.id===action.payload){
                 return{...t, done:!t.done}
             }
             return t;
           } 
            )
            const todos={...state, todos:newTodos}
            storeTodo(todos)
            return todos
     }
     case TODO_ADDED:{
       const newTodo:todoList=action.payload
       const todo:todoList={id:newTodo.id, title:newTodo.title, done:newTodo.done}
       const todos={...state, todos:[...state.todos,todo ]}
       storeTodo(todos)
       return todos
     }
     case TODO_DELETED:{
       const newTodos=state.todos.filter(t=>t.id!==action.payload)
       const todos={...state, todos:newTodos}
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