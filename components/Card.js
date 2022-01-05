import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import styles from '../styles/Dashboard.module.css'

const Card = ({user}) => {
    console.log(user)
    return (
        <div className={styles.cardlist}>
   <div className={styles.card}>
                  <h3>{user.user.public_repos}</h3>
                   <p>Public repos</p>
                   <div className={styles.increment}>
                      <TrendingUpIcon />
                       <p>+22</p>
                    </div>
                </div>

                <div className={styles.card}>
                  <h3>{user.user.public_gists}</h3>
                   <p>Public gists</p>
                   <div className={styles.increment}>
                      <TrendingUpIcon />
                       <p>+22</p>
                    </div>
                </div>

                <div className={styles.card}>
                  <h3>{user.user.followers}</h3>
                   <p>Followers</p>
                   <div className={styles.increment}>
                      <TrendingUpIcon />
                       <p>+22</p>
                    </div>
                </div>

                <div className={styles.card}>
                  <h3>{user.user.following}</h3>
                   <p>Following</p>
                   <div className={styles.increment}>
                      <TrendingUpIcon />
                       <p>+22</p>
                    </div>
                </div>

        </div>
     
    )
}

export default Card
