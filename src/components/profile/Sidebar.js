import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Store/auth-context';
import classes from './Sidebar.module.css'
import SidebarList from './SidebarList'
const Sidebar = () => {
    const authCtx = useContext(AuthContext);
    
    const loggedInUsername = authCtx.userData?.username;
  return (
    <div className={classes["muradi-dahb-nav"]}>
    <div className={classes["member-info"]}>
      <p>
        <span>Hello,</span> <span>{loggedInUsername}</span>
      </p>
    </div>
   <SidebarList/>
  </div>
  
  )
}

export default Sidebar