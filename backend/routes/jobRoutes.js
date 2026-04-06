import express from 'express';

const router = express.Router();

// Placeholder job data
const jobs = [
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

// GET /api/jobs
router.get('/', (req, res) => {
  try {
    const { role } = req.query;
    if (role) {
      const filteredJobs = jobs.filter(job => job.role === role);
      return res.json(filteredJobs);
    }
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/jobs/recommended
router.get('/recommended', (req, res) => {
  try {
    // TODO: Implement recommendation algorithm based on user profile
    res.json(jobs.slice(0, 2));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/jobs/:id
router.get('/:id', (req, res) => {
  try {
    const job = jobs.find(job => job.id === parseInt(req.params.id));
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
