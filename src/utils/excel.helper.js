const ExcelJS = require('exceljs');

exports.generateExcelReport = (transactions) => {
  const workbook = new ExcelJS.Workbook();
  const summarySheet = workbook.addWorksheet('Summary');
  const dumpSheet = workbook.addWorksheet('Dump');

  const totalTransactions = transactions.length;
  const totalCredits = transactions.filter((t) => t.type === 'credit').length;
  const totalDebits = transactions.filter((t) => t.type === 'debit').length;

  summarySheet.addRow(['Total Transactions', totalTransactions]);
  summarySheet.addRow(['Total Credits', totalCredits]);
  summarySheet.addRow(['Total Debits', totalDebits]);

  dumpSheet.columns = [
    { header: 'ID', key: '_id' },
    { header: 'Type', key: 'type' },
    { header: 'Invoice', key: 'invoice' },
    { header: 'Timestamp', key: 'timestamp' },
    { header: 'Status', key: 'status' },
    { header: 'Mobile', key: 'mobile' },
  ];
  transactions.forEach((transaction) => {
    dumpSheet.addRow({
        type: transaction.type,
        invoice: transaction.invoice,
        timestamp: transaction.timestamp,
        status: transaction.status,
        mobile: transaction.mobile,
      _id: transaction._id.toString(), // Ensure _id is plain text without quotes
    });
  });


  return workbook;
};
