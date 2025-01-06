const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('express-async-errors');

const transactionRoutes = require('./routes/transaction.routes');
const reportRoutes = require('./routes/report.routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.',
  })
);

app.use('/api/transactions', transactionRoutes);
app.use('/api/report', reportRoutes);

app.use(errorMiddleware);

module.exports = app;
