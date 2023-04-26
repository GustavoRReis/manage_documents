import React, { useState } from 'react'
import Header from '../../components/Header/Header';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Config/firebase';

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
    };

    const [employeeInfo, setEmployeeInfo] = useState(initialState);
    const [shouldRedirect, setShouldRedirect] = useState(false);

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
      await addDoc(funcionariosRef, data);
    };

    const handleFormReset = () => {
      setEmployeeInfo(initialState);
    };

  return (
    <div>
      <Header />
      <EmployeeForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        employeeInfo={employeeInfo}
        shouldRedirect={shouldRedirect}
      />
    </div>
  );
}
