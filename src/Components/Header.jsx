
import './header.css'; // Make sure you import the CSS file
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  

  return (
    <div className="main-header-container">
      <header className="main-header">
        <div className="logo">TasteQuest</div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </nav>

        
      </header>
    </div>
  );
};

export default Header;
