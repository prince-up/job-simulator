import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.div
          className="footer-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants}>CareerFlow</motion.h3>
          <motion.p variants={itemVariants}>
            Your journey to the perfect job starts here. Discover roles that match your skills.
          </motion.p>
          <motion.div className="social-links" variants={itemVariants}>
            <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h4 variants={itemVariants}>Quick Links</motion.h4>
          <motion.ul variants={itemVariants}>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Browse Jobs</a></li>
            <li><a href="/register">Get Started</a></li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="footer-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h4 variants={itemVariants}>Support</motion.h4>
          <motion.ul variants={itemVariants}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>
          © {currentYear} CareerFlow. Made with <FaHeart style={{ display: 'inline', color: '#e74c3c', margin: '0 4px' }} /> by Prince Yadav
        </p>
      </motion.div>
    </motion.footer>
  );
}
