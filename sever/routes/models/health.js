// models/health.js
const mongoose = require('../database');

const healthSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    heartRate: Number,
    bloodPressure: String,
    lastUpdated: { type: Date, default: Date.now }
});

const Health = mongoose.model('Health', healthSchema);
module.exports = Health;
