import {FC, LabelHTMLAttributes} from 'react'

type LabelProps=LabelHTMLAttributes<HTMLLabelElement>

const Label:FC<LabelProps> = ({children, ...rest}) =>{
    return(
       <label {...rest} className='text-lg font-bold'>{children}</label>
    )
}

export default Label;