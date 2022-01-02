import Layout from '../../components/Layout'
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState([])
  const router = useRouter ();
  const {username} = router.query;
  console.log (router.query.username);
  useEffect(() => {
      async() =>{
    const res = await fetch(`https://api.github.com/users/${username}`)
    const user = res.json()
    .then((result) => setUser(result))
    .catch(error => console.log(error))
      }
  }, [username])

  console.log(user)
  return (
    <div>
      hello {user.name}
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