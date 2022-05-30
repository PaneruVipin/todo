import {ChangeEventHandler, FC, InputHTMLAttributes} from 'react'
import cn from 'classnames'
type InputProps={

} & InputHTMLAttributes<HTMLInputElement>

const Input:FC<InputProps> = ({type, ...rest}) =>{
    return(
        <input
        {...rest}
        type={'text' && type}
        className='border border-gray-300 block  shadow-md rounded-md py-1 font-bold text-black pl-3' />
    )
}

export default Input;