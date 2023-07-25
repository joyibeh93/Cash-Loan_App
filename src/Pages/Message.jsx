import React,{useState, useEffect} from 'react'
import MessageContent from '../Components/MessageContent'
import '../Styles/Dashboard.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import '../Styles/MessageContent.css'
import messagesData from '../Components/MessageData';


function Message() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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
          <Navbar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <div className="content-container">
        <MessageContent data={filteredData} />
        </div>
      </div>
    </div>
  )
}

export default Message