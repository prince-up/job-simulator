import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Find Your Perfect Job Role</h1>
        <p>Take a quick skills assessment and discover job opportunities tailored to your abilities.</p>
        <Link to="/register" className="cta-button">
          Get Started
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🎯 Smart Matching</h3>
          <p>Our algorithm matches your skills with the best job roles</p>
        </div>
        <div className="feature-card">
          <h3>📊 Skills Assessment</h3>
          <p>Take a comprehensive quiz to evaluate your technical abilities</p>
        </div>
        <div className="feature-card">
          <h3>💼 Job Opportunities</h3>
          <p>Browse curated job listings matching your profile</p>
        </div>
      </div>
    </div>
  );
}
