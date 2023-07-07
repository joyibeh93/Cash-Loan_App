import React from 'react';
import ContactInfo from '../Components/ContactInfo';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
const ContactInfoPage = () => {
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
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactInfoPage;
