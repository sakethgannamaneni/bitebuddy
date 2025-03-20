const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  preferredTime: { type: Date, required: true },
  location: { type: String, required: true },
  instructions: { type: String },
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
});

module.exports = mongoose.model('Request', requestSchema);
