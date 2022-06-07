
import { createStore, Reducer } from "redux";
import { initialTodoState, TodoReducer, TodoState } from "./States/todos";
import { storeData, useStoreData } from "./Storage";
 
export type State={
    todos:TodoState
}
const useTodo = useStoreData('todos')
const initialState:State= {
  todos:useStoreData('todos') || initialTodoState 
  
}

export const reducer: Reducer<State> = (state=initialState, action) => {
 return {
   todos:TodoReducer(state.todos, action)
  }
}

export const store=createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )

