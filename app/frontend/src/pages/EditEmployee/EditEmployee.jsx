import { Box, Button, TextField } from '@mui/material';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
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
    const dataEmployees = collection(db, 'dataEmployees');
    await updateDoc(funcionariosRef, data);
    await addDoc(dataEmployees, data);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editFormDb(id, employeeData);
    props.history.push('/home');
  };

  const logout = (e) => {
    e.preventDefault();
    props.history.push('/');
  };

  const toHome = (e) => {
    e.preventDefault();
    props.history.push('/home');
  };

  return (
    <div>
      <Header logout={logout} toHome={toHome} />
      {employeeData && (
        <Box
          className="box-form"
          component="form"
          sx={{
            backgroundColor: '#F2F2F2',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            padding: '20px',
            width: '500px',
            margin: 'auto',
            height: '100hv',
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label> Foto de Perfil</label>
          <TextField
            sx={{ mb: 2, width: '100%' }}
            id="name"
            placeholder="Nome"
            name="name"
            value={employeeData.name}
            onChange={handleInputChange}
          />
          <TextField
            id="gender"
            select
            placeholder="Sexo"
            name="gender"
            value={employeeData.gender}
            onChange={handleInputChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value=""></option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </TextField>
          <TextField
            id="address"
            placeholder="Endereço"
            name="address"
            value={employeeData.address}
            onChange={handleInputChange}
          />
          <TextField
            id="phone"
            placeholder="Telefone"
            name="phone"
            value={employeeData.phone}
            onChange={handleInputChange}
          />

          <TextField
            id="birthdate"
            placeholder="Data de Nascimento"
            name="birthdate"
            type="date"
            value={employeeData.birthdate}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="position"
            placeholder="Cargo"
            name="position"
            value={employeeData.position}
            onChange={handleInputChange}
          />
          <TextField
            id="hireDate"
            placeholder="Data de Admissão"
            name="hireDate"
            type="date"
            value={employeeData.hireDate}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="sector"
            placeholder="Setor"
            name="sector"
            value={employeeData.sector}
            onChange={handleInputChange}
          />
          <TextField
            id="salary"
            placeholder="Salário"
            name="salary"
            value={employeeData.salary}
            onChange={handleInputChange}
          />
          <TextField
            id="situation"
            select
            placeholder="Situação"
            name="situation"
            value={employeeData.situation}
            onChange={handleInputChange}
            SelectProps={{
              native: true,
            }}
          >
            <option value=""></option>
            <option value="Contratado">Contratar</option>
            <option value="Promovido">Promover</option>
            <option value="Demitido">Demitir</option>
          </TextField>
          <Button
            onClick={(e) => handleSubmit(e)}
            sx={{
              borderRadius: '16px',
              width: '150px',
              margin: 'auto',
            }}
            type="submit"
            variant="contained"
          >
            Enviar
          </Button>
        </Box>
      )}
    </div>
  );
}
