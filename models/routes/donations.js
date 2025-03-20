const express = require('express');
const { createDonation, getDonations } = require('../controllers/donations');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createDonation);
router.get('/', auth, getDonations);

module.exports = router;
