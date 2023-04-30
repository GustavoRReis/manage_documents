const express = require('express');
const cors = require('cors');
const PDFDocument = require('pdfkit');
const request = require('request');
const { employees, dataEmployees } = require('./Config/firebase');
const app = express();
const newPdfEmployee = require('./pdf/PdfEmployees');

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  const snapshot = await employees.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.get('/dataEmployees', async (req, res) => {
  const snapshot = await dataEmployees.get();
  const list = snapshot.docs.map((doc) => doc.data());
  res.send(list);
});

app.get('/pdf/:name', async (req, res) =>
  newPdfEmployee.employeeHistoryPdf(req, res)
);

app.get('/pdf/:id', async (req, res) =>
  newPdfEmployee.newPdfEmployee(req, res)
);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
