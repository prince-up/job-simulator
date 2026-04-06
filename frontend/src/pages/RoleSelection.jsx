import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const ROLES = [
  { id: 1, title: 'Backend Developer', description: 'Build server-side applications and APIs', icon: '⚙️' },
  { id: 2, title: 'Frontend Developer', description: 'Create user interfaces and web experiences', icon: '🎨' },
  { id: 3, title: 'Full Stack Developer', description: 'Work across frontend and backend', icon: '🏗️' },
  { id: 4, title: 'DevOps Engineer', description: 'Manage infrastructure and deployment', icon: '☁️' },
  { id: 5, title: 'Data Scientist', description: 'Analyze data and build ML models', icon: '📊' },
  { id: 6, title: 'QA Engineer', description: 'Test and ensure software quality', icon: '🧪' },
];

export default function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = () => {
    if (selectedRole) {
      // TODO: Save role selection
      navigate('/skills-assessment');
    } else {
      alert('Please select a role');
    }
  };

  return (
    <div className="role-selection-page">
      <h2>Select Your Target Role</h2>
      <div className="roles-grid">
        {ROLES.map((role) => (
          <div
            key={role.id}
            className={`role-card ${selectedRole?.id === role.id ? 'selected' : ''}`}
            onClick={() => setSelectedRole(role)}
          >
            <div className="role-icon">{role.icon}</div>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
      <button className="continue-btn" onClick={handleContinue}>
        Continue to Skills Assessment
      </button>
    </div>
  );
}
