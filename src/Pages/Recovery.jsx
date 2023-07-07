import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import RecoveryContent from '../Components/RecoveryContent'

function Recovery() {
  return (
    <div className="dashboard-container">
    <div className="left-sidebar">
      <Sidebar />
    </div>
    <div className="main-dashboard">
      <div className="top-bar">
        <Navbar />
      </div>
      <div className="content-container">
        <RecoveryContent/>
      </div>
    </div>
  </div>
  )
}

export default Recovery