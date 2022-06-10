import {FC, memo} from 'react'
import H3 from '../Components/Headings/H3'
import { user } from '../modeles/users'

type UserRowProps={
    user:user
}

const UserRow:FC<UserRowProps> = ({user}) =>{
    const {title, first, last } = user.name
    return(
        <div className='flex bg-indigo-200 rounded-md pl-4 py-1 gap-x-3'>
            <span>#</span>
           <H3>{title} {first} {last}</H3>
        </div>
    )
}

UserRow.defaultProps = {}

export default memo(UserRow);