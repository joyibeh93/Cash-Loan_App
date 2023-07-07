import React from 'react';
import PredictionInfo from '../Components/PredictionInfo';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const PredictionInfoPage = () => {
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
        <PredictionInfo />
      </div>
    </div>
  );
};

export default PredictionInfoPage;
