const express = require('express');
const { downloadReport } = require('../controllers/report.controller');
const {validationRequestQueryMiddleware} = require('../middlewares/validation.middleware');
const { authenticate } = require('../middlewares/auth.middleware');
const { reportQuerySchema } = require('../utils/validation');

const router = express.Router();

router.get('/download', authenticate, validationRequestQueryMiddleware(reportQuerySchema), downloadReport);

module.exports = router;
