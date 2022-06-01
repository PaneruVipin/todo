
import {ChangeEvent, FC, FormHTMLAttributes} from 'react'

type FormProps={
    submit:()=>void,
    className:string
} & FormHTMLAttributes<HTMLFormElement>

const Form:FC<FormProps> = ({children,submit,className, ...rest}) =>{
    const handleSubmit= (event:ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
        submit()
    }
    return(
        <form {...rest} className={className} onSubmit={handleSubmit}>{children}</form>
    )
}

export default Form;