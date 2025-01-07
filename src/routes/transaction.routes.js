const express = require('express');
const { getTransactions, storeTransaction } = require('../controllers/transaction.controller');
const {validationRequestQueryMiddleware, validationRequestBodyMiddleware} = require('../middlewares/validation.middleware');
const { authenticate } = require('../middlewares/auth.middleware');
const { transactionQuerySchema, transactionSchema } = require('../utils/validation');

const router = express.Router();

router.get('/', authenticate, validationRequestQueryMiddleware(transactionQuerySchema), getTransactions);
router.post('/', authenticate, validationRequestBodyMiddleware(transactionSchema), storeTransaction);

module.exports = router;
