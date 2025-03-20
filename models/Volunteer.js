const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  availability: { type: String, enum: ['weekdays', 'weekends', 'both'], required: true },
  location: { type: String, required: true },
  comments: { type: String },
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
