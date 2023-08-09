import React from 'react'
import { useLocation } from 'react-router-dom';
import SettingContent from '../Components/SettingContent';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import "../Styles/settings.css"

const Settings = () => {
  const location = useLocation();
  const firstName = location?.state?.firstName || 'Gbenga';
  const lastName = location?.state?.lastName || 'Stutern';
  return (
    <div>
       <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar 
          firstName={firstName}
          lastName={lastName}/>
        </div>
        <div className="content-container">
      <SettingContent/>
        </div>
      </div>
    </div>  
    
     </div>
  )
}

export default Settings
