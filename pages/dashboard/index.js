import Layout from '../../components/Layout'
import styles from "../../styles/Dashboard.module.css"
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import CardList from '../../components/CardList';


const Dashboard = () => {
  const [user, setUser] = useState({})
  const router = useRouter();
  const {username} = router.query;
  console.log (router.query.username);
  useEffect(() => {
      async() =>{
          try{
            const res = await fetch(`https://api.github.com/users/${username}`)
            const result = res
            
                setUser(result)
                console.log(result)
          }catch(err){
              console.log(err)
          }

      }
  }, [username, router])

  console.log(user)

//avatar




  return (
    <div className={ styles.dashboard}>
        <Header user={user}/>

        <nav className={styles.stats}>
            <div className={styles.container}>
                <CardList/>
            </div>
        </nav>
        <section className={styles.chartsection} >
         <div className={styles.container}>
             
         </div>
            
        </section>
    </div>
  )
}


export default Dashboard

Dashboard.getLayout= function getLayout(page){
return(
 <Layout>
     {page}
 </Layout>
)
}