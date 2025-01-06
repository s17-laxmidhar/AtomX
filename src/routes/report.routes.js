const express = require('express');
const { downloadReport } = require('../controllers/report.controller');
const {validationRequestQueryMiddleware} = require('../middlewares/validation.middleware');
const { reportQuerySchema } = require('../utils/validation');

const router = express.Router();

router.get('/download', validationRequestQueryMiddleware(reportQuerySchema), downloadReport);

module.exports = router;
