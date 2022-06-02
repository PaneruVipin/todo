export const TODO_ADDED ='TODO_ADDED'
export const TODO_STATUS_CHANGE ='TODO_STATUS_CHANGE'
export const TODO_DELETED ='TODO_DELETED'

let nextId=3

export const todoStatusChangeActionCreator=(id:number, done:boolean)=>{
    return { type:TODO_STATUS_CHANGE, payload:{id, done}}
}
export const todoAddedActionCreator=(title:string, id=++nextId, done=false)=>{
    return { type:TODO_ADDED, payload:{title, id, done}}
}
export const todoDeletedActionCreator=(id:number)=>{
    return { type:TODO_DELETED, payload:id}
}