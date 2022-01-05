import Link from 'next/link'
import asideStyles from '../styles/Dashboard.module.css'

const Aside= () => {
    return (
    <div className={asideStyles.aside}>
        <div className={asideStyles.container, asideStyles.flex}>

          <h1>Hello</h1>
          <nav>
              <ul className={asideStyles.ul}>
              <li><Link href= '/dashboard'><a>Dashboard</a></Link></li>
              <li><Link href= '/dashboard/chats'><a>Chats</a></Link></li>
              <li><Link href = '/blogs'><a>Blogs</a></Link></li>
              <li><Link href = '/blogs'><a>Message</a></Link></li>
              <li><Link href = '/blogs'><a>Users</a></Link></li>
              <li><Link href = '/blogs'><a>Settings</a></Link></li>
              <li><Link href = '/blogs'><a>Log Out</a></Link></li>
              </ul>
          </nav>
          <button>New Post</button>
        </div>
    </div>
    )
}

export default Aside