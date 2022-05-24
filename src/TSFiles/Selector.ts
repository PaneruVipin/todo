import { State } from "./Store";

export const completeTodoSelector =(s:State) =>s.todos.filter(t => t.done)
export const incompleteTodoSelector =(s:State) =>s.todos.filter(t => !t.done)