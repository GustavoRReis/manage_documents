const { employees, dataEmployees } = require('../Config/firebase');
const PDFDocument = require('pdfkit');
const request = require('request');

const newPdfEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const employeeDoc = await employees.doc(employeeId).get();
  const employeeData = employeeDoc.data();

  const doc = new PDFDocument();

  res.setHeader('Content-disposition', 'attachment; filename=employee.pdf');
  res.setHeader('Content-type', 'application/pdf');

  if (employeeData.profilePicture) {
    request.get(
      employeeData.profilePicture,
      { encoding: null },
      function (error, _response, body) {
        if (error) {
          console.error(error);
          return res.status(500).send(error.message);
        }

        const image = doc.openImage(body);
        const imageHeight = (image.height * 150) / image.width;
        const imageX = (doc.page.width - 150) / 2;
        doc.image(body, imageX, 50, { width: 150 });

        const dataX = (doc.page.width - 350) / 2;
        const dataY = 110 + imageHeight;
        doc
          .fontSize(12)
          .text(`Nome: ${employeeData.name}`, dataX, dataY)
          .text(`Sexo: ${employeeData.gender}`, dataX, dataY + 60)
          .text(
            `Data de nascimento: ${employeeData.birthdate}`,
            dataX,
            dataY + 15
          )
          .text(`Endereço: ${employeeData.address}`, dataX, dataY + 30)
          .text(`Telefone: ${employeeData.phone}`, dataX, dataY + 45)
          .text(`Cargo: ${employeeData.position}`, dataX + 200, dataY + 15)
          .text(`Setor: ${employeeData.sector}`, dataX + 200, dataY + 30)
          .text(
            `Salário: R$ ${parseInt(employeeData.salary)
              .toFixed(2)
              .replace('.', ',')}`,
            dataX + 200,
            dataY + 45
          )
          .text(
            `Data de admissão: ${employeeData.hireDate}`,
            dataX + 200,
            dataY
          )
          .text(`Situação: ${employeeData.situation}`, dataX + 200, dataY + 60);

        doc.pipe(res);
        doc.end();
      }
    );
  } else {
    doc.pipe(res);
    doc.end();
  }
};

const employeeHistoryPdf = async (req, res) => {
  const name = req.params.name;
  const snapshot = await dataEmployees.where('name', '==', name).get();
  const list = snapshot.docs.map((doc) => doc.data());

  const doc = new PDFDocument();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${name}.pdf"`);

  doc.pipe(res);

  doc
    .fontSize(16)
    .text(`Histórico do funcionário ${name}`, { align: 'center' });
  doc.moveDown();
  list.reverse().forEach((employee, index) => {
    doc.text(
      `${index + 1}: ${employee.name} - ${employee.sector} - ${
        employee.position
      } - ${employee.salary} - ${employee.situation}`,
      {
        indent: 20,
      }
    );
    doc.moveDown();
  });

  doc.end();
};

module.exports = { newPdfEmployee, employeeHistoryPdf };
