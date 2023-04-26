import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm';
import Header from '../../components/Header/Header';
import { db } from '../../Config/firebase';

export default function EditEmployee(props) {
  const id = props.match.params.id;
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const fetchData = async (id) => {
      const docRef = doc(db, 'employees', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmployeeData(docSnap.data());
      } else {
        console.log(`O documento com id ${id} não foi encontrado.`);
      }
    };
    fetchData(id);
  }, [id]);

  const editFormDb = async (docId, data) => {
    const funcionariosRef = doc(db, 'employees', docId);
    await updateDoc(funcionariosRef, data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editFormDb(id, employeeData);
    props.history.push('/home')
  };

  return (
    <div>
      <Header />
      {employeeData && (
        <EmployeeForm
          employeeInfo={employeeData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
