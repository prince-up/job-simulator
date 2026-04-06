import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDollarSign, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import './JobListings.css';

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const mockJobs = [
      {
        id: 1,
        title: 'Backend Developer',
        company: 'Tech Corp',
        location: 'Remote',
        salary: '$80,000 - $120,000',
        role: 'backend',
        description: 'Build scalable APIs and server applications'
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'Design Studio',
        location: 'San Francisco',
        salary: '$70,000 - $110,000',
        role: 'frontend',
        description: 'Create beautiful and responsive user interfaces'
      },
      {
        id: 3,
        title: 'Full Stack Developer',
        company: 'StartUp Inc',
        location: 'Remote',
        salary: '$90,000 - $130,000',
        role: 'full-stack',
        description: 'Work across the entire technology stack'
      },
      {
        id: 4,
        title: 'DevOps Engineer',
        company: 'Cloud Systems',
        location: 'NYC',
        salary: '$100,000 - $150,000',
        role: 'devops',
        description: 'Manage infrastructure and CI/CD pipelines'
      },
    ];
    setJobs(mockJobs);
    setLoading(false);
  }, []);

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.role === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="job-listings-page">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Available Jobs
      </motion.h2>

      <motion.div 
        className="filter-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="backend">Backend Developer</option>
          <option value="frontend">Frontend Developer</option>
          <option value="full-stack">Full Stack Developer</option>
          <option value="devops">DevOps Engineer</option>
        </select>
      </motion.div>

      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading jobs...
        </motion.p>
      ) : (
        <motion.div 
          className="jobs-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <motion.div 
                key={job.id} 
                className="job-card"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <motion.div
                    className="job-status"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    New
                  </motion.div>
                </div>
                
                <p className="company">{job.company}</p>

                <div className="job-details">
                  <motion.div 
                    className="detail-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <FaMapMarkerAlt /> {job.location}
                  </motion.div>
                  <motion.div 
                    className="detail-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FaDollarSign /> {job.salary}
                  </motion.div>
                </div>

                <p className="description">{job.description}</p>

                <motion.button 
                  className="apply-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Apply Now <FaArrowRight style={{ marginLeft: '8px' }} />
                </motion.button>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No jobs found for this role.
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
}
