const Flight = require('../models/Flight');
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');

// POST :: /flight ==> create_flight
module.exports.create_flight = async (req, res) => {};

// GET :: /flight ==> get_flights
module.exports.get_flights = async (req, res) => {};

// GET :: /flight/:id ==> get_flight_by_id
module.exports.get_flight_by_id = async (req, res) => {};

// GET :: /flight/:sdest/:ldest/:sdate?ldate=ldate ==> get_flights_by_dest_date
module.exports.get_flights_by_dest_date = async (req, res) => {};
