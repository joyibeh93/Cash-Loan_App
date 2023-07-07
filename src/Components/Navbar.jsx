import React from 'react';
import usericon from '../assets/user-icon.svg';
import searchicon from '../assets/Search.svg';
import rightarrow from '../assets/Right-arrow.svg';
import '../Styles/navbar.css';
import bellIcon from '../assets/Bell-icon.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); 

  const handleBellIconOnClick = () => {
    navigate('/notification');  // Redirect the user to the notifications page
  }

  return (
    <div className="navbar-item">
      <img src={searchicon} alt="searchicon" className="searchicon" />
      <input type="search" placeholder="Search" className="navbar-search" />
      <img src={rightarrow} alt="right-arrow" className="right-arrow" />
      <div className="navbar-item2">
        <img src={bellIcon} className="bell" alt="bell-icon" onClick={handleBellIconOnClick}/>
        <div>
          <img src={usericon} alt="user-icon" className="navbar-userIcon" />
        </div>
        <div className="name-desc">
          <p>Gbenger Stutern</p>
          <p> Loan Analytics</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


/*import React, { useState } from 'react';
import usericon from '../assets/user-icon.svg';
import searchicon from '../assets/Search.svg';
import rightarrow from '../assets/Right-arrow.svg';
import '../Styles/navbar.css';
import bellIcon from '../assets/Bell-icon.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleBellIconOnClick = () => {
    navigate('/notification');  // Redirect the user to the notifications page
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchIconClick = () => {
    // Perform filtering logic using the searchQuery
    console.log(`Perform filtering for: ${searchQuery}`);
  };

  const handleRightArrowClick = () => {
    // Perform filtering logic using the searchQuery
    console.log(`Perform filtering for: ${searchQuery}`);
  };

  return (
    <div className="navbar-item">
      <img
        src={searchicon}
        alt="searchicon"
        className="searchicon"
        onClick={handleSearchIconClick}
      />
      <input
        type="search"
        placeholder="Search"
        className="navbar-search"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <img
        src={rightarrow}
        alt="right-arrow"
        className="right-arrow"
        onClick={handleRightArrowClick}
      />
      <div className="navbar-item2">
        <img src={bellIcon} className="bell" alt="bell-icon" onClick={handleBellIconOnClick} />
        <div>
          <img src={usericon} alt="user-icon" className="navbar-userIcon" />
        </div>
        <div className="name-desc">
          <p>Gbenga Stutern</p>
          <p>Loan Analytics</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;*/

