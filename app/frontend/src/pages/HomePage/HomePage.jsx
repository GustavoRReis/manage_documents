import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ListEmployee from '../../components/ListEmployee/ListEmployee';
import './HomePage.css';
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
    try {
      await axios.delete(`http://localhost:3001/${id}`);
      fetchEmployees(search);
      setConfirmDelete(false);
    } catch (error) {
      console.log(error);
    }
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

  const handleClickDataPdf = async (name) => {
    const response = await axios.get(
      `http://localhost:3001/pdfgenerate/${name}`,
      {
        responseType: 'blob',
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'employee.pdf');
    document.body.appendChild(link);
    link.click();
  };

  const logout = (e) => {
    e.preventDefault();
    history.push('/');
  };

  const toHome = (e) => {
    e.preventDefault();
    history.push('/home');
  };

  return (
    <div>
      <Header logout={logout} toHome={toHome} />
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
        handleClickDataPdf={handleClickDataPdf}
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
