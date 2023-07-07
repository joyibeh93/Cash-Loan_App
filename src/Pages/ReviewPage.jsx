import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'
import Review from '../Components/Review'
import LineChart from '../Components/LineChart';

const ReviewPage = () => {
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
          <Review />
          <LineChart/>
        </div>
      </div>
    </div>
  )
}

export default ReviewPage