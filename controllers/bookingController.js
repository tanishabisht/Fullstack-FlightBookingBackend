const Booking = require('../models/Booking');

// POST :: /booking ==> create_booking
module.exports.create_booking = async (req, res) => {
  const { name, number, email, flightId } = req.body;
  const data = { name, number, email, flightId };
  try {
    const booking = await Booking.create(data);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(401).json({ success: false, err: err.message });
  }
};

// GET :: /booking ==> get_bookings
module.exports.get_bookings = async (req, res) => {
  try {
    const bookings = await Booking.find({});
    res.status(201).json({ success: true, bookings });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

// GET :: /booking/:id ==> get_booking_by_id
module.exports.get_booking_by_id = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findById(id);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};
