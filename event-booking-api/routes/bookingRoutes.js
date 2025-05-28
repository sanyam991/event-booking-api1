const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware');
const {
  bookEvent,
  getUserBookings,
  cancelBooking,
} = require('../controllers/bookingController');

router.post('/', authenticate, bookEvent);
router.get('/', authenticate, getUserBookings);
router.delete('/:id', authenticate, cancelBooking);

module.exports = router;
