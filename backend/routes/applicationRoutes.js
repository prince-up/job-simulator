import express from 'express';

const router = express.Router();

const applications = [];

// POST /api/applications
router.post('/', (req, res) => {
  try {
    const { userId, jobId, coverLetter } = req.body;
    const application = {
      id: applications.length + 1,
      userId,
      jobId,
      coverLetter,
      status: 'pending',
      createdAt: new Date()
    };
    applications.push(application);
    res.status(201).json({
      message: 'Application submitted successfully',
      application
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/applications
router.get('/', (req, res) => {
  try {
    // TODO: Filter by current user
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/applications/:id
router.get('/:id', (req, res) => {
  try {
    const application = applications.find(app => app.id === parseInt(req.params.id));
    if (!application) return res.status(404).json({ error: 'Application not found' });
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
