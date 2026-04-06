import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          💼 Job Simulator
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/jobs" className="nav-link">Jobs</Link>
        </div>
      </div>
    </nav>
  );
}
