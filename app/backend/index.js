const express = require('express');
const cors = require('cors');
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

app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await employees.doc(id).delete();
  res.status(204).send();
});

app.get('/dataEmployees', async (req, res) => {
  const snapshot = await dataEmployees.get();
  const list = snapshot.docs.map((doc) => doc.data());
  res.send(list);
});

app.get('/pdfgenerate/:name', async (req, res) =>
  newPdfEmployee.employeeHistoryPdf(req, res)
);

app.get('/pdf/:id', async (req, res) =>
  newPdfEmployee.newPdfEmployee(req, res)
);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
