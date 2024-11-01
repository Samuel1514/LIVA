const express = require('express');
const router = express.Router();
const Health = require('../models/health');

// Get all health records
router.get('/', async (req, res) => {
  try {
    const healthRecords = await Health.find();
    res.json(healthRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific health record
router.get('/:id', async (req, res) => {
  try {
    const healthRecord = await Health.findById(req.params.id);
    if (!healthRecord) return res.status(404).json({ message: 'Record not found' });
    res.json(healthRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new health record
router.post('/', async (req, res) => {
  const { userId, bloodPressure, heartRate } = req.body;
  const newHealthRecord = new Health({ userId, bloodPressure, heartRate });

  try {
    const savedRecord = await newHealthRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a health record
router.put('/:id', async (req, res) => {
  try {
    const updatedRecord = await Health.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.json(updatedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a health record
router.delete('/:id', async (req, res) => {
  try {
    await Health.findByIdAndDelete(req.params.id);
    res.json({ message: 'Record deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
