import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import LoanDefault from '../Components/LoanDefault'

const LoanDefaultPage = () => {
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
        <LoanDefault />
      </div>
    </div>
  )
}

export default LoanDefaultPage