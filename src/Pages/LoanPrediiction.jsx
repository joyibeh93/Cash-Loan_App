import React from "react";
import DataVisualization from "../Components/DataVisualisation";
import Sidebar from "../Components/Sidebar";
import { useLocation } from "react-router-dom";


import Navbar
 from "../Components/Navbar";
const LoanPrediiction = () => {
  const location = useLocation();
  const firstName = location?.state?.firstName || 'Gbenga';
  const lastName = location?.state?.lastName || 'Stutern';
  const searchParams = new URLSearchParams(location.search);
  const encodedData = searchParams.get("data");
  const userInputData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : null;

  return (
    <div className="dashboard-container">
      <div className="left-sidebar">
        <Sidebar />
      </div>
      <div className="main-dashboard">
        <div className="top-bar">
          <Navbar
           firstName={firstName}
           lastName={lastName} />
        </div>
        <div className="content-container">
            <DataVisualization data={userInputData}/>
        </div>
      </div>
    </div>
  );
};

export default LoanPrediiction;
