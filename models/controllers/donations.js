const Donation = require('../models/Donation');

// Create Donation
exports.createDonation = async (req, res) => {
  const { foodItem, quantity, expiryDate, location, instructions } = req.body;
  try {
    const donation = new Donation({
      foodItem,
      quantity,
      expiryDate,
      location,
      instructions,
      donor: req.userId,
    });
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Donations
exports.getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate('donor', 'fullName email');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
