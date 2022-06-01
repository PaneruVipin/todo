
import { State } from "./Store";
export const completeTodoSelector =(s:State) =>Object.keys(s.todos)
.map(todoId=>s.todos[todoId as any])
.filter(t => t.done)

export const incompleteTodoSelector =(s:State) =>Object.keys(s.todos)
.map(todoId=>s.todos[todoId as any])
.filter(t => !t.done)
