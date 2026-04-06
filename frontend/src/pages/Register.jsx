import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration:', formData);
    navigate('/role-selection');
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="register-page">
      <motion.div 
        className="register-form"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Create Your Account
        </motion.h2>
        
        <form onSubmit={handleSubmit}>
          <motion.div
            className="form-group"
            custom={0}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="input-icon"><FaUser /></span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            custom={1}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="input-icon"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            custom={2}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="input-icon"><FaLock /></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            custom={3}
            variants={inputVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="input-icon"><FaLock /></span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="submit-btn"
          >
            Register <FaArrowRight style={{ marginLeft: '8px' }} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
