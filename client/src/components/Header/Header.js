import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css'; // Import global styles
import './Header.css'; // Import component-specific styles

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          QuizzifyPro
        </Link>
        <div className="nav-links">
          <Link to="/quiz-creator" className="nav-link">
            Create Quiz
          </Link>
          <Link to="/survey-creator" className="nav-link">
            Create Survey
          </Link>
          <Link to="/user-profile" className="nav-link">
            User Profile
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </nav>
    </header>
  );
}

export default Header;

