import {FC, HtmlHTMLAttributes} from 'react'

type H1Props=HtmlHTMLAttributes<HTMLHeadingElement>

const H1:FC<H1Props> = ({children}) =>{
    return(
        <h1 className='text-2xl font-bold'>{children}</h1>
    )
}

export default H1;