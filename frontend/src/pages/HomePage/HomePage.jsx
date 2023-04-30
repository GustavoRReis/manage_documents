import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ListEmployee from '../../components/ListEmployee/ListEmployee';
import './HomePage.css';
import { db } from '../../Config/firebase';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import ConfirmDeleteDialog from '../../components/ConfirmDeleteDialog/ConfirmDeleteDialog';

import axios from 'axios';

export default function HomePage({ history }) {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [idUser, setIdUser] = useState('');

  const fetchEmployees = async (searchValue) => {
    try {
      const { data } = await axios.get('http://localhost:3001/');
      const result = data.filter((employee) =>
        employee.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setEmployees(result);
    } catch (error) {}
  };

  const deleteUser = async (id) => {
    const funcionariosRef = doc(db, 'employees', id);
    await deleteDoc(funcionariosRef);
    fetchEmployees(search);
    setConfirmDelete(false);
  };

  const getId = (id) => {
    setIdUser(id);
    setConfirmDelete(true);
  };

  useEffect(() => {
    fetchEmployees(search);
  }, [search]);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleClickPdf = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/pdf/${id}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'employee.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <div className="nav-home">
        <Button
          onClick={() => history.push('/home/register')}
          variant="contained"
        >
          + Novo Funcionário
        </Button>
        <div className="nav-search">
          <TextField
            onChange={handleInputChange}
            name="search"
            id="standard-basic"
            label="Pesquisar..."
            variant="standard"
          />
        </div>
      </div>
      <ListEmployee
        employees={employees}
        deleteUser={getId}
        handleClickPdf={handleClickPdf}
      />
      {confirmDelete && (
        <ConfirmDeleteDialog
          handleDelete={() => deleteUser(idUser)}
          handleCancel={() => setConfirmDelete(false)}
        />
      )}
    </div>
  );
}
