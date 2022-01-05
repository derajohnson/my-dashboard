import React from 'react'
import Card from './Card'
import styles from "../styles/Dashboard.module.css"
const CardList = (user) => {
    return (
        
            <div>
               <Card user={user}/>
               </div>
             
        
    )
}

export default CardList
