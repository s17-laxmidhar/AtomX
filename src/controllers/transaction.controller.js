const Transaction = require('../models/transaction.model');

exports.getTransactions = async (req, res) => {
    try {
        const { page = 1, limit = 10, startDate, endDate, type } = req.query;

        const query = {};
        if (startDate || endDate) {
            query.timestamp = {};
            if (startDate) query.timestamp.$gte = Number(startDate);
            if (endDate) query.timestamp.$lte = Number(endDate);
        }
        if (type) query.type = type;

        const transactionsAndDocumentsCount = await Promise.all([Transaction.find(query)
            .skip((page - 1) * limit)
            .limit(Number(limit)), Transaction.countDocuments(query)]);
        const [transactions, total] = transactionsAndDocumentsCount;

        res.status(200).json({ total, page, limit, data: transactions });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.storeTransaction = async (req, res) => {
    try {
        const { type, invoice, timestamp, status, mobile } = req.body;

        const newTransaction = new Transaction({ type, invoice, timestamp, status, mobile });
        await newTransaction.save();

        res.status(201).json({ message: 'Transaction stored successfully', data: newTransaction });
    } catch (error) {
        res.status(500).json({ message: 'Error storing transaction', error: error.message });
    }
};