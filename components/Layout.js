import React from 'react'
import layoutStyles from "../styles/Dashboard.module.css"
import Aside from './Aside'
const Layout = ({children}) => {
    return (
        <div className= {layoutStyles.gridlayout}>
            <Aside />
            <main>
            {children}
            </main>
            
        </div>
    )
}

export default Layout
