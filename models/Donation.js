const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  location: { type: String, required: true },
  instructions: { type: String },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'collected'], default: 'pending' },
});

module.exports = mongoose.model('Donation', donationSchema);
