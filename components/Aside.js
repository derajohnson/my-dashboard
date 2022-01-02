import Link from 'next/link'
import asideStyles from '../styles/Dashboard.module.css'

const Aside= () => {
    return (
    <div className={asideStyles.aside}>
        <div className={asideStyles.container, asideStyles.flex}>

          <h1>Hello</h1>
          <nav>
              <ul>
              <li>Dashboard</li>
              <li>Chats</li>
              <li>Subscriptions</li>
              </ul>
          </nav>
        </div>
    </div>
    )
}

export default Aside