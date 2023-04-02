import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          {/* <img src={logo} alt="Logo" className="header-logo-image" /> */}
          <h1 className="header-logo-title">e-Lect</h1>
        </div>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link">
                Home
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/about" className="header-nav-link">
                About Us
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link">
                Results
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link">
                User Dashboard
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link">
                Admin Dashboard
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/howitworks" className="header-nav-link">
                How it works
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/features" className="header-nav-link">
                features
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/login" className="header-nav-link">
                Login
              </Link>
            </li>
            <li className="header-nav-item">
              <Link to="/signup" className="header-nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
