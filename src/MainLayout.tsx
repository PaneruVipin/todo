import {FC, memo} from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'

type MainLayoutProps={}

const MainLayout:FC<MainLayoutProps> = () =>{
    return(
        <div>
            <AppHeader/>
            <Outlet/>
        </div>
    )
}

MainLayout.defaultProps = {}

export default memo(MainLayout);