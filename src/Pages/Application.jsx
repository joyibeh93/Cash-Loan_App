import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import ApplicationContent from '../Components/ApplicationContent';

function Application() {
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
        <ApplicationContent/>
        </div>
      </div>
    </div>
  )
}
// import ApplicationContent from '../Components/ApplicationContent';
// import DashBoard1_Down from '../Components/Dashboard1_down';

export default Application