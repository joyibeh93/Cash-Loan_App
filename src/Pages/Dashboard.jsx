// import React from 'react';
// import '../Styles/Dashboard.css';
// import Sidebar from '../Components/Sidebar';
// import Navbar from '../Components/Navbar';
// import MainDashboard from '../Components/MainDashboard';
// import DashBoardDown from '../Components/Dashboard1_down';

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="left-sidebar">
//         <Sidebar />
//       </div>
//       <div className="main-dashboard">
//         <div className="top-bar">
//           <Navbar />
//         </div>
//         <div className="content-container">
//           <MainDashboard />
//           <DashBoardDown />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import '../Styles/Dashboard.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MainDashboard from '../Components/MainDashboard';
import DashBoardDown from '../Components/Dashboard1_down';
import data from '../Components/datainfo';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const applyFilterAndSearch = () => {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm) ||
        item.creditScore.toString().includes(searchTerm) ||
        item.status.toLowerCase().includes(searchTerm) ||
        item.amount.toString().includes(searchTerm)
      );

      setFilteredData(filtered);
    };

    applyFilterAndSearch();
  }, [searchTerm]);

  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <div className="content-container">
          <MainDashboard data={filteredData} />
          <DashBoardDown data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

