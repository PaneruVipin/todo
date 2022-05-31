import { useState } from "react";
import { createStore, Reducer } from "redux";
import { todoList } from "../modeles/ToDoListType";
import { TODO_ADDED, TODO_DELETED, TODO_STATUS_CHANGE } from "./Actions";
 
export type State={
    todos:todoList[]
}
const initialState:State={
    todos:[]
}
let nextId=1
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
         
            return{...state, todos:newTodos}
     }
     case TODO_ADDED:{
       const todo:todoList={id:nextId, title:action.payload, done:false}
       nextId++
       return {...state, todos:[...state.todos,todo ]}
     }
     case TODO_DELETED:{
       const newTodos=state.todos.filter(t=>t.id!==action.payload)
       return {...state, todos:newTodos}
     }
     default:{
         return state;
     }
   }
    
}

export const store=createStore(reducer)