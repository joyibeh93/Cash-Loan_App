import React from 'react'
import MessageContent from '../Components/MessageContent'
import '../Styles/Dashboard.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../Styles/MessageContent.css'


function Message() {
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
        <MessageContent/>
        </div>
      </div>
    </div>
  )
}

export default Message