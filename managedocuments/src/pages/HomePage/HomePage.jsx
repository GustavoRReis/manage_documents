import { Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import ListEmployee from '../../components/ListEmployee/ListEmployee';
import './HomePage.css';
import { db } from '../../Config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function HomePage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const docs = querySnapshot.docs.map((doc) => doc.data());
      setEmployees(docs);
      console.log(docs);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <Header />
      <div className="nav-home">
        <Button variant="contained"> + Novo Cliente</Button>
        <div className="nav-search">
          <TextField
            id="standard-basic"
            label="Pesquisar..."
            variant="standard"
          />
          <Button variant="contained">Pesquisar</Button>
        </div>
      </div>
      <ListEmployee employees={employees} />
    </div>
  );
}
