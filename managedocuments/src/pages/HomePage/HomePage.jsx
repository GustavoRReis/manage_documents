import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ListEmployee from '../../components/ListEmployee/ListEmployee';
import './HomePage.css';
import { db } from '../../Config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function HomePage({history}) {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [searchButton, setSearchButton] = useState('');

const fetchEmployees = async (searchValue) => {
  const querySnapshot = await getDocs(collection(db, 'employees'));
  const docs = querySnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((employee) =>
      employee.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  setEmployees(docs);
  console.log(docs);
};


useEffect(() => {
  fetchEmployees(search);
}, [search]);

    const handleInputChange = ({target}) => {
      const { value } = target;
      setSearchButton(value);
    };

  return (
    <div>
      <Header />
      <div className="nav-home">
        <Button onClick={() => history.push('/home/register')} variant="contained"> + Novo Cliente</Button>
        <div className="nav-search">
          <TextField
            onChange={handleInputChange}
            name='search'
            id="standard-basic"
            label="Pesquisar..."
            variant="standard"
          />
          <Button onClick={(e) => setSearch(searchButton)} variant="contained">Pesquisar</Button>
        </div>
      </div>
      <ListEmployee employees={employees} />
    </div>
  );
}
