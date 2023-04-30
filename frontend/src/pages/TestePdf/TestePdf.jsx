/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';

const TestePdf = (props) => {
  const [image, setImage] = useState('');
  const id = props.match.params.id;
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/teste/${id}`);
        setEmployeeData(data);
        setImage(data.profilePicture);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, [id]);
   console.log(image)
  const handlePrint = () => {
    if (!image) {
      console.log('A imagem ainda não foi carregada.');
      return;
    }
    const doc = new jsPDF();
    const imgData = image;

    doc.addImage(imgData, 'JPEG', 15, 40, 180, 160);
    doc.save('nome-do-arquivo.pdf');
  };

  return (
    <div>
      {image ? (
        <div>
          <button onClick={handlePrint}>Gerar PDF</button>
          <img src={image} alt="dsd"></img>
        </div>
      ) : (
        <div>Carregando imagem...</div>
      )}
    </div>
  );
};

export default TestePdf;
 */
