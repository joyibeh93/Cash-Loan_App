import React from 'react';
import '../Styles/Dashboard.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MainDashboard from '../Components/MainDashboard';
import DashBoardDown from '../Components/Dashboard1_down';

const Dashboard = () => {
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
          <MainDashboard />
          <DashBoardDown />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
