import {FC, memo, useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { user } from '../modeles/users'
import { usersFetchedActionCreator } from '../TSFiles/Actions/users'
import { userSelector } from '../TSFiles/Selectors/users'
import { State } from '../TSFiles/Store'
import UserRow from './UserRow'

type UserListProps={
    getUsers:()=>any,
    users:user[]
}

const UserList:FC<UserListProps> = ({users,getUsers}) =>{
    console.log(users)
    useEffect(()=>{
       const data = getUsers()
   console.log(data)
    }, [])
    return(
        <div className='space-y-2'>
           { 
               users.map(u=><UserRow key={u.name.first} user={u}/>)
           }   
  </div>   
    )
}

UserList.defaultProps = {}

export default memo(UserList);

const userStateMapper = (s:State)=>({
    users:userSelector(s)
})

const dispatchMapper={
    getUsers:usersFetchedActionCreator
}

export const UserListRedux= connect(userStateMapper,dispatchMapper)(UserList)
