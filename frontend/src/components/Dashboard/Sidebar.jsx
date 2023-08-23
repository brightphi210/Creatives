
import React from 'react'
import dashLogo from './images/Creve.png'
import './CSS/sidebar.css'

import { Link } from 'react-router-dom'
import DashHome from '../../pages/DashHome'

const Sidebar = () => {
  return (
    <div>
      <section >
        <div className='sideSection'>
          <div className='sideImageDiv'>
            <Link to={'/'}><img src={dashLogo} alt="" /></Link>
          </div>
          {/* <hr /> */}
          <p>Home</p>
          <ul className='ulIcons'>
            <Link to={'/' + 'dashboard'}><li><i class="uil uil-estate"></i></li></Link>
            {/* <li><i class="uil uil-estate"></i></li> */}
          </ul>

          <p>Main</p>
          <ul className='ulIcons'>
            <Link to={'/' + 'dashboard/create'}><li><i class="uil uil-create-dashboard"></i></li></Link>
            <Link><li><i class="uil uil-archive"></i></li></Link>
            <Link><li><i class="uil uil-heart"></i></li></Link>
            <Link><li><i class="uil uil-eye"></i></li></Link>
            <Link><li><i class="uil uil-comment-alt-lines"></i></li></Link>
          </ul>

          <p>Account</p>
          <ul className='ulIcons'>
            <Link><li><i class="uil uil-user-check"></i></li></Link>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Sidebar
