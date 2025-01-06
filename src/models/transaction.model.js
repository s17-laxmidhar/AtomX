const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['credit', 'debit'], required: true },
  invoice: { type: String, required: true },
  timestamp: { type: Number, required: true },
  status: { type: String, required: true },
  mobile: { type: String, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
