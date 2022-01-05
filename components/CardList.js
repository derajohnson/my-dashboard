import React from 'react'
import Card from './Card'
import styles from "../styles/Dashboard.module.css"
const CardList = () => {
    return (
        
            <div className={styles.cardlist}>
               <Card />
               <Card/>
               <Card/>
               <Card/>
               </div>
             
        
    )
}

export default CardList
