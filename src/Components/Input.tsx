import {ChangeEventHandler, FC, InputHTMLAttributes} from 'react'
import cn from 'classnames'
type InputProps={

} & InputHTMLAttributes<HTMLInputElement>

const Input:FC<InputProps> = ({type, ...rest}) =>{
    return(
        <input
        {...rest}
        type={'text' && type}
        className={cn('border border-gray-300 block  shadow-md rounded-md py-1 font-bold text-black pl-3 outline-none', 
        {'focus:ring focus:ring-yellow-400 w-full ring-offset-2 border-indigo-300':type!='checkbox'})} />
    )
}

export default Input;