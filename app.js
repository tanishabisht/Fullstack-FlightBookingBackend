const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const flightRoutes = require('./routes/flightRoute');
const bookingRoute = require('./routes/bookingRoute');

const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// database connection
const dbURI = process.env.DB_URI;
const PORT = process.env.PORT || 4000;
mongoose
  .connect(dbURI)
  .then(() => {
    console.log(`listening at port ${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

// routes
app.use('/flight', flightRoutes);
app.use('/booking', bookingRoute);
