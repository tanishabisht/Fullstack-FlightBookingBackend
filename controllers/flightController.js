const Flight = require('../models/Flight');
const startOfDay = require('date-fns/startOfDay');
const endOfDay = require('date-fns/endOfDay');

// POST :: /flight ==> create_flight
module.exports.create_flight = async (req, res) => {
  const {
    airlineName,
    flightNumber,
    price,
    fromTime,
    toTime,
    fromDate,
    toDate,
    fromPlace,
    toPlace,
    fromTerminal,
    toTerminal,
  } = req.body;
  const data = {
    airlineName,
    flightNumber,
    price,
    fromTime,
    toTime,
    fromDate,
    toDate,
    fromPlace,
    toPlace,
    fromTerminal,
    toTerminal,
  };
  try {
    const flight = await Flight.create(data);
    res.status(201).json({ success: true, flight });
  } catch (err) {
    res.status(401).json({ success: false, err: err.message });
  }
};

// GET :: /flight ==> get_flights
module.exports.get_flights = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.status(201).json({ success: true, flights });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
};

// GET :: /flight/:id ==> get_flight_by_id
module.exports.get_flight_by_id = async (req, res) => {
  const id = req.params.id;
  try {
    const flight = await Flight.findById(id);
    res.status(201).json({ success: true, flight });
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};

// GET :: /flight/:sdest/:ldest/:sdate?ldate=ldate ==> get_flights_by_dest_date
module.exports.get_flights_by_dest_date = async (req, res) => {
  const sdestParam = req.params.sdest;
  const ldestParam = req.params.ldest;
  const sdateParam = req.params.sdate;

  try {
    const flights = await Flight.find({
      fromDate: {
        $gte: startOfDay(new Date(sdateParam)),
        $lte: endOfDay(new Date(sdateParam)),
      },
      fromPlace: sdestParam,
      toPlace: ldestParam,
    });
    res.status(201).json({ success: true, flights });
  } catch (err) {
    res.status(400).json({ success: false, err: err.message });
  }
};
