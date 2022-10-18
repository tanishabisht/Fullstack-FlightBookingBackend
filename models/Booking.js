const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'flight',
  },
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  number: {
    type: String,
    required: [true, 'Please enter your phone number'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
  },
});

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;
