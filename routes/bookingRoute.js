const { Router } = require('express');
const bookingController = require('../controllers/bookingController');

const router = Router();

router.post('/', bookingController.create_booking);
router.get('/', bookingController.get_bookings);
router.get('/:id', bookingController.get_booking_by_id);

module.exports = router;
