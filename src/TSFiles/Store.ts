import { useState } from "react";
import { createStore, Reducer } from "redux";
import { todoList } from "../modeles/ToDoListType";
import { TODO_ADDED, TODO_STATUS_CHANGE } from "./ActionConst";
 
export type State={
    todos:todoList[]
}
const initialState:State={
    todos:[{
        id:1,
        title:'hello world',
        done:true
      },
      {
        id:2,
        title:'yellow world',
        done:false
      },
      {
        id:3,
        title:'my world',
        done:true
      }]
}

export const reducer: Reducer<State> = (state=initialState,action) => {
   switch(action.type){
     case  TODO_STATUS_CHANGE:{
         console.log(action)
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
     default:{
         return state;
     }
   }
    
}

export const store=createStore(reducer)