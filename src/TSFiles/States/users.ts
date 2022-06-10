import { Reducer } from "redux"
import { user } from "../../modeles/users"
import { USERS_FETCHED } from "../Actions/users"
import { storeData } from "../Storage"

export type UserState={
    [id:number]:user
}

const storeUsers=(data:UserState)=>{
 return storeData('todos', data)
}

export const initialUserState:UserState={
    1:{
        name:{first:'suresh', last:'paneru', title:'mr'}
    },
    2:{
        name:{first:'ramesh', last:'paneru', title:'mr'}
    },
    3:{
        name:{first:'ganesh', last:'paneru', title:'mr'}
    },
    4:{
        name:{first:'rajesh', last:'paneru', title:'mr'}
    }
}

export const UserReducer:Reducer<UserState>=(state=initialUserState, action)=>{
        switch(action.type){
            
        default:{
            return state
        }
    }
      }