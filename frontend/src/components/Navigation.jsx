import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import './Navigation.css';

export default function Navigation() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo-link">
          <Logo />
        </Link>
        <motion.div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/jobs" className="nav-link">Jobs</Link>
          <Link to="/register" className="nav-link nav-register">Register</Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
