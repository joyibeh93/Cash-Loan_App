import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import AnalyticsContent from '../Components/AnalyticsContent';


function Analytics() {
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
        <AnalyticsContent/>
      </div>
    </div>
  </div>
  )
}

export default Analytics