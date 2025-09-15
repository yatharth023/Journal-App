const mongoose = require('mongoose');
require('dotenv').config(); 

const EntrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        enum: ['happy', 'sad', 'neutral', 'excited', 'angry'],
        default: 'neutral'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

module.exports = mongoose.model('Entry', EntrySchema);