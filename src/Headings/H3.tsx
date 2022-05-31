import {FC, HtmlHTMLAttributes} from 'react'

type H3Props=HtmlHTMLAttributes<HTMLHeadingElement>

const H3:FC<H3Props> = ({children}) =>{
    return(
        <h3 className='text-md font-bold'>{children}</h3>
    )
}

export default H3;