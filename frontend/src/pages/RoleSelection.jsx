import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaServer, FaPalette, FaCode, FaCloud, FaDatabase, FaFlask, FaArrowRight } from 'react-icons/fa';
import './RoleSelection.css';

const ROLES = [
  { id: 1, title: 'Backend Developer', description: 'Build server-side applications and APIs', icon: FaServer },
  { id: 2, title: 'Frontend Developer', description: 'Create user interfaces and web experiences', icon: FaPalette },
  { id: 3, title: 'Full Stack Developer', description: 'Work across frontend and backend', icon: FaCode },
  { id: 4, title: 'DevOps Engineer', description: 'Manage infrastructure and deployment', icon: FaCloud },
  { id: 5, title: 'Data Scientist', description: 'Analyze data and build ML models', icon: FaDatabase },
  { id: 6, title: 'QA Engineer', description: 'Test and ensure software quality', icon: FaFlask },
];

export default function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleContinue = () => {
    if (selectedRole) {
      navigate('/skills-assessment');
    } else {
      alert('Please select a role');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="role-selection-page">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Select Your Target Role
      </motion.h2>

      <motion.div 
        className="roles-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ROLES.map((role) => {
          const IconComponent = role.icon;
          return (
            <motion.div
              key={role.id}
              className={`role-card ${selectedRole?.id === role.id ? 'selected' : ''}`}
              onClick={() => setSelectedRole(role)}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="role-icon-wrapper"
                animate={selectedRole?.id === role.id ? { rotate: 360, scale: 1.2 } : {}}
                transition={{ duration: 0.6 }}
              >
                <IconComponent />
              </motion.div>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              {selectedRole?.id === role.id && (
                <motion.div
                  className="selected-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <motion.button 
        className="continue-btn"
        onClick={handleContinue}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Continue to Skills Assessment <FaArrowRight style={{ marginLeft: '8px' }} />
      </motion.button>
    </div>
  );
}
