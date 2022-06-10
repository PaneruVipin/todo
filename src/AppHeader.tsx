import {FC} from 'react'
import MyLink from './Components/MyLink';
import { TodosPath, UsersPath } from './PathConst';

type AppHeaderProps={}

const AppHeader:FC<AppHeaderProps> = () =>{
    return(
        <div className='pr-6 py-2 border-b-2 border-gray-200 bg-gray-500 flex gap-x-4 justify-end'>
            <MyLink to={TodosPath}>ToDos</MyLink>
            <MyLink to={UsersPath}>Users</MyLink>
        </div>
    )
}

export default AppHeader;