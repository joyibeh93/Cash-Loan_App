import React from 'react'
import NotificationContent from '../Components/NotificationContent';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';


const Notification = () => {
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
            <NotificationContent/>
            </div>
          </div>
        </div>
      );
}

export default Notification