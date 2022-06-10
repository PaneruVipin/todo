import {FC, HtmlHTMLAttributes} from 'react'

type H2Props=HtmlHTMLAttributes<HTMLHeadingElement>

const H2:FC<H2Props> = ({children}) =>{
    return(
        <h2 className='text-lg font-bold'>{children}</h2>
    )
}

export default H2;