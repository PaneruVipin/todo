import {FC, memo} from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'
import { TodosPath, UsersPath } from './PathConst'
import { ReduxTodoPage } from './ToDo/TodoPage'
import { UserListRedux } from './User/UserList'

type PathProps={}

const Path:FC<PathProps> = () =>{
    return(
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<ReduxTodoPage/>}/>
                <Route path={UsersPath} element={<UserListRedux/>}/>
                <Route path={TodosPath} element={<ReduxTodoPage/>}/>
            </Route>
        </Routes>
    )
}

Path.defaultProps = {}

export default memo(Path);