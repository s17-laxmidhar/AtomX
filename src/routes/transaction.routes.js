const express = require('express');
const { getTransactions, storeTransaction } = require('../controllers/transaction.controller');
const {validationRequestQueryMiddleware, validationRequestBodyMiddleware} = require('../middlewares/validation.middleware');
const { transactionQuerySchema, transactionSchema } = require('../utils/validation');

const router = express.Router();

router.get('/', validationRequestQueryMiddleware(transactionQuerySchema), getTransactions);
router.post('/', validationRequestBodyMiddleware(transactionSchema), storeTransaction);

module.exports = router;
