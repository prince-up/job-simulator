import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaBullseye, FaChartBar, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import './HomePage.css';

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="home-page">
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <TypeAnimation
              sequence={['Find Your', 500, 'Find Your Perfect', 500, 'Find Your Perfect Job Role', 500]}
              wrapper="span"
              speed={60}
              repeat={0}
            />
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Take a quick skills assessment and discover job opportunities tailored to your abilities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <Link to="/register" className="cta-button">
              Get Started <FaArrowRight style={{ marginLeft: '8px' }} />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="features"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="feature-card" variants={itemVariants}>
          <motion.div 
            className="feature-icon"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaBullseye />
          </motion.div>
          <h3>Smart Matching</h3>
          <p>Our algorithm matches your skills with the best job roles</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <motion.div 
            className="feature-icon"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaChartBar />
          </motion.div>
          <h3>Skills Assessment</h3>
          <p>Take a comprehensive quiz to evaluate your technical abilities</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <motion.div 
            className="feature-icon"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FaBriefcase />
          </motion.div>
          <h3>Job Opportunities</h3>
          <p>Browse curated job listings matching your profile</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
