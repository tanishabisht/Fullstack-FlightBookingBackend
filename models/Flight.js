const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airlineName: {
    type: String,
    required: [true, 'Please enter airline name'],
  },
  flightNumber: {
    type: String,
    required: [true, 'Please enter flight number'],
  },
  price: {
    type: String,
    required: [true, 'Please enter flight price'],
  },
  fromDate: {
    type: Date,
    required: [true, 'Please enter start date for the flight'],
  },
  toDate: {
    type: Date,
    required: [true, 'Please enter end date for the flight'],
  },
  fromPlace: {
    type: String,
    required: [true, 'Please enter origin for the flight'],
  },
  toPlace: {
    type: String,
    required: [true, 'Please enter destination for the flight'],
  },
  fromTerminal: {
    type: String,
    required: [true, 'Please enter your origin terminal'],
  },
  toTerminal: {
    type: String,
    required: [true, 'Please enter your destination terminal'],
  },
});

const Flight = mongoose.model('flight', flightSchema);

module.exports = Flight;
