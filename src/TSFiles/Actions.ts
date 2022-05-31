export const TODO_ADDED ='TODO_ADDED'
export const TODO_STATUS_CHANGE ='TODO_STATUS_CHANGE'
export const TODO_DELETED ='TODO_DELETED'

export const statusChangeActionCreator=(id:number)=>{
    return { type:TODO_STATUS_CHANGE, payload:id}
}