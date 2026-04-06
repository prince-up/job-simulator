import { useState, useEffect } from 'react';
import './JobListings.css';

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // TODO: Fetch jobs from backend
    // Placeholder data
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

  return (
    <div className="job-listings-page">
      <h2>Available Jobs</h2>

      <div className="filter-section">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="backend">Backend Developer</option>
          <option value="frontend">Frontend Developer</option>
          <option value="full-stack">Full Stack Developer</option>
          <option value="devops">DevOps Engineer</option>
        </select>
      </div>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="jobs-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="location">📍 {job.location}</p>
                <p className="salary">💰 {job.salary}</p>
                <p className="description">{job.description}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))
          ) : (
            <p>No jobs found for this role.</p>
          )}
        </div>
      )}
    </div>
  );
}
