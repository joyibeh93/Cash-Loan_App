import React from 'react';
import Sidebar from '../Components/Sidebar';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import AnalyticsContent from '../Components/AnalyticsContent';


function Analytics() {
  const location = useLocation();
  const firstName = location?.state?.firstName || 'Gbenga';
  const lastName = location?.state?.lastName || 'Stutern';
  return (
    <div className="dashboard-container">
    <div className="left-sidebar">
      <Sidebar />
    </div>
    <div className="main-dashboard">
      <div className="top-bar">
        <Navbar
        firstName={firstName}
        lastName={lastName} />
      </div>
      <div className="content-container">
        <AnalyticsContent/>
      </div>
    </div>
  </div>
  )
}

export default Analytics