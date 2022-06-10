import { createSelector } from "reselect";
import { State } from "../Store";

export const userStateSelector=(s:State)=>s.users

export const userSelector=createSelector(userStateSelector,(userState)=>
Object.keys(userState)
.map(todoId=>userState[todoId as any]) )
