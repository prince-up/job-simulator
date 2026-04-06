import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import RoleSelection from './pages/RoleSelection';
import SkillsAssessment from './pages/SkillsAssessment';
import JobListings from './pages/JobListings';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/skills-assessment" element={<SkillsAssessment />} />
        <Route path="/jobs" element={<JobListings />} />
      </Routes>
    </Router>
  );
}
