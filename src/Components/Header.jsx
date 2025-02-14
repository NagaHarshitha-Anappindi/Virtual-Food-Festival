import React, { useState } from 'react';
import './header.css'; // Make sure you import the CSS file

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="main-header-container">
      <header className="main-header">
        <div className="logo">TasteQuest</div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Events</a>
          <div className="dropdown">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="nav-link" 
              aria-haspopup="true" 
              aria-expanded={dropdownOpen}
            >
              Flavor your profile
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Participant</a>
                <a href="#" className="dropdown-item">Organizer</a>
                <a href="#" className="dropdown-item">Volunteer</a>
              </div>
            )}
          </div>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
