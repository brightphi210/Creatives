
import React from 'react'
import TopBar from '../components/Dashboard/TopBar'
import Sidebar from '../components/Dashboard/Sidebar'
import DashHomePart from '../components/Dashboard/DashHomePart'

const DashHome = () => {
  return (
    <div>
      <Sidebar />
      <TopBar/>
      <DashHomePart />
    </div>
  )
}

export default DashHome
