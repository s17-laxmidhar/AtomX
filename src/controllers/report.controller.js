const Transaction = require('../models/transaction.model');
const { generateExcelReport } = require('../utils/excel.helper');

exports.downloadReport = async (req, res) => {
  try {
    const { startDate, endDate, type } = req.query;

    const query = {};
    if (startDate || endDate) {
      query.timestamp = {};
      if (startDate) query.timestamp.$gte = Number(startDate);
      if (endDate) query.timestamp.$lte = Number(endDate);
    }
    if (type) query.type = type;

    const transactions = await Transaction.find(query);

    const workbook = generateExcelReport(transactions);

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    const fileName = `report-${new Date().toISOString().slice(0, 10).replace(/[:.]/g, '-')}.xlsx`;
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
