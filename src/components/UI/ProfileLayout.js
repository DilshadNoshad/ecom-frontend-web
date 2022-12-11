import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../profile/Sidebar'
import classes from "./ProfileLayout.module.css"
const ProfileLayout = () => {
  return (
   
  <div className={classes["dahb-main"]}>
    <Sidebar/>
    <div className={classes["muradi-dahb-right"]}>
      <Outlet />
    </div>
  </div>


  )
}

export default ProfileLayout