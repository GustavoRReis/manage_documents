import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../Config/firebase';
import CardPdf from '../../components/CardPdf/CardPdf';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function RegisterEmployee() {
  const initialState = {
    name: '',
    gender: '',
    address: '',
    phone: '',
    profilePicture: '',
    birthdate: '',
    position: '',
    hireDate: '',
    sector: '',
    salary: '',
    situation: '',
  };

  const [employeeInfo, setEmployeeInfo] = useState(initialState);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [imgUrl, setImageUrl] = useState('');
  const [/* progress, */ setProgress] = useState(0);

  
const handleUploadImage = (e) => {
  const file = e.target.files[0];
  if (!file) {
    return alert('Nenhum arquivo selecionado.');
  }
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
    },
    (error) => {
      console.error(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setEmployeeInfo((prevState) => ({
          ...prevState,
          profilePicture: url,
        }));
        setImageUrl(url);
      });
    }
  );
};


  console.log(imgUrl)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeInfo({ ...employeeInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = Object.values(employeeInfo).every(
      (value) => value !== ''
    );
    if (isFormValid) {
      addFormDb(employeeInfo);
      handleFormReset();
      setShouldRedirect(true);
    } else {
      alert(
        'Por favor, preencha todos os campos antes de enviar o formulário.'
      );
    }
  };

  const addFormDb = async (data) => {
    const funcionariosRef = collection(db, 'employees');
    const dataEmployees = collection(db, 'dataEmployees');
    await addDoc(funcionariosRef, data);
    await addDoc(dataEmployees, data);
  };

  const handleFormReset = () => {
    setEmployeeInfo(initialState);
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%', marginRight: '50px' }}>
          <EmployeeForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            employeeInfo={employeeInfo}
            shouldRedirect={shouldRedirect}
            handleUploadImage={handleUploadImage}
          />
        </div>
        <div>
          <CardPdf employeeInfo={employeeInfo} />
        </div>
      </div>
    </div>
  );
}
