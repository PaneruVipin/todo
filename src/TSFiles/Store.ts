
import { applyMiddleware, createStore, Reducer } from "redux";
import { rootSaga, sagaMiddleware } from "../Sagas";
import { initialTodoState, TodoReducer, TodoState } from "./States/todos";
import { initialUserState, UserReducer, UserState } from "./States/users";
import { storeData, useStoreData } from "./Storage";
 
export type State={
    todos:TodoState
    users:UserState
}
const useTodo = useStoreData('todos')
const initialState:State= {
  todos:useStoreData('todos') || initialTodoState ,
  users:initialUserState
}

export const reducer: Reducer<State> = (state=initialState, action) => {
 return {
   todos:TodoReducer(state.todos, action),
   users:UserReducer(state.users, action)
  }
}

export const store=createStore(
  reducer,
  applyMiddleware(
    sagaMiddleware
  )
  )
  sagaMiddleware.run(rootSaga)

