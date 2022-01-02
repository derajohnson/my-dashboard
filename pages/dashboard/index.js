import Layout from '../../components/Layout'
const Dashboard = () => {
    return (
<div>
    Hello Bitch
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