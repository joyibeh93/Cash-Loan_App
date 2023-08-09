import React,{useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import MessageContent from '../Components/MessageContent'
import '../Styles/Dashboard.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../Styles/MessageContent.css'
import messagesData from '../Components/MessageData';


function Message() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const location = useLocation();
  const firstName = location?.state?.firstName || 'Gbenga';
  const lastName = location?.state?.lastName || 'Stutern';

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const applyFilterAndSearch = () => {
      const filtered = messagesData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      
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
          <Navbar 
          searchTerm={searchTerm} 
          onSearchChange={handleSearchChange} 
          firstName={firstName}
          lastName={lastName}/>
        </div>
        <div className="content-container">
        <MessageContent data={filteredData} />
        </div>
      </div>
    </div>
  )
}

export default Message