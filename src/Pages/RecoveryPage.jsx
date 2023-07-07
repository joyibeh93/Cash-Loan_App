import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import Recovery from '../Components/Recovery'

const RecoveryPage = () => {
  return (
    <div className="dashboard-container">
    <div className="left-sidebar">
      <Sidebar />
    </div>
    <div className="main-dashboard">
      <div className="top-bar">
        <Navbar />
      </div>
      <div className="content-container"></div>
      <Recovery />
    </div>
  </div>
  )
}

export default RecoveryPage
