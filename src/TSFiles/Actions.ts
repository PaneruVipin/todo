export const TODO_ADDED ='TODO_ADDED'
export const TODO_STATUS_CHANGE ='TODO_STATUS_CHANGE'
export const TODO_DELETED ='TODO_DELETED'

export const todoStatusChangeActionCreator=(id:number)=>{
    return { type:TODO_STATUS_CHANGE, payload:id}
}
export const todoAddedActionCreator=(title:string)=>{
    return { type:TODO_ADDED, payload:title}
}
export const todoDeletedActionCreator=(id:number)=>{
    return { type:TODO_DELETED, payload:id}
}