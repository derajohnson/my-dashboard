import React from 'react'
import styles from "../styles/Dashboard.module.css"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';

const Header = ({user}) => {
    // Avatar
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {

        return {
          sx: {
            bgcolor: stringToColor(name),
            width: 40,
            height: 40
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[0][name.length - 1]}`.toUpperCase(),
        };
      }
      
    return (
        <header>
            <div className={styles.container,styles.flexrow}>
              <div>
                 <h1>Dashboard</h1>
                 <p>Hi {user.name}, welcome back!</p>
              </div>
              <div className={styles.flexrow, styles.space}>
            
                 <div className={styles.formcontrol}>
                     <SearchIcon/>
                     <input type="text"  placeholder='Search Here'/>
                     </div>  
                  <NotificationsOutlinedIcon/>
                  <Divider orientation="vertical" variant="middle" flexItem />
                 <Avatar {...stringAvatar("derajohnson")}/>

              </div>
            </div>
        </header>
    )
}

export default Header
