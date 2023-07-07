import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MsgInfo from '../Components/MsgInfo';

const MsgInfoPage = () => {
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
        <MsgInfo />
      </div>
    </div>
  );
};

export default MsgInfoPage;