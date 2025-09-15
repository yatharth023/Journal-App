const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Create a new entry
router.post('/', authenticateToken, async (req, res) => {
    const { title, content, mood } = req.body;
    try {
        const newEntry = new Entry({
            title,
            content,
            mood,
            userId: req.user.id
        });
        const entry = await newEntry.save();
        res.status(201).json(entry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all entries for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
    try {
        const entries = await Entry.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(entries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get a specific entry by ID
router.get('/:id', authenticateToken, async (req, res) => {
    try {
        const entry = await Entry.findById(req.params.id);
        if (!entry || entry.userId.toString() !== req.user.id) {
            return res.status(404).json({ msg: 'Entry not found' });
        } 
        res.json(entry);   
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Entry not found' });
        }
        res.status(500).send('Server error');
    }
});

// Update an entry by ID
router.patch('/:id', authenticateToken, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ msg: 'Entry not found' });
    if (entry.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    const { title, content, mood } = req.body;
    if (title !== undefined) entry.title = title;
    if (content !== undefined) entry.content = content;
    if (mood !== undefined) entry.mood = mood;
    await entry.save();
    res.json(entry);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete an entry
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry) return res.status(404).json({ msg: 'Entry not found' });
    if (entry.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await Entry.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;