import React, { useState } from 'react';
import '../styles/Sidebar.css';
import logo from '../assets/prism-logo.png'; 
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'} d-flex flex-column align-items-center`}>
      {/* Toggle Button */}
      <button className="btn btn-outline-light toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>

      {/* Logo */}
      {isOpen && <img src={logo} alt="Logo" className="sidebar-logo-large mb-4" />}

      {/* Buttons */}
      {isOpen && (
        <>
          <button className="btn btn-primary mb-3 w-100">Profile</button><br /><br />
          <button className="btn btn-secondary w-100">Interview Agent</button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
