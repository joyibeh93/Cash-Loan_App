import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'
import Chart from '../Components/Chart';
import PieChart from '../Components/PieChart';
import PreviousApp from '../Components/PreviousApp';
import UserInfo from '../Components/UserInfo';
import { Link } from 'react-router-dom'
//import { useLocation } from 'react-router-dom';

const ApplicantDetails = () => {

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
        <div className='content-container'>
          <UserInfo/>
        </div>
        <div className='chart dashDown-Table'>
         <PieChart/>
         <Chart/>
         </div>
         <PreviousApp/>
         <Link to="/msginfo">Message</Link>
      </div>
    </div>
  </div>

  )
}

export default ApplicantDetails
