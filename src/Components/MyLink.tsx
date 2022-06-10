import {FC, LinkHTMLAttributes, memo, useState} from 'react'
import { Link } from 'react-router-dom'

type MyLinkProps={
    to:string
} & LinkHTMLAttributes<HTMLLinkElement>

const MyLink:FC<MyLinkProps> = ({to, children, ...rest}) =>{
  
    return(
       <Link
        className='font-medium text-xl  rounded-md shadow-md hover:bg-gray-700 text-white px-8 py-1' 
        to={to}>{children}</Link>
      
    )
}

MyLink.defaultProps = {}

export default memo(MyLink);