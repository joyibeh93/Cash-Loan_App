import React, { useState } from 'react';
import '../Styles/sidebar.css';
import Logo from './Logo';
import Grid from '../assets/ViewGrid.svg';
import Applications from '../assets/Applications.svg';
import Analytics from '../assets/Analytics.svg';
import Recovery from '../assets/Recovery.svg';
import Message from '../assets/Message.svg';
import Resources from '../assets/Resources.svg';
import Settings from '../assets/Settings.svg';
import HelpCenter from '../assets/Helpcenter.svg';
import { NavLink } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');
  const navigate=useNavigate()

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  
  const handleLogout = () => {
    // Perform logout actions if needed
    
    navigate('/'); // Redirect to the login page
  };


  return (
    <div className="sidebar">
      <div className="sidebar-log">
        <Logo  />
      </div>

      <div className="sidebar-items1">
        <NavLink
          to="/dashboard"
          className={`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('/dashboard')}
        >
          <img src={Grid} alt="Dashboard-icon" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="/application"
          className={`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('/application')}
        >
          <img src={Applications} alt="Application-icon" />
          <p>Applications</p>
        </NavLink>
        <NavLink
          to="/analytics"
          className={`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('/analytics')}
        >
          <img src={Analytics} alt="Dashboard-icon" />
          <p>Analytics</p>
        </NavLink>
        <NavLink
          to="/recovery"
          className= {`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('/recovery')}
        >
          <img src={Recovery} alt="Dashboard-icon" />
          <p>Recovery</p>
        </NavLink>
        <NavLink
          to="/message"
          className={`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('/message')}
        >
          <img src={Message} alt="Dashboard-icon" />
          <p>Messages</p>
        </NavLink>
      </div>
      <div className="sidebar-items2">
        <NavLink
          exact
          to="/application"
          className={`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('')}
        >
          <img src={Resources} alt="Dashboard-icon" />
          <p>Resources</p>
        </NavLink>
        <NavLink
          to="/settings"
          className={`links ${activeLink === '/dashboard' ? 'active' : ''}`}
          activeClassName="active"
          onClick={() => handleLinkClick('/settings')}
        >
          <img src={Settings} alt="Dashboard-icon" />
          <p>Settings</p>
        </NavLink>
        <NavLink to="/resources" className="links">
          <img src={HelpCenter} alt="Dashboard-icon" />
          <p>Help Center</p>
        </NavLink>
        <div className="logout-div">
          <NavLink to="/"  
              className="log-out"
              onClick={handleLogout}
          >
                Log out
          </NavLink>
        </div>
      </div>

     
     

    </div>
  );
};

export default Sidebar;
