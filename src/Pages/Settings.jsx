import React from 'react'
import SettingContent from '../Components/SettingContent';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import "../Styles/settings.css"

const Settings = () => {
  return (
    <div>
       <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar />
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
