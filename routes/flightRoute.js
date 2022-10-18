const { Router } = require('express');
const flightController = require('../controllers/flightController');

const router = Router();

router.post('/', flightController.create_flight);
router.get('/', flightController.get_flights);
router.get('/:id', flightController.get_flight_by_id);
router.get('/:sdest/:ldest/:sdate', flightController.get_flights_by_dest_date);

module.exports = router;
