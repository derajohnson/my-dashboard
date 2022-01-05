import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingUp';
import styles from '../styles/Dashboard.module.css'
const Card = () => {
    return (
        <div className={styles.card}>
                  <h3>2,222,232</h3>
                   <p>Total View</p>
                   <div className={styles.increment}>
                      <TrendingUpIcon />
                       <p>+22</p>
                    </div>
                </div>
    )
}

export default Card
