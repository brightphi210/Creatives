
import React from 'react'
import './CSS/topbar.css'
import AuthContext, { useAuth } from '../../utils/AuthContext';
import { useEffect, useState, useContext } from 'react';

import userImage from './images/user.png'
const TopBar = () => {
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div>
      <section className='topBarSection'>
        
        <div className='inputSection'>
          <i class="uil uil-bars"></i>


          <form action="" className='form'>
            <i class="uil uil-search mysearchIcon"></i>
            <input type="text" placeholder='search something . . .' />
          </form>
        </div>

        <div className='proSection'>
        <button className='login' onClick={logoutUser}><i class="uil uil-arrow-down-left"></i> Logout</button>
          <img src={userImage} alt="" />
          <i class="uil uil-bell"></i>
        </div>

      </section>
    </div>
  )
}

export default TopBar