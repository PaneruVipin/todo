
import { Reducer } from "redux";
import { todo } from "../../modeles/todos";
import { TODO_ADDED, TODO_DELETED, TODO_STATUS_CHANGE } from "../Actions/todos";
import { storeData } from "../Storage";

export type TodoState={
       [id:number]:todo
}

const storeTodo=(data:TodoState)=>{
    return storeData('todos', data)
  }

export const initialTodoState={
  1: {title:'example tings todo', id:1 , done:false},
  2: {title:'example tings done', id:2 , done:true}
}

export const TodoReducer:Reducer<TodoState>=(state=initialTodoState, action)=>{
    switch(action.type){
        case  TODO_STATUS_CHANGE:{
              const {id, done}=action.payload
               const todos={
                   ...state, 
                   [id]:{...state[id],
                     done
                   }
               }
               storeTodo(todos)
               return todos
        }
        case TODO_ADDED:{
          const newTodo:todo=action.payload
          const todo:todo={id:newTodo.id, title:newTodo.title, done:newTodo.done}
          const todos={
            ...state, [newTodo.id]:todo
          }                          
          storeTodo(todos)
          return todos
        }
        case TODO_DELETED:{
            const id = action.payload
           delete state[id]   
           const todos={...state}                                 
          storeTodo(todos)
          return todos
        }
        default:{
            return state;
        }
      }
}

